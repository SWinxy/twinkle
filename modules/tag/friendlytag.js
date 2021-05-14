// <nowiki>

(function($) {


/*
 ****************************************
 *** friendlytag.js: Tag module
 ****************************************
 * Mode of invocation:     Tab ("Tag")
 * Active on:              Existing articles and drafts; file pages with a corresponding file
 *                         which is local (not on Commons); all redirects
 */

Twinkle.tag = function friendlytag() {
	// redirect tagging
	if (Morebits.isPageRedirect()) {
		Twinkle.tag.mode = 'redirect';
		Twinkle.addPortletLink(Twinkle.tag.callback, 'Tag', 'friendly-tag', 'Tag redirect');
	// file tagging
	} else if (mw.config.get('wgNamespaceNumber') === 6 && !document.getElementById('mw-sharedupload') && document.getElementById('mw-imagepage-section-filehistory')) {
		Twinkle.tag.mode = 'file';
		Twinkle.addPortletLink(Twinkle.tag.callback, 'Tag', 'friendly-tag', 'Add maintenance tags to file');
	// article/draft article tagging
	} else if ([0, 118].indexOf(mw.config.get('wgNamespaceNumber')) !== -1 && mw.config.get('wgCurRevisionId')) {
		Twinkle.tag.mode = 'article';
		// Can't remove tags when not viewing current version
		Twinkle.tag.canRemove = (mw.config.get('wgCurRevisionId') === mw.config.get('wgRevisionId')) &&
			// Disabled on latest diff because the diff slider could be used to slide
			// away from the latest diff without causing the script to reload
			!mw.config.get('wgDiffNewId');
		Twinkle.addPortletLink(Twinkle.tag.callback, 'Tag', 'friendly-tag', 'Add or remove article maintenance tags');
	}
};

Twinkle.tag.checkedTags = [];

Twinkle.tag.callback = function friendlytagCallback() {
	var Window = new Morebits.simpleWindow(630, Twinkle.tag.mode === 'article' ? 500 : 400);
	Window.setScriptName('Twinkle');
	// anyone got a good policy/guideline/info page/instructional page link??
	Window.addFooterLink('Tag prefs', 'WP:TW/PREF#tag');
	Window.addFooterLink('Twinkle help', 'WP:TW/DOC#tag');
	Window.addFooterLink('Give feedback', 'WT:TW');

	var form = new Morebits.quickForm(Twinkle.tag.callback.evaluate);

	form.append({
		type: 'input',
		label: 'Filter tag list: ',
		name: 'quickfilter',
		size: '30px',
		event: function twinkletagquickfilter() {
			// flush the DOM of all existing underline spans
			$allCheckboxDivs.find('.search-hit').each(function(i, e) {
				var label_element = e.parentElement;
				// This would convert <label>Hello <span class=search-hit>wo</span>rld</label>
				// to <label>Hello world</label>
				label_element.innerHTML = label_element.textContent;
			});

			if (this.value) {
				$allCheckboxDivs.hide();
				$allHeaders.hide();
				var searchString = this.value;
				var searchRegex = new RegExp(mw.util.escapeRegExp(searchString), 'i');

				$allCheckboxDivs.find('label').each(function () {
					var label_text = this.textContent;
					var searchHit = searchRegex.exec(label_text);
					if (searchHit) {
						var range = document.createRange();
						var textnode = this.childNodes[0];
						range.selectNodeContents(textnode);
						range.setStart(textnode, searchHit.index);
						range.setEnd(textnode, searchHit.index + searchString.length);
						var underline_span = $('<span>').addClass('search-hit').css('text-decoration', 'underline')[0];
						range.surroundContents(underline_span);
						this.parentElement.style.display = 'block'; // show
					}
				});
			} else {
				$allCheckboxDivs.show();
				$allHeaders.show();
			}
		}
	});

	switch (Twinkle.tag.mode) {
		case 'article':
			Window.setTitle('Article maintenance tagging');

			// Object.values is unavailable in IE 11
			var obj_values = Object.values || function (obj) {
				return Object.keys(obj).map(function (key) {
					return obj[key];
				});
			};

			// Build sorting and lookup object flatObject, which is always
			// needed but also used to generate the alphabetical list
			Twinkle.tag.article.flatObject = {};
			obj_values(Twinkle.tag.article.tagList).forEach(function (group) {
				obj_values(group).forEach(function (subgroup) {
					if (Array.isArray(subgroup)) {
						subgroup.forEach(function (item) {
							Twinkle.tag.article.flatObject[item.tag] = item;
						});
					} else {
						Twinkle.tag.article.flatObject[subgroup.tag] = subgroup;
					}
				});
			});


			form.append({
				type: 'select',
				name: 'sortorder',
				label: 'View this list:',
				tooltip: 'You can change the default view order in your Twinkle preferences (WP:TWPREFS).',
				event: Twinkle.tag.updateSortOrder,
				list: [
					{ type: 'option', value: 'cat', label: 'By categories', selected: Twinkle.getPref('tagArticleSortOrder') === 'cat' },
					{ type: 'option', value: 'alpha', label: 'In alphabetical order', selected: Twinkle.getPref('tagArticleSortOrder') === 'alpha' }
				]
			});


			if (!Twinkle.tag.canRemove) {
				var divElement = document.createElement('div');
				divElement.innerHTML = 'For removal of existing tags, please open Tag menu from the current version of article';
				form.append({
					type: 'div',
					name: 'untagnotice',
					label: divElement
				});
			}

			form.append({
				type: 'div',
				id: 'tagWorkArea',
				className: 'morebits-scrollbox',
				style: 'max-height: 28em'
			});

			form.append({
				type: 'checkbox',
				list: [
					{
						label: 'Group inside {{multiple issues}} if possible',
						value: 'group',
						name: 'group',
						tooltip: 'If applying two or more templates supported by {{multiple issues}} and this box is checked, all supported templates will be grouped inside a {{multiple issues}} template.',
						checked: Twinkle.getPref('groupByDefault')
					}
				]
			});

			form.append({
				type: 'input',
				label: 'Reason',
				name: 'reason',
				tooltip: 'Optional reason to be appended in edit summary. Recommended when removing tags.',
				size: '60px'
			});

			break;

		case 'file':
			Window.setTitle('File maintenance tagging');

			$.each(Twinkle.tag.fileList, function(groupName, group) {
				form.append({ type: 'header', label: groupName });
				form.append({ type: 'checkbox', name: 'tags', list: group });
			});

			if (Twinkle.getPref('customFileTagList').length) {
				form.append({ type: 'header', label: 'Custom tags' });
				form.append({ type: 'checkbox', name: 'tags', list: Twinkle.getPref('customFileTagList') });
			}
			break;

		case 'redirect':
			Window.setTitle('Redirect tagging');

			var i = 1;
			$.each(Twinkle.tag.redirectList, function(groupName, group) {
				form.append({ type: 'header', id: 'tagHeader' + i, label: groupName });
				var subdiv = form.append({ type: 'div', id: 'tagSubdiv' + i++ });
				$.each(group, function(subgroupName, subgroup) {
					subdiv.append({ type: 'div', label: [ Morebits.htmlNode('b', subgroupName) ] });
					subdiv.append({
						type: 'checkbox',
						name: 'tags',
						list: subgroup.map(function (item) {
							return { value: item.tag, label: '{{' + item.tag + '}}: ' + item.description, subgroup: item.subgroup };
						})
					});
				});
			});

			if (Twinkle.getPref('customRedirectTagList').length) {
				form.append({ type: 'header', label: 'Custom tags' });
				form.append({ type: 'checkbox', name: 'tags', list: Twinkle.getPref('customRedirectTagList') });
			}
			break;

		default:
			alert('Twinkle.tag: unknown mode ' + Twinkle.tag.mode);
			break;
	}

	if (document.getElementsByClassName('patrollink').length) {
		form.append({
			type: 'checkbox',
			list: [
				{
					label: 'Mark the page as patrolled/reviewed',
					value: 'patrol',
					name: 'patrol',
					checked: Twinkle.getPref('markTaggedPagesAsPatrolled')
				}
			]
		});
	}
	form.append({ type: 'submit', className: 'tw-tag-submit' });

	var result = form.render();
	Window.setContent(result);
	Window.display();

	// for quick filter:
	$allCheckboxDivs = $(result).find('[name$=tags]').parent();
	$allHeaders = $(result).find('h5, .quickformDescription');
	result.quickfilter.focus();  // place cursor in the quick filter field as soon as window is opened
	result.quickfilter.autocomplete = 'off'; // disable browser suggestions
	result.quickfilter.addEventListener('keypress', function(e) {
		if (e.keyCode === 13) { // prevent enter key from accidentally submitting the form
			e.preventDefault();
			return false;
		}
	});

	if (Twinkle.tag.mode === 'article') {

		Twinkle.tag.alreadyPresentTags = [];

		if (Twinkle.tag.canRemove) {
			// Look for existing maintenance tags in the lead section and put them in array

			// All tags are HTML table elements that are direct children of .mw-parser-output,
			// except when they are within {{multiple issues}}
			$('.mw-parser-output').children().each(function parsehtml(i, e) {

				// break out on encountering the first heading, which means we are no
				// longer in the lead section
				if (e.tagName === 'H2') {
					return false;
				}

				// The ability to remove tags depends on the template's {{ambox}} |name=
				// parameter bearing the template's correct name (preferably) or a name that at
				// least redirects to the actual name

				// All tags have their first class name as "box-" + template name
				if (e.className.indexOf('box-') === 0) {
					if (e.classList[0] === 'box-Multiple_issues') {
						$(e).find('.ambox').each(function(idx, e) {
							if (e.classList[0].indexOf('box-') === 0) {
								var tag = e.classList[0].slice('box-'.length).replace(/_/g, ' ');
								Twinkle.tag.alreadyPresentTags.push(tag);
							}
						});
						return true; // continue
					}

					var tag = e.classList[0].slice('box-'.length).replace(/_/g, ' ');
					Twinkle.tag.alreadyPresentTags.push(tag);
				}
			});

			// {{Uncategorized}} and {{Improve categories}} are usually placed at the end
			if ($('.box-Uncategorized').length) {
				Twinkle.tag.alreadyPresentTags.push('Uncategorized');
			}
			if ($('.box-Improve_categories').length) {
				Twinkle.tag.alreadyPresentTags.push('Improve categories');
			}

		}

		// Add status text node after Submit button
		var statusNode = document.createElement('small');
		statusNode.id = 'tw-tag-status';
		Twinkle.tag.status = {
			// initial state; defined like this because these need to be available for reference
			// in the click event handler
			numAdded: 0,
			numRemoved: 0
		};
		$('button.tw-tag-submit').after(statusNode);

		// fake a change event on the sort dropdown, to initialize the tag list
		var evt = document.createEvent('Event');
		evt.initEvent('change', true, true);
		result.sortorder.dispatchEvent(evt);

	} else {
		// Redirects and files: Add a link to each template's description page
		Morebits.quickForm.getElements(result, 'tags').forEach(generateLinks);
	}
};


// $allCheckboxDivs and $allHeaders are defined globally, rather than in the
// quickfilter event function, to avoid having to recompute them on every keydown
var $allCheckboxDivs, $allHeaders;

Twinkle.tag.updateSortOrder = function(e) {
	var form = e.target.form;
	var sortorder = e.target.value;
	Twinkle.tag.checkedTags = form.getChecked('tags');

	var container = new Morebits.quickForm.element({ type: 'fragment' });

	// function to generate a checkbox, with appropriate subgroup if needed
	var makeCheckbox = function (item) {
		var tag = item.tag, description = item.description;
		var checkbox = { value: tag, label: '{{' + tag + '}}: ' + description };
		if (Twinkle.tag.checkedTags.indexOf(tag) !== -1) {
			checkbox.checked = true;
		}
		checkbox.subgroup = item.subgroup;
		return checkbox;
	};

	var makeCheckboxesForAlreadyPresentTags = function() {
		container.append({ type: 'header', id: 'tagHeader0', label: 'Tags already present' });
		var subdiv = container.append({ type: 'div', id: 'tagSubdiv0' });
		var checkboxes = [];
		var unCheckedTags = e.target.form.getUnchecked('existingTags');
		Twinkle.tag.alreadyPresentTags.forEach(function(tag) {
			var checkbox =
				{
					value: tag,
					label: '{{' + tag + '}}' + (Twinkle.tag.article.flatObject[tag] ? ': ' + Twinkle.tag.article.flatObject[tag].description : ''),
					checked: unCheckedTags.indexOf(tag) === -1,
					style: 'font-style: italic'
				};

			checkboxes.push(checkbox);
		});
		subdiv.append({
			type: 'checkbox',
			name: 'existingTags',
			list: checkboxes
		});
	};


	if (sortorder === 'cat') { // categorical sort order
		// function to iterate through the tags and create a checkbox for each one
		var doCategoryCheckboxes = function(subdiv, subgroup) {
			var checkboxes = [];
			$.each(subgroup, function(k, item) {
				if (Twinkle.tag.alreadyPresentTags.indexOf(item.tag) === -1) {
					checkboxes.push(makeCheckbox(item));
				}
			});
			subdiv.append({
				type: 'checkbox',
				name: 'tags',
				list: checkboxes
			});
		};

		if (Twinkle.tag.alreadyPresentTags.length > 0) {
			makeCheckboxesForAlreadyPresentTags();
		}
		var i = 1;
		// go through each category and sub-category and append lists of checkboxes
		$.each(Twinkle.tag.article.tagList, function(groupName, group) {
			container.append({ type: 'header', id: 'tagHeader' + i, label: groupName });
			var subdiv = container.append({ type: 'div', id: 'tagSubdiv' + i++ });
			if (Array.isArray(group)) {
				doCategoryCheckboxes(subdiv, group);
			} else {
				$.each(group, function(subgroupName, subgroup) {
					subdiv.append({ type: 'div', label: [ Morebits.htmlNode('b', subgroupName) ] });
					doCategoryCheckboxes(subdiv, subgroup);
				});
			}
		});
	} else { // alphabetical sort order
		if (Twinkle.tag.alreadyPresentTags.length > 0) {
			makeCheckboxesForAlreadyPresentTags();
			container.append({ type: 'header', id: 'tagHeader1', label: 'Available tags' });
		}

		// Avoid repeatedly resorting
		Twinkle.tag.article.alphabeticalList = Twinkle.tag.article.alphabeticalList || Object.keys(Twinkle.tag.article.flatObject).sort();
		var checkboxes = [];
		Twinkle.tag.article.alphabeticalList.forEach(function(tag) {
			if (Twinkle.tag.alreadyPresentTags.indexOf(tag) === -1) {
				checkboxes.push(makeCheckbox(Twinkle.tag.article.flatObject[tag]));
			}
		});
		container.append({
			type: 'checkbox',
			name: 'tags',
			list: checkboxes
		});
	}

	// append any custom tags
	if (Twinkle.getPref('customTagList').length) {
		container.append({ type: 'header', label: 'Custom tags' });
		container.append({ type: 'checkbox', name: 'tags',
			list: Twinkle.getPref('customTagList').map(function(el) {
				el.checked = Twinkle.tag.checkedTags.indexOf(el.value) !== -1;
				return el;
			})
		});
	}

	var $workarea = $(form).find('#tagWorkArea');
	var rendered = container.render();
	$workarea.empty().append(rendered);

	// for quick filter:
	$allCheckboxDivs = $workarea.find('[name=tags], [name=existingTags]').parent();
	$allHeaders = $workarea.find('h5, .quickformDescription');
	form.quickfilter.value = ''; // clear search, because the search results are not preserved over mode change
	form.quickfilter.focus();

	// style adjustments
	$workarea.find('h5').css({ 'font-size': '110%' });
	$workarea.find('h5:not(:first-child)').css({ 'margin-top': '1em' });
	$workarea.find('div').filter(':has(span.quickformDescription)').css({ 'margin-top': '0.4em' });

	Morebits.quickForm.getElements(form, 'existingTags').forEach(generateLinks);
	Morebits.quickForm.getElements(form, 'tags').forEach(generateLinks);

	// tally tags added/removed, update statusNode text
	var statusNode = document.getElementById('tw-tag-status');
	$('[name=tags], [name=existingTags]').click(function() {
		if (this.name === 'tags') {
			Twinkle.tag.status.numAdded += this.checked ? 1 : -1;
		} else if (this.name === 'existingTags') {
			Twinkle.tag.status.numRemoved += this.checked ? -1 : 1;
		}

		var firstPart = 'Adding ' + Twinkle.tag.status.numAdded + ' tag' + (Twinkle.tag.status.numAdded > 1 ? 's' : '');
		var secondPart = 'Removing ' + Twinkle.tag.status.numRemoved + ' tag' + (Twinkle.tag.status.numRemoved > 1 ? 's' : '');
		statusNode.textContent =
			(Twinkle.tag.status.numAdded ? '  ' + firstPart : '') +
			(Twinkle.tag.status.numRemoved ? (Twinkle.tag.status.numAdded ? '; ' : '  ') + secondPart : '');
	});
};

/**
 * Adds a link to each template's description page
 * @param {Morebits.quickForm.element} checkbox  associated with the template
 */
var generateLinks = function(checkbox) {
	var link = Morebits.htmlNode('a', '>');
	link.setAttribute('class', 'tag-template-link');
	var tagname = checkbox.values;
	link.setAttribute('href', mw.util.getUrl(
		(tagname.indexOf(':') === -1 ? 'Template:' : '') +
		(tagname.indexOf('|') === -1 ? tagname : tagname.slice(0, tagname.indexOf('|')))
	));
	link.setAttribute('target', '_blank');
	$(checkbox).parent().append(['\u00A0', link]);
};


// Tags for ARTICLES start here
Twinkle.tag.article = {};

// Shared across {{Rough translation}} and {{Not English}}
var translationSubgroups = [
	{
		name: 'translationLanguage',
		parameter: '1',
		type: 'input',
		label: 'Language of article (if known): ',
		tooltip: 'Consider looking at [[WP:LRC]] for help. If listing the article at PNT, please try to avoid leaving this box blank, unless you are completely unsure.'
	}
].concat(mw.config.get('wgNamespaceNumber') === 0 ? [
	{
		type: 'checkbox',
		list: [ {
			name: 'translationPostAtPNT',
			label: 'List this article at Wikipedia:Pages needing translation into English (PNT)',
			checked: true
		} ]
	},
	{
		name: 'translationComments',
		type: 'textarea',
		label: 'Additional comments to post at PNT',
		tooltip: 'Optional, and only relevant if "List this article ..." above is checked.'
	}
] : []);

// Subgroups for {{merge}}, {{merge-to}} and {{merge-from}}
var getMergeSubgroups = function(tag) {
	var otherTagName = 'Merge';
	switch (tag) {
		case 'Merge from':
			otherTagName = 'Merge to';
			break;
		case 'Merge to':
			otherTagName = 'Merge from';
			break;
		// no default
	}
	return [
		{
			name: 'mergeTarget',
			type: 'input',
			label: 'Other article(s): ',
			tooltip: 'If specifying multiple articles, separate them with pipe characters: Article one|Article two',
			required: true
		},
		{
			type: 'checkbox',
			list: [
				{
					name: 'mergeTagOther',
					label: 'Tag the other article with a {{' + otherTagName + '}} tag',
					checked: true,
					tooltip: 'Only available if a single article name is entered.'
				}
			]
		}
	].concat(mw.config.get('wgNamespaceNumber') === 0 ? {
		name: 'mergeReason',
		type: 'textarea',
		label: 'Rationale for merge (will be posted on ' +
			(tag === 'Merge to' ? 'the other article\'s' : 'this article\'s') + ' talk page):',
		tooltip: 'Optional, but strongly recommended. Leave blank if not wanted. Only available if a single article name is entered.'
	} : []);
};

Twinkle.tag.fileList['Replacement tags'].forEach(function(el) {
	el.subgroup = {
		type: 'input',
		label: 'Replacement file: ',
		tooltip: 'Enter the name of the file which replaces this one (required)',
		name: el.value.replace(/ /g, '_') + 'File',
		required: true
	};
});


Twinkle.tag.callbacks = {
	article: function articleCallback(pageobj) {

		// Remove tags that become superfluous with this action
		var pageText = pageobj.getPageText().replace(/\{\{\s*([Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g, '');
		var params = pageobj.getCallbackParameters();

		/**
		 * Saves the page following the removal of tags if any. The last step.
		 * Called from removeTags()
		 */
		var postRemoval = function() {
			if (params.tagsToRemove.length) {
				// Remove empty {{multiple issues}} if found
				pageText = pageText.replace(/\{\{(multiple ?issues|article ?issues|mi)\s*\|\s*\}\}\n?/im, '');
				// Remove single-element {{multiple issues}} if found
				pageText = pageText.replace(/\{\{(?:multiple ?issues|article ?issues|mi)\s*\|\s*(\{\{[^}]+\}\})\s*\}\}/im, '$1');
			}

			// Build edit summary
			var makeSentence = function(array) {
				if (array.length < 3) {
					return array.join(' and ');
				}
				var last = array.pop();
				return array.join(', ') + ', and ' + last;
			};
			var makeTemplateLink = function(tag) {
				var text = '{{[[';
				// if it is a custom tag with a parameter
				if (tag.indexOf('|') !== -1) {
					tag = tag.slice(0, tag.indexOf('|'));
				}
				text += tag.indexOf(':') !== -1 ? tag : 'Template:' + tag + '|' + tag;
				return text + ']]}}';
			};

			var summaryText;
			var addedTags = params.tags.map(makeTemplateLink);
			var removedTags = params.tagsToRemove.map(makeTemplateLink);
			if (addedTags.length) {
				summaryText = 'Added ' + makeSentence(addedTags);
				summaryText += removedTags.length ? '; and removed ' + makeSentence(removedTags) : '';
			} else {
				summaryText = 'Removed ' + makeSentence(removedTags);
			}
			summaryText += ' tag' + (addedTags.length + removedTags.length > 1 ? 's' : '');
			if (params.reason) {
				summaryText += ': ' + params.reason;
			}

			// avoid truncated summaries
			if (summaryText.length > 499) {
				summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, '$1');
			}

			pageobj.setPageText(pageText);
			pageobj.setEditSummary(summaryText);
			if ((mw.config.get('wgNamespaceNumber') === 0 && Twinkle.getPref('watchTaggedVenues').indexOf('articles') !== -1) || (mw.config.get('wgNamespaceNumber') === 118 && Twinkle.getPref('watchTaggedVenues').indexOf('drafts') !== -1)) {
				pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
			}
			pageobj.setMinorEdit(Twinkle.getPref('markTaggedPagesAsMinor'));
			pageobj.setCreateOption('nocreate');
			pageobj.save(function() {
				// COI: Start the discussion on the talk page (mainspace only)
				if (params.coiReason) {
					var coiTalkPage = new Morebits.wiki.page('Talk:' + Morebits.pageNameNorm, 'Starting discussion on talk page');
					coiTalkPage.setNewSectionText(params.coiReason + ' ~~~~');
					coiTalkPage.setNewSectionTitle('COI tag (' + new Morebits.date(pageobj.getLoadTime()).format('MMMM Y', 'utc') + ')');
					coiTalkPage.setChangeTags(Twinkle.changeTags);
					coiTalkPage.setCreateOption('recreate');
					coiTalkPage.newSection();
				}

				// Special functions for merge tags
				// Post a rationale on the talk page (mainspace only)
				if (params.mergeReason) {
					var mergeTalkPage = new Morebits.wiki.page('Talk:' + params.discussArticle, 'Posting rationale on talk page');
					mergeTalkPage.setNewSectionText(params.mergeReason.trim() + ' ~~~~');
					mergeTalkPage.setNewSectionTitle(params.talkDiscussionTitleLinked);
					mergeTalkPage.setChangeTags(Twinkle.changeTags);
					mergeTalkPage.setWatchlist(Twinkle.getPref('watchMergeDiscussions'));
					mergeTalkPage.setCreateOption('recreate');
					mergeTalkPage.newSection();
				}
				// Tag the target page (if requested)
				if (params.mergeTagOther) {
					var otherTagName = 'Merge';
					if (params.mergeTag === 'Merge from') {
						otherTagName = 'Merge to';
					} else if (params.mergeTag === 'Merge to') {
						otherTagName = 'Merge from';
					}
					var newParams = {
						tags: [otherTagName],
						tagsToRemove: [],
						tagsToRemain: [],
						mergeTarget: Morebits.pageNameNorm,
						discussArticle: params.discussArticle,
						talkDiscussionTitle: params.talkDiscussionTitle,
						talkDiscussionTitleLinked: params.talkDiscussionTitleLinked
					};
					var otherpage = new Morebits.wiki.page(params.mergeTarget, 'Tagging other page (' +
						params.mergeTarget + ')');
					otherpage.setChangeTags(Twinkle.changeTags);
					otherpage.setCallbackParameters(newParams);
					otherpage.load(Twinkle.tag.callbacks.article);
				}

				// Special functions for {{not English}} and {{rough translation}}
				// Post at WP:PNT (mainspace only)
				if (params.translationPostAtPNT) {
					var pntPage = new Morebits.wiki.page('Wikipedia:Pages needing translation into English',
						'Listing article at Wikipedia:Pages needing translation into English');
					pntPage.setFollowRedirect(true);
					pntPage.load(function friendlytagCallbacksTranslationListPage(pageobj) {
						var old_text = pageobj.getPageText();

						var lang = params.translationLanguage;
						var reason = params.translationComments;

						var templateText = '{{subst:needtrans|pg=' + Morebits.pageNameNorm + '|Language=' +
							(lang || 'uncertain') + '|Comments=' + reason.trim() + '}} ~~~~';

						var text, summary;
						if (params.tags.indexOf('Rough translation') !== -1) {
							text = old_text + '\n\n' + templateText;
							summary = 'Translation cleanup requested on ';
						} else {
							text = old_text.replace(/\n+(==\s?Translated pages that could still use some cleanup\s?==)/,
								'\n\n' + templateText + '\n\n$1');
							summary = 'Translation' + (lang ? ' from ' + lang : '') + ' requested on ';
						}

						if (text === old_text) {
							pageobj.getStatusElement().error('failed to find target spot for the discussion');
							return;
						}
						pageobj.setPageText(text);
						pageobj.setEditSummary(summary + ' [[:' + Morebits.pageNameNorm + ']]');
						pageobj.setChangeTags(Twinkle.changeTags);
						pageobj.setCreateOption('recreate');
						pageobj.save();
					});
				}
				// Notify the user ({{Not English}} only)
				if (params.translationNotify) {
					new Morebits.wiki.page(Morebits.pageNameNorm).lookupCreation(function(innerPageobj) {
						var initialContrib = innerPageobj.getCreator();

						// Disallow warning yourself
						if (initialContrib === mw.config.get('wgUserName')) {
							innerPageobj.getStatusElement().warn('You (' + initialContrib + ') created this page; skipping user notification');
							return;
						}

						var userTalkPage = new Morebits.wiki.page('User talk:' + initialContrib,
							'Notifying initial contributor (' + initialContrib + ')');
						userTalkPage.setNewSectionTitle('Your article [[' + Morebits.pageNameNorm + ']]');
						userTalkPage.setNewSectionText('{{subst:uw-notenglish|1=' + Morebits.pageNameNorm +
							(params.translationPostAtPNT ? '' : '|nopnt=yes') + '}} ~~~~');
						userTalkPage.setEditSummary('Notice: Please use English when contributing to the English Wikipedia.');
						userTalkPage.setChangeTags(Twinkle.changeTags);
						userTalkPage.setCreateOption('recreate');
						userTalkPage.setFollowRedirect(true, false);
						userTalkPage.newSection();
					});
				}
			});

			if (params.patrol) {
				pageobj.triage();
			}
		};

		/**
		 * Removes the existing tags that were deselected (if any)
		 * Calls postRemoval() when done
		 */
		var removeTags = function removeTags() {

			if (params.tagsToRemove.length === 0) {
				postRemoval();
				return;
			}

			Morebits.status.info('Info', 'Removing deselected tags that were already present');

			var getRedirectsFor = [];

			// Remove the tags from the page text, if found in its proper name,
			// otherwise moves it to `getRedirectsFor` array earmarking it for
			// later removal
			params.tagsToRemove.forEach(function removeTag(tag) {
				var tag_re = new RegExp('\\{\\{' + Morebits.pageNameRegex(tag) + '\\s*(\\|[^}]+)?\\}\\}\\n?');

				if (tag_re.test(pageText)) {
					pageText = pageText.replace(tag_re, '');
				} else {
					getRedirectsFor.push('Template:' + tag);
				}
			});

			if (!getRedirectsFor.length) {
				postRemoval();
				return;
			}

			// Remove tags which appear in page text as redirects
			var api = new Morebits.wiki.api('Getting template redirects', {
				action: 'query',
				prop: 'linkshere',
				titles: getRedirectsFor.join('|'),
				redirects: 1,  // follow redirect if the class name turns out to be a redirect page
				lhnamespace: '10',  // template namespace only
				lhshow: 'redirect',
				lhlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				format: 'json'
			}, function removeRedirectTag(apiobj) {
				var pages = apiobj.getResponse().query.pages.filter(function(p) {
					return !p.missing && !!p.linkshere;
				});
				pages.forEach(function(page) {
					var removed = false;
					page.linkshere.forEach(function(el) {
						var tag = el.title.slice(9);
						var tag_re = new RegExp('\\{\\{' + Morebits.pageNameRegex(tag) + '\\s*(\\|[^}]*)?\\}\\}\\n?');
						if (tag_re.test(pageText)) {
							pageText = pageText.replace(tag_re, '');
							removed = true;
							return false;   // break out of $.each
						}
					});
					if (!removed) {
						Morebits.status.warn('Info', 'Failed to find {{' +
						page.title.slice(9) + '}} on the page... excluding');
					}

				});

				postRemoval();

			});
			api.post();

		};

		if (!params.tags.length) {
			removeTags();
			return;
		}

		var tagRe, tagText = '', tags = [], groupableTags = [], groupableExistingTags = [];
		// Executes first: addition of selected tags

		/**
		 * Updates `tagText` with the syntax of `tagName` template with its parameters
		 * @param {number} tagIndex
		 * @param {string} tagName
		 */
		var addTag = function articleAddTag(tagIndex, tagName) {
			var currentTag = '';
			if (tagName === 'Uncategorized' || tagName === 'Improve categories') {
				pageText += '\n\n{{' + tagName + '|date={{subst:CURRENTMONTHNAME}} {{subst:CURRENTYEAR}}}}';
			} else {
				currentTag += '{{' + tagName;
				// fill in other parameters, based on the tag

				var subgroupObj = Twinkle.tag.article.flatObject[tagName] &&
					Twinkle.tag.article.flatObject[tagName].subgroup;
				if (subgroupObj) {
					var subgroups = Array.isArray(subgroupObj) ? subgroupObj : [ subgroupObj ];
					subgroups.forEach(function(gr) {
						if (gr.parameter && (params[gr.name] || gr.required)) {
							currentTag += '|' + gr.parameter + '=' + (params[gr.name] || '');
						}
					});
				}

				switch (tagName) {
					case 'Not English':
					case 'Rough translation':
						if (params.translationPostAtPNT) {
							currentTag += '|listed=yes';
						}
						break;
					case 'Merge':
					case 'Merge to':
					case 'Merge from':
						params.mergeTag = tagName;
						// normalize the merge target for now and later
						params.mergeTarget = Morebits.string.toUpperCaseFirstChar(params.mergeTarget.replace(/_/g, ' '));

						currentTag += '|' + params.mergeTarget;

						// link to the correct section on the talk page, for article space only
						if (mw.config.get('wgNamespaceNumber') === 0 && (params.mergeReason || params.discussArticle)) {
							if (!params.discussArticle) {
								// discussArticle is the article whose talk page will contain the discussion
								params.discussArticle = tagName === 'Merge to' ? params.mergeTarget : mw.config.get('wgTitle');
								// nonDiscussArticle is the article which won't have the discussion
								params.nonDiscussArticle = tagName === 'Merge to' ? mw.config.get('wgTitle') : params.mergeTarget;
								var direction = '[[' + params.nonDiscussArticle + ']]' + (params.mergeTag === 'Merge' ? ' with ' : ' into ') + '[[' + params.discussArticle + ']]';
								params.talkDiscussionTitleLinked = 'Proposed merge of ' + direction;
								params.talkDiscussionTitle = params.talkDiscussionTitleLinked.replace(/\[\[(.*?)\]\]/g, '$1');
							}
							currentTag += '|discuss=Talk:' + params.discussArticle + '#' + params.talkDiscussionTitle;
						}
						break;
					default:
						break;
				}

				currentTag += '|date={{subst:CURRENTMONTHNAME}} {{subst:CURRENTYEAR}}}}\n';
				tagText += currentTag;
			}
		};

		/**
		 * Adds the tags which go outside {{multiple issues}}, either because
		 * these tags aren't supported in {{multiple issues}} or because
		 * {{multiple issues}} is not being added to the page at all
		 */
		var addUngroupedTags = function() {
			$.each(tags, addTag);

			// Insert tag after short description or any hatnotes,
			// as well as deletion/protection-related templates
			var wikipage = new Morebits.wikitext.page(pageText);
			var templatesAfter = Twinkle.hatnoteRegex +
				// Protection templates
				'pp|pp-.*?|' +
				// CSD
				'db|delete|db-.*?|speedy deletion-.*?|' +
				// PROD
				'(?:proposed deletion|prod blp)\\/dated(?:\\s*\\|(?:concern|user|timestamp|help).*)+|' +
				// not a hatnote, but sometimes under a CSD or AfD
				'salt|proposed deletion endorsed';
			// AfD is special, as the tag includes html comments before and after the actual template
			// trailing whitespace/newline needed since this subst's a newline
			var afdRegex = '(?:<!--.*AfD.*\\n\\{\\{(?:Article for deletion\\/dated|AfDM).*\\}\\}\\n<!--.*(?:\\n<!--.*)?AfD.*(?:\\s*\\n))?';
			pageText = wikipage.insertAfterTemplates(tagText, templatesAfter, null, afdRegex).getText();

			removeTags();
		};

		// Separate tags into groupable ones (`groupableTags`) and non-groupable ones (`tags`)
		params.tags.forEach(function(tag) {
			tagRe = new RegExp('\\{\\{' + tag + '(\\||\\}\\})', 'im');
			// regex check for preexistence of tag can be skipped if in canRemove mode
			if (Twinkle.tag.canRemove || !tagRe.exec(pageText)) {
				// condition Twinkle.tag.article.tags[tag] to ensure that its not a custom tag
				// Custom tags are assumed non-groupable, since we don't know whether MI template supports them
				if (Twinkle.tag.article.flatObject[tag] && !Twinkle.tag.article.flatObject[tag].excludeMI) {
					groupableTags.push(tag);
				} else {
					tags.push(tag);
				}
			} else {
				if (tag === 'Merge from' || tag === 'History merge') {
					tags.push(tag);
				} else {
					Morebits.status.warn('Info', 'Found {{' + tag +
						'}} on the article already...excluding');
					// don't do anything else with merge tags
					if (['Merge', 'Merge to'].indexOf(tag) !== -1) {
						params.mergeTarget = params.mergeReason = params.mergeTagOther = null;
					}
				}
			}
		});

		// To-be-retained existing tags that are groupable
		params.tagsToRemain.forEach(function(tag) {
			// If the tag is unknown to us, we consider it non-groupable
			if (Twinkle.tag.article.flatObject[tag] && !Twinkle.tag.article.flatObject[tag].excludeMI) {
				groupableExistingTags.push(tag);
			}
		});

		var miTest = /\{\{(multiple ?issues|article ?issues|mi)(?!\s*\|\s*section\s*=)[^}]+\{/im.exec(pageText);

		if (miTest && groupableTags.length > 0) {
			Morebits.status.info('Info', 'Adding supported tags inside existing {{multiple issues}} tag');

			tagText = '';
			$.each(groupableTags, addTag);

			var miRegex = new RegExp('(\\{\\{\\s*' + miTest[1] + '\\s*(?:\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?)\\}\\}\\s*', 'im');
			pageText = pageText.replace(miRegex, '$1' + tagText + '}}\n');
			tagText = '';

			addUngroupedTags();

		} else if (params.group && !miTest && (groupableExistingTags.length + groupableTags.length) >= 2) {
			Morebits.status.info('Info', 'Grouping supported tags inside {{multiple issues}}');

			tagText += '{{Multiple issues|\n';

			/**
			 * Adds newly added tags to MI
			 */
			var addNewTagsToMI = function() {
				$.each(groupableTags, addTag);
				tagText += '}}\n';

				addUngroupedTags();
			};


			var getRedirectsFor = [];

			// Reposition the tags on the page into {{multiple issues}}, if found with its
			// proper name, else moves it to `getRedirectsFor` array to be handled later
			groupableExistingTags.forEach(function repositionTagIntoMI(tag) {
				var tag_re = new RegExp('(\\{\\{' + Morebits.pageNameRegex(tag) + '\\s*(\\|[^}]+)?\\}\\}\\n?)');
				if (tag_re.test(pageText)) {
					tagText += tag_re.exec(pageText)[1];
					pageText = pageText.replace(tag_re, '');
				} else {
					getRedirectsFor.push('Template:' + tag);
				}
			});

			if (!getRedirectsFor.length) {
				addNewTagsToMI();
				return;
			}

			var api = new Morebits.wiki.api('Getting template redirects', {
				action: 'query',
				prop: 'linkshere',
				titles: getRedirectsFor.join('|'),
				redirects: 1,
				lhnamespace: '10', // template namespace only
				lhshow: 'redirect',
				lhlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				format: 'json'
			}, function replaceRedirectTag(apiobj) {
				var pages = apiobj.getResponse().query.pages.filter(function(p) {
					return !p.missing && !!p.linkshere;
				});
				pages.forEach(function(page) {
					var found = false;
					page.linkshere.forEach(function(el) {
						var tag = el.title.slice(9);
						var tag_re = new RegExp('(\\{\\{' + Morebits.pageNameRegex(tag) + '\\s*(\\|[^}]*)?\\}\\}\\n?)');
						if (tag_re.test(pageText)) {
							tagText += tag_re.exec(pageText)[1];
							pageText = pageText.replace(tag_re, '');
							found = true;
							return false;   // break out of $.each
						}
					});
					if (!found) {
						Morebits.status.warn('Info', 'Failed to find the existing {{' +
						page.title.slice(9) + '}} on the page... skip repositioning');
					}
				});
				addNewTagsToMI();
			});
			api.post();

		} else {
			tags = tags.concat(groupableTags);
			addUngroupedTags();
		}
	},

	redirect: function redirect(pageobj) {
		var params = pageobj.getCallbackParameters(),
			pageText = pageobj.getPageText(),
			tagRe, tagText = '', summaryText = 'Added',
			tags = [], i;

		for (i = 0; i < params.tags.length; i++) {
			tagRe = new RegExp('(\\{\\{' + params.tags[i] + '(\\||\\}\\}))', 'im');
			if (!tagRe.exec(pageText)) {
				tags.push(params.tags[i]);
			} else {
				Morebits.status.warn('Info', 'Found {{' + params.tags[i] +
					'}} on the redirect already...excluding');
			}
		}

		var addTag = function redirectAddTag(tagIndex, tagName) {
			tagText += '\n{{' + tagName;
			if (tagName === 'R from alternative language') {
				if (params.altLangFrom) {
					tagText += '|from=' + params.altLangFrom;
				}
				if (params.altLangTo) {
					tagText += '|to=' + params.altLangTo;
				}
			} else if (tagName === 'R avoided double redirect' && params.doubleRedirectTarget) {
				tagText += '|1=' + params.doubleRedirectTarget;
			}
			tagText += '}}';

			if (tagIndex > 0) {
				if (tagIndex === (tags.length - 1)) {
					summaryText += ' and';
				} else if (tagIndex < (tags.length - 1)) {
					summaryText += ',';
				}
			}

			summaryText += ' {{[[:' + (tagName.indexOf(':') !== -1 ? tagName : 'Template:' + tagName + '|' + tagName) + ']]}}';
		};

		if (!tags.length) {
			Morebits.status.warn('Info', 'No tags remaining to apply');
		}

		tags.sort();
		$.each(tags, addTag);

		// Check for all Rcat shell redirects (from #433)
		if (pageText.match(/{{(?:redr|this is a redirect|r(?:edirect)?(?:.?cat.*)?[ _]?sh)/i)) {
			// Regex inspired by [[User:Kephir/gadgets/sagittarius.js]] ([[Special:PermaLink/831402893]])
			var oldTags = pageText.match(/(\s*{{[A-Za-z\s]+\|(?:\s*1=)?)((?:[^|{}]|{{[^}]+}})+)(}})\s*/i);
			pageText = pageText.replace(oldTags[0], oldTags[1] + tagText + oldTags[2] + oldTags[3]);
		} else {
			// Fold any pre-existing Rcats into taglist and under Rcatshell
			var pageTags = pageText.match(/\s*{{R(?:edirect)? .*?}}/img);
			var oldPageTags = '';
			if (pageTags) {
				pageTags.forEach(function(pageTag) {
					var pageRe = new RegExp(Morebits.string.escapeRegExp(pageTag), 'img');
					pageText = pageText.replace(pageRe, '');
					pageTag = pageTag.trim();
					oldPageTags += '\n' + pageTag;
				});
			}
			pageText += '\n{{Redirect category shell|' + tagText + oldPageTags + '\n}}';
		}

		summaryText += (tags.length > 0 ? ' tag' + (tags.length > 1 ? 's' : ' ') : 'rcat shell') + ' to redirect';

		// avoid truncated summaries
		if (summaryText.length > 499) {
			summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, '$1');
		}

		pageobj.setPageText(pageText);
		pageobj.setEditSummary(summaryText);
		if (Twinkle.getPref('watchTaggedVenues').indexOf('redirects') !== -1) {
			pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
		}
		pageobj.setMinorEdit(Twinkle.getPref('markTaggedPagesAsMinor'));
		pageobj.setCreateOption('nocreate');
		pageobj.save();

		if (params.patrol) {
			pageobj.triage();
		}

	},

	file: function friendlytagCallbacksFile(pageobj) {
		var text = pageobj.getPageText();
		var params = pageobj.getCallbackParameters();
		var summary = 'Adding ';

		// Add maintenance tags
		if (params.tags.length) {

			var tagtext = '', currentTag;
			$.each(params.tags, function(k, tag) {
				// when other commons-related tags are placed, remove "move to Commons" tag
				if (['Keep local', 'Now Commons', 'Do not move to Commons'].indexOf(tag) !== -1) {
					text = text.replace(/\{\{(mtc|(copy |move )?to ?commons|move to wikimedia commons|copy to wikimedia commons)[^}]*\}\}/gi, '');
				}

				currentTag = tag;

				switch (tag) {
					case 'Now Commons':
						currentTag = 'subst:' + currentTag; // subst
						if (params.nowcommonsName !== '') {
							currentTag += '|1=' + params.nowcommonsName;
						}
						break;
					case 'Keep local':
						if (params.keeplocalName !== '') {
							currentTag += '|1=' + params.keeplocalName;
						}
						break;
					case 'Rename media':
						if (params.renamemediaNewname !== '') {
							currentTag += '|1=' + params.renamemediaNewname;
						}
						if (params.renamemediaReason !== '') {
							currentTag += '|2=' + params.renamemediaReason;
						}
						break;
					case 'Cleanup image':
						currentTag += '|1=' + params.cleanupimageReason;
						break;
					case 'Image-Poor-Quality':
						currentTag += '|1=' + params.ImagePoorQualityReason;
						break;
					case 'Image hoax':
						currentTag += '|date={{subst:CURRENTMONTHNAME}} {{subst:CURRENTYEAR}}';
						break;
					case 'Low quality chem':
						currentTag += '|1=' + params.lowQualityChemReason;
						break;
					case 'Vector version available':
						text = text.replace(/\{\{((convert to |convertto|should be |shouldbe|to)?svg|badpng|vectorize)[^}]*\}\}/gi, '');
						/* falls through */
					case 'PNG version available':
						/* falls through */
					case 'Obsolete':
						currentTag += '|1=' + params[tag.replace(/ /g, '_') + 'File'];
						break;
					case 'Do not move to Commons':
						currentTag += '|reason=' + params.DoNotMoveToCommons_reason;
						if (params.DoNotMoveToCommons_expiry) {
							currentTag += '|expiry=' + params.DoNotMoveToCommons_expiry;
						}
						break;
					case 'Orphaned non-free revisions':
						currentTag = 'subst:' + currentTag; // subst
						// remove {{non-free reduce}} and redirects
						text = text.replace(/\{\{\s*(Template\s*:\s*)?(Non-free reduce|FairUseReduce|Fairusereduce|Fair Use Reduce|Fair use reduce|Reduce size|Reduce|Fair-use reduce|Image-toobig|Comic-ovrsize-img|Non-free-reduce|Nfr|Smaller image|Nonfree reduce)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/ig, '');
						currentTag += '|date={{subst:date}}';
						break;
					case 'Copy to Commons':
						currentTag += '|human=' + mw.config.get('wgUserName');
						break;
					case 'Should be SVG':
						currentTag += '|' + params.svgCategory;
						break;
					default:
						break;  // don't care
				}

				currentTag = '{{' + currentTag + '}}\n';

				tagtext += currentTag;
				summary += '{{' + tag + '}}, ';
			});

			if (!tagtext) {
				pageobj.getStatusElement().warn('User canceled operation; nothing to do');
				return;
			}

			text = tagtext + text;
		}

		pageobj.setPageText(text);
		pageobj.setEditSummary(summary.substring(0, summary.length - 2));
		pageobj.setChangeTags(Twinkle.changeTags);
		if (Twinkle.getPref('watchTaggedVenues').indexOf('files') !== -1) {
			pageobj.setWatchlist(Twinkle.getPref('watchTaggedPages'));
		}
		pageobj.setMinorEdit(Twinkle.getPref('markTaggedPagesAsMinor'));
		pageobj.setCreateOption('nocreate');
		pageobj.save();

		if (params.patrol) {
			pageobj.triage();
		}
	}
};

Twinkle.tag.callback.evaluate = function friendlytagCallbackEvaluate(e) {
	var form = e.target;
	var params = Morebits.quickForm.getInputData(form);


	// Validation

	// Given an array of incompatible tags, check if we have two or more selected
	var checkIncompatible = function(conflicts, extra) {
		var count = conflicts.reduce(function(sum, tag) {
			return sum += params.tags.indexOf(tag) !== -1;
		}, 0);
		if (count > 1) {
			var message = 'Please select only one of: {{' + conflicts.join('}}, {{') + '}}.';
			message += extra ? ' ' + extra : '';
			alert(message);
			return true;
		}
	};

	// We could theoretically put them all checkIncompatible calls in a
	// forEach loop, but it's probably clearer not to have [[array one],
	// [array two]] devoid of context.
	switch (Twinkle.tag.mode) {
		case 'article':
			params.tagsToRemove = form.getUnchecked('existingTags'); // not in `input`
			params.tagsToRemain = params.existingTags || []; // container not created if none present

			if ((params.tags.indexOf('Merge') !== -1) || (params.tags.indexOf('Merge from') !== -1) ||
				(params.tags.indexOf('Merge to') !== -1)) {
				if (checkIncompatible(['Merge', 'Merge from', 'Merge to'], 'If several merges are required, use {{Merge}} and separate the article names with pipes (although in this case Twinkle cannot tag the other articles automatically).')) {
					return;
				}
				if ((params.mergeTagOther || params.mergeReason) && params.mergeTarget.indexOf('|') !== -1) {
					alert('Tagging multiple articles in a merge, and starting a discussion for multiple articles, is not supported at the moment. Please turn off "tag other article", and/or clear out the "reason" box, and try again.');
					return;
				}
			}

			if (checkIncompatible(['Not English', 'Rough translation'])) {
				return;
			}
			break;

		case 'file':
			if (checkIncompatible(['Bad GIF', 'Bad JPEG', 'Bad SVG', 'Bad format'])) {
				return;
			}
			if (checkIncompatible(['Should be PNG', 'Should be SVG', 'Should be text'])) {
				return;
			}
			if (checkIncompatible(['Bad SVG', 'Vector version available'])) {
				return;
			}
			if (checkIncompatible(['Bad JPEG', 'Overcompressed JPEG'])) {
				return;
			}
			if (checkIncompatible(['PNG version available', 'Vector version available'])) {
				return;
			}

			// Get extension from either mime-type or title, if not present (e.g., SVGs)
			var extension = ((extension = $('.mime-type').text()) && extension.split(/\//)[1]) || mw.Title.newFromText(Morebits.pageNameNorm).getExtension();
			if (extension) {
				var extensionUpper = extension.toUpperCase();
				// What self-respecting file format has *two* extensions?!
				if (extensionUpper === 'JPG') {
					extension = 'JPEG';
				}

				// Check that selected templates make sense given the file's extension.

				// Bad GIF|JPEG|SVG
				var badIndex; // Keep track of where the offending template is so we can reference it below
				if ((extensionUpper !== 'GIF' && ((badIndex = params.tags.indexOf('Bad GIF')) !== -1)) ||
					(extensionUpper !== 'JPEG' && ((badIndex = params.tags.indexOf('Bad JPEG')) !== -1)) ||
					(extensionUpper !== 'SVG' && ((badIndex = params.tags.indexOf('Bad SVG')) !== -1))) {
					var suggestion = 'This appears to be a ' + extension + ' file, ';
					if (['GIF', 'JPEG', 'SVG'].indexOf(extensionUpper) !== -1) {
						suggestion += 'please use {{Bad ' + extensionUpper + '}} instead.';
					} else {
						suggestion += 'so {{' + params.tags[badIndex] + '}} is inappropriate.';
					}
					alert(suggestion);
					return;
				}
				// Should be PNG|SVG
				if ((params.tags.toString().indexOf('Should be ') !== -1) && (params.tags.indexOf('Should be ' + extensionUpper) !== -1)) {
					alert('This is already a ' + extension + ' file, so {{Should be ' + extensionUpper + '}} is inappropriate.');
					return;
				}

				// Overcompressed JPEG
				if (params.tags.indexOf('Overcompressed JPEG') !== -1 && extensionUpper !== 'JPEG') {
					alert('This appears to be a ' + extension + ' file, so {{Overcompressed JPEG}} probably doesn\'t apply.');
					return;
				}
				// Bad trace and Bad font
				if (extensionUpper !== 'SVG') {
					if (params.tags.indexOf('Bad trace') !== -1) {
						alert('This appears to be a ' + extension + ' file, so {{Bad trace}} probably doesn\'t apply.');
						return;
					} else if (params.tags.indexOf('Bad font') !== -1) {
						alert('This appears to be a ' + extension + ' file, so {{Bad font}} probably doesn\'t apply.');
						return;
					}
				}
			}

			if (params.tags.indexOf('Do not move to Commons') !== -1 && params.DoNotMoveToCommons_expiry &&
				(!/^2\d{3}$/.test(params.DoNotMoveToCommons_expiry) || parseInt(params.DoNotMoveToCommons_expiry, 10) <= new Date().getFullYear())) {
				alert('Must be a valid future year.');
				return;
			}
			break;

		case 'redirect':
			break;

		default:
			alert('Twinkle.tag: unknown mode ' + Twinkle.tag.mode);
			break;
	}

	// File/redirect: return if no tags selected
	// Article: return if no tag is selected and no already present tag is deselected
	if (params.tags.length === 0 && (Twinkle.tag.mode !== 'article' || params.tagsToRemove.length === 0)) {
		alert('You must select at least one tag!');
		return;
	}

	Morebits.simpleWindow.setButtonsEnabled(false);
	Morebits.status.init(form);

	Morebits.wiki.actionCompleted.redirect = Morebits.pageNameNorm;
	Morebits.wiki.actionCompleted.notice = 'Tagging complete, reloading article in a few seconds';
	if (Twinkle.tag.mode === 'redirect') {
		Morebits.wiki.actionCompleted.followRedirect = false;
	}

	var wikipedia_page = new Morebits.wiki.page(Morebits.pageNameNorm, 'Tagging ' + Twinkle.tag.mode);
	wikipedia_page.setCallbackParameters(params);
	wikipedia_page.setChangeTags(Twinkle.changeTags); // Here to apply to triage
	wikipedia_page.load(Twinkle.tag.callbacks[Twinkle.tag.mode]);

};

Twinkle.addInitCallback(Twinkle.tag, 'tag');
})(jQuery);
// </nowiki>
