// Tags arranged by category; will be used to generate the alphabetical list,
// but tags should be in alphabetical order within the categories
// excludeMI: true indicate a tag that *does not* work inside {{multiple issues}}
// Add new categories with discretion - the list is long enough as is!
Twinkle.tag.article.tagList = {
	'Cleanup and maintenance tags': {
		'General cleanup': [
			{
				tag: 'Cleanup', description: 'requires cleanup',
				subgroup: {
					name: 'cleanup',
					parameter: 'reason',
					type: 'input',
					label: 'Specific reason why cleanup is needed: ',
					tooltip: 'Required.',
					size: 35,
					required: true
				}
			},  // has a subgroup with text input
			{
				tag: 'Cleanup AfD',
				description: 'requires cleaning up due to a closed deletion discussion'
			},
			{
				tag: 'Copy edit',
				description: 'requires copy editing for grammar, style, cohesion, tone, or spelling',
				subgroup: {
					name: 'copyEdit',
					parameter: 'for',
					type: 'input',
					label: '"This article may require copy editing for..." ',
					tooltip: 'e.g. "consistent spelling". Optional.',
					size: 35
				}
			},  // has a subgroup with text input
			{
				tag: 'Cleanup rewrite',
				description: "needs to be rewritten entirely to comply with Wikipedia's quality standards"
			}
		],
		'Potentially unwanted content': [
			{ tag: 'Cleanup list', description: 'contains embedded lists that may be poorly defined, unverified, or indescriminate' },
			{
				tag: 'Close paraphrasing',
				description: 'contains close paraphrasing of a non-free copyrighted source',
				subgroup: {
					name: 'closeParaphrasing',
					parameter: 'source',
					type: 'input',
					label: 'Source: ',
					tooltip: 'Source that has been closely paraphrased'
				}
			},
			{ tag: 'Cleanup red links', description: 'use of red links may not follow Wikipedia\'s guidelines' },
			{
				tag: 'Copypaste',
				description: 'appears to have been copied and pasted from another location',
				excludeMI: true,
				subgroup: {
					name: 'copypaste',
					parameter: 'url',
					type: 'input',
					label: 'Source URL: ',
					tooltip: 'If known.',
					size: 50
				}
			},  // has a subgroup with text input
			{ tag: 'Criticism section', description: 'article\'s criticism or controversy section may comprimise the article\'s NPOV' },
			{ tag: 'External links', description: 'external links may not follow content policies or guidelines' },
			{ tag: 'In popular culture', description: 'article appears to have trivial, minor, or unrelated references to popular culture' },
			{ tag: 'MOS', description: 'article needs editing according to Wikipedia\'s Manual of Style' },
			{ tag: 'Non-free', description: 'may contain excessive or improper use of copyrighted materials' },
			{ tag: 'Overlinked', description: 'article may have too many links to other articles' },
// 			{ tag: 'Schedule', description: 'article contains a television or radio schedule' },
			{ tag: 'Trivia', description: 'article contains a list of miscellaneous information' }
		],
		'Structure, formatting, and lead section': [
			{ tag: 'Cleanup reorganize', description: "needs reorganization to comply with Wikipedia's layout guidelines" },
			duplication
			overcolored
			summarize section
			too many see alsos
			improve lead
			lead extra info
			pov lead
			{ tag: 'Lead missing', description: 'no lead section' },
			{ tag: 'Lead rewrite', description: 'lead section needs to be rewritten to comply with guidelines' },
			{ tag: 'Lead too long', description: 'lead section is too long for the length of the article' },
			{ tag: 'Lead too short', description: 'lead section is too short and should be expanded to summarize key points' },
			{ tag: 'Sections', description: 'needs to be divided into sections by topic' },
			{ tag: 'Too many sections', description: 'too many section headers dividing up content, should be condensed' },
			{ tag: 'Very long', description: 'too long to read and navigate comfortably' }
		],
		'Fiction-related cleanup': [
			{ tag: 'All plot', description: 'almost entirely a plot summary' },
			{ tag: 'Fiction', description: 'fails to distinguish between fact and fiction' },
			{ tag: 'In-universe', description: 'subject is fictional and needs rewriting to provide a non-fictional perspective' },
			{ tag: 'Long plot', description: 'plot summary is too long or excessively detailed' },
			{ tag: 'No plot', description: 'needs a plot summary' }
		]
	},
	'General content issues': {
		'Importance and notability': [
			{ tag: 'Notability', description: 'subject may not meet the general notability guideline',
				subgroup: {
					name: 'notability',
					parameter: '1',
					type: 'select',
					list: [
						{ label: "{{notability}}: article's subject may not meet the general notability guideline", value: '' },
						{ label: '{{notability|Academics}}: notability guideline for academics', value: 'Academics' },
						{ label: '{{notability|Astro}}: notability guideline for astronomical objects', value: 'Astro' },
						{ label: '{{notability|Biographies}}: notability guideline for biographies', value: 'Biographies' },
						{ label: '{{notability|Books}}: notability guideline for books', value: 'Books' },
						{ label: '{{notability|Companies}}: notability guidelines for companies and organizations', value: 'Companies' },
						{ label: '{{notability|Events}}: notability guideline for events', value: 'Events' },
						{ label: '{{notability|Films}}: notability guideline for films', value: 'Films' },
						{ label: '{{notability|Geographic}}: notability guideline for geographic features', value: 'Geographic' },
						{ label: '{{notability|Lists}}: notability guideline for stand-alone lists', value: 'Lists' },
						{ label: '{{notability|Music}}: notability guideline for music', value: 'Music' },
						{ label: '{{notability|Neologisms}}: notability guideline for neologisms', value: 'Neologisms' },
						{ label: '{{notability|Numbers}}: notability guideline for numbers', value: 'Numbers' },
						{ label: '{{notability|Products}}: notability guideline for products and services', value: 'Products' },
						{ label: '{{notability|Sports}}: notability guideline for sports and athletics', value: 'Sports' },
						{ label: '{{notability|Television}}: notability guideline for television shows', value: 'Television' },
						{ label: '{{notability|Web}}: notability guideline for web content', value: 'Web' }
					]
				}
			}
		],
		'Style of writing': [
			abbreviations
			buzzword
			cleanup tense
			debate
			example farm
			how-to
			innapropriate person
			obituary
			peacock
			pro and con list
			repetition
			research paper
			review
			speculation
			story
			travel guide
			verbosity
			{ tag: 'Advert', description: 'written like an advertisement' },
			{ tag: 'Cleanup tense', description: 'does not follow guidelines on use of different tenses.' },
			{ tag: 'Essay-like', description: 'written like a personal reflection, personal essay, or argumentative essay' },
			{ tag: 'Fanpov', description: "written from a fan's point of view" },
			{ tag: 'Like resume', description: 'written like a resume' },
			{ tag: 'Manual', description: 'written like a manual or guidebook' },
			{ tag: 'Cleanup-PR', description: 'reads like a press release or news article',
				subgroup: {
					type: 'hidden',
					name: 'cleanupPR1',
					parameter: '1',
					value: 'article'
				}
			},
			{ tag: 'Over-quotation', description: 'too many or too-lengthy quotations for an encyclopedic entry' },
			{ tag: 'Prose', description: 'written in a list format but may read better as prose' },
			{ tag: 'Technical', description: 'too technical for most readers to understand' },
			{ tag: 'Tone', description: 'tone or style may not reflect the encyclopedic tone used on Wikipedia' }
		],
		'Sense (or lack thereof)': [
			{ tag: 'Confusing', description: 'confusing or unclear' },
			{ tag: 'Incomprehensible', description: 'very hard to understand or incomprehensible' },
			{ tag: 'Unfocused', description: 'lacks focus or is about more than one topic' }
		],
		'Information and detail': [
			{ tag: 'Context', description: 'insufficient context for those unfamiliar with the subject' },
			{ tag: 'Expert needed', description: 'needs attention from an expert on the subject',
				subgroup: [
					{
						name: 'expertNeeded',
						parameter: '1',
						type: 'input',
						label: 'Name of relevant WikiProject: ',
						tooltip: 'Optionally, enter the name of a WikiProject which might be able to help recruit an expert. Don\'t include the "WikiProject" prefix.'
					},
					{
						name: 'expertNeededReason',
						parameter: 'reason',
						type: 'input',
						label: 'Reason: ',
						tooltip: 'Short explanation describing the issue. Either Reason or Talk link is required.'
					},
					{
						name: 'expertNeededTalk',
						parameter: 'talk',
						type: 'input',
						label: 'Talk discussion: ',
						tooltip: 'Name of the section of this article\'s talk page where the issue is being discussed. Do not give a link, just the name of the section. Either Reason or Talk link is required.'
					}
				]
			},
			{ tag: 'Overly detailed', description: 'excessive amount of intricate detail' },
			{ tag: 'Undue weight', description: 'lends undue weight to certain ideas, incidents, or controversies' }
		],
		'Timeliness': [
			{ tag: 'Current', description: 'documents a current event', excludeMI: true }, // Works but not intended for use in MI
			{ tag: 'Update', description: 'needs additional up-to-date information added' }
		],
		'Neutrality, bias, and factual accuracy': [
			{ tag: 'Autobiography', description: 'autobiography and may not be written neutrally' },
			{ tag: 'COI', description: 'creator or major contributor may have a conflict of interest', subgroup: mw.config.get('wgNamespaceNumber') === 0 ? {
				name: 'coiReason',
				type: 'textarea',
				label: 'Explanation for COI tag (will be posted on this article\'s talk page):',
				tooltip: 'Optional, but strongly recommended. Leave blank if not wanted.'
			} : [] },
			{ tag: 'Disputed', description: 'questionable factual accuracy' },
			{ tag: 'Hoax', description: 'may partially or completely be a hoax' },
			{ tag: 'Globalize', description: 'may not represent a worldwide view of the subject',
				subgroup: [
					{
						type: 'hidden',
						name: 'globalize1',
						parameter: '1',
						value: 'article'
					}, {
						name: 'globalizeRegion',
						parameter: '2',
						type: 'input',
						label: 'Over-represented country or region'
					}
				]
			},
			{ tag: 'Over-coverage', description: 'extensive bias or disproportional coverage towards one or more specific regions' },
			{ tag: 'Paid contributions', description: 'contains paid contributions, and may therefore require cleanup' },
			{ tag: 'Peacock', description: 'contains wording that promotes the subject in a subjective manner without adding information' },
			{ tag: 'POV', description: 'does not maintain a neutral point of view' },
			{ tag: 'Recentism', description: 'slanted towards recent events' },
			{ tag: 'Too few opinions', description: 'may not include all significant viewpoints' },
			{ tag: 'Undisclosed paid', description: 'may have been created or edited in return for undisclosed payments' },
			{ tag: 'Weasel', description: 'neutrality or verifiability is compromised by the use of weasel words' }
		],
		'Verifiability and sources': [
			{ tag: 'BLP sources', description: 'BLP that needs additional sources for verification' },
			{ tag: 'BLP unsourced', description: 'BLP that has no sources at all (use BLP PROD instead for new articles)' },
			{ tag: 'More citations needed', description: 'needs additional references or sources for verification' },
			{ tag: 'One source', description: 'relies largely or entirely on a single source' },
			{ tag: 'Original research', description: 'contains original research' },
			{ tag: 'Primary sources', description: 'relies too much on references to primary sources, and needs secondary sources' },
			{ tag: 'Self-published', description: 'contains excessive or inappropriate references to self-published sources' },
			{ tag: 'Sources exist', description: 'notable topic, sources are available that could be added to article' },
			{ tag: 'Third-party', description: 'relies too heavily on sources too closely associated with the subject' },
			{ tag: 'Unreferenced', description: 'does not cite any sources at all' },
			{ tag: 'Unreliable sources', description: 'some references may not be reliable' }
		]
	},
	'Specific content issues': {
		'Language': [
			{ tag: 'Not English', description: 'written in a language other than English and needs translation',
				excludeMI: true,
				subgroup: translationSubgroups.slice(0, 1).concat([{
					type: 'checkbox',
					list: [
						{
							name: 'translationNotify',
							label: 'Notify article creator',
							checked: true,
							tooltip: "Places {{uw-notenglish}} on the creator's talk page."
						}
					]
				}]).concat(translationSubgroups.slice(1))
			},
			{ tag: 'Rough translation', description: 'poor translation from another language', excludeMI: true,
				subgroup: translationSubgroups
			},
			{ tag: 'Expand language', description: 'should be expanded with text translated from a foreign-language article',
				excludeMI: true,
				subgroup: [{
					type: 'hidden',
					name: 'expandLangTopic',
					parameter: 'topic',
					value: '',
					required: true // force empty topic param in output
				}, {
					name: 'expandLanguageLangCode',
					parameter: 'langcode',
					type: 'input',
					label: 'Language code: ',
					tooltip: 'Language code of the language from which article is to be expanded from',
					required: true
				}, {
					name: 'expandLanguageArticle',
					parameter: 'otherarticle',
					type: 'input',
					label: 'Name of article: ',
					tooltip: 'Name of article to be expanded from, without the interwiki prefix'
				}]
			}
		],
		'Links': [
			{ tag: 'Dead end', description: 'article has no links to other articles' },
			{ tag: 'Orphan', description: 'linked to from no other articles' },
			{ tag: 'Overlinked', description: 'too many duplicate and/or irrelevant links to other articles' },
			{ tag: 'Underlinked', description: 'needs more wikilinks to other articles' }
		],
		'Referencing technique': [
			{ tag: 'Citation style', description: 'unclear or inconsistent citation style' },
			{ tag: 'Cleanup bare URLs', description: 'uses bare URLs for references, which are prone to link rot' },
			{ tag: 'More footnotes', description: 'has some references, but insufficient inline citations' },
			{ tag: 'No footnotes', description: 'has references, but lacks inline citations' }
		],
		'Categories': [
			{ tag: 'Improve categories', description: 'needs additional or more specific categories', excludeMI: true },
			{ tag: 'Uncategorized', description: 'not added to any categories', excludeMI: true }
		]
	},
	'Merging': [
		{
			tag: 'History merge',
			description: 'another page should be history merged into this one',
			excludeMI: true,
			subgroup: [
				{
					name: 'histmergeOriginalPage',
					parameter: 'originalpage',
					type: 'input',
					label: 'Other article: ',
					tooltip: 'Name of the page that should be merged into this one (required).',
					required: true
				},
				{
					name: 'histmergeReason',
					parameter: 'reason',
					type: 'input',
					label: 'Reason: ',
					tooltip: 'Short explanation describing the reason a history merge is needed. Should probably begin with "because" and end with a period.'
				},
				{
					name: 'histmergeSysopDetails',
					parameter: 'details',
					type: 'input',
					label: 'Extra details: ',
					tooltip: 'For complex cases, provide extra instructions for the reviewing administrator.'
				}
			]
		},
		{ tag: 'Merge', description: 'should be merged with another given article', excludeMI: true,
			subgroup: getMergeSubgroups('Merge') },
		{ tag: 'Merge from', description: 'another given article should be merged into this one', excludeMI: true,
			subgroup: getMergeSubgroups('Merge from') },
		{ tag: 'Merge to', description: 'should be merged into another given article', excludeMI: true,
			subgroup: getMergeSubgroups('Merge to') }
	],
	'Informational': [
		{ tag: 'GOCEinuse', description: 'currently undergoing a major copy edit by the Guild of Copy Editors', excludeMI: true },
		{ tag: 'In use', description: 'undergoing a major edit for a short while', excludeMI: true },
		{ tag: 'Under construction', description: 'in the process of an expansion or major restructuring', excludeMI: true }
	]
};