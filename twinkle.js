/**
 * +-------------------------------------------------------------------------+
 * |                  === WARNING: GLOBAL GADGET FILE ===                    |
 * |                Changes to this page affect many users.                  |
 * |           Please discuss changes at [[WT:TW]] before editing.           |
 * +-------------------------------------------------------------------------+
 *
 * Imported from github [https://github.com/azatoth/twinkle].
 * All changes should be made in the repository, otherwise they will be lost.
 *
 * To update this script from github, you must have a local repository set up. Then
 * follow the instructions at [https://github.com/azatoth/twinkle/blob/master/README.md].
 *
 * ----------
 *
 * This is AzaToth's Twinkle, the popular script sidekick for newbies, admins, and
 * every Wikipedian in between. Visit [[WP:TW]] for more information.
 */
// <nowiki>

/* global Morebits */

(function (window, document, $) { // Wrap with anonymous function

var Twinkle = {};
window.Twinkle = Twinkle;  // allow global access

// Check if account is experienced enough to use Twinkle
Twinkle.userAuthorized = Morebits.userIsInGroup('autoconfirmed') || Morebits.userIsInGroup('confirmed');

// for use by custom modules (normally empty)
Twinkle.initCallbacks = [];
Twinkle.addInitCallback = function twinkleAddInitCallback(func) {
	Twinkle.initCallbacks.push(func);
};

Twinkle.defaultConfig = {};
/**
 * Twinkle.defaultConfig.twinkle and Twinkle.defaultConfig.friendly
 *
 * This holds the default set of preferences used by Twinkle.
 * It is important that all new preferences added here, especially admin-only ones, are also added to
 * |Twinkle.config.sections| in twinkleconfig.js, so they are configurable via the Twinkle preferences panel.
 * For help on the actual preferences, see the comments in twinkleconfig.js.
 */
Twinkle.defaultConfig = {
	// General
	summaryAd: ' ([[WP:TW|TW]])',
	deletionSummaryAd: ' ([[WP:TW|TW]])',
	protectionSummaryAd: ' ([[WP:TW|TW]])',
	userTalkPageMode: 'tab',
	dialogLargeFont: false,

	// ARV
	spiWatchReport: 'yes',

	// Block
	blankTalkpageOnIndefBlock: false,

	// Fluff (revert and rollback)
	openTalkPage: [ 'agf', 'norm', 'vand' ],
	openTalkPageOnAutoRevert: false,
	markRevertedPagesAsMinor: [ 'vand' ],
	watchRevertedPages: [ 'agf', 'norm', 'vand', 'torev' ],
	offerReasonOnNormalRevert: true,
	confirmOnFluff: false,
	showRollbackLinks: [ 'diff', 'others' ],

	// DI (twinkleimage)
	notifyUserOnDeli: true,
	deliWatchPage: 'default',
	deliWatchUser: 'default',

	// PROD
	watchProdPages: true,
	prodReasonDefault: '',
	logProdPages: false,
	prodLogPageName: 'PROD log',

	// CSD
	speedySelectionStyle: 'buttonClick',
	watchSpeedyPages: [ 'g3', 'g5', 'g10', 'g11', 'g12' ],
	markSpeedyPagesAsPatrolled: false,

	// these next two should probably be identical by default
	welcomeUserOnSpeedyDeletionNotification: [ 'db', 'g1', 'g2', 'g3', 'g4', 'g6', 'g10', 'g11', 'g12', 'g13', 'g14', 'a1', 'a2', 'a3', 'a5', 'a7', 'a9', 'a10', 'a11', 'f1', 'f2', 'f3', 'f7', 'f9', 'f10', 'u3', 'u5', 't2', 't3', 'p1', 'p2' ],
	notifyUserOnSpeedyDeletionNomination: [ 'db', 'g1', 'g2', 'g3', 'g4', 'g6', 'g10', 'g11', 'g12', 'g13', 'g14', 'a1', 'a2', 'a3', 'a5', 'a7', 'a9', 'a10', 'a11', 'f1', 'f2', 'f3', 'f7', 'f9', 'f10', 'u3', 'u5', 't2', 't3', 'p1', 'p2' ],
	warnUserOnSpeedyDelete: [ 'db', 'g1', 'g2', 'g3', 'g4', 'g6', 'g10', 'g11', 'g12', 'g13', 'g14', 'a1', 'a2', 'a3', 'a5', 'a7', 'a9', 'a10', 'a11', 'f1', 'f2', 'f3', 'f7', 'f9', 'f10', 'u3', 'u5', 't2', 't3', 'p1', 'p2' ],
	promptForSpeedyDeletionSummary: [],
	deleteTalkPageOnDelete: true,
	deleteRedirectsOnDelete: true,
	deleteSysopDefaultToTag: false,
	speedyWindowHeight: 500,
	speedyWindowWidth: 800,
	logSpeedyNominations: false,
	speedyLogPageName: 'CSD log',
	noLogOnSpeedyNomination: [ 'u1' ],

	// Unlink
	unlinkNamespaces: [ '0', '10', '100', '118' ],

	// Warn
	defaultWarningGroup: '1',
	showSharedIPNotice: true,
	watchWarnings: true,
	oldSelect: false,
	customWarningList: [],
	autoMenuAfterRollback: false,

	// XfD
	xfdWatchDiscussion: 'default',
	xfdWatchList: 'no',
	xfdWatchPage: 'default',
	xfdWatchUser: 'default',
	xfdWatchRelated: 'default',
	markXfdPagesAsPatrolled: true,

	// Hidden preferences
	revertMaxRevisions: 50,
	batchdeleteChunks: 50,
	batchMax: 5000,
	batchProtectChunks: 50,
	batchundeleteChunks: 50,
	proddeleteChunks: 50,

	// Formerly FriendlyConfig:

	// Tag
	groupByDefault: true,
	watchTaggedPages: true,
	watchMergeDiscussions: true,
	markTaggedPagesAsMinor: false,
	markTaggedPagesAsPatrolled: true,
	tagArticleSortOrder: 'cat',
	customTagList: [],
	customFileTagList: [],
	customRedirectTagList: [],

	// Welcome
	topWelcomes: false,
	watchWelcomes: true,
	welcomeHeading: 'Welcome',
	insertHeadings: true,
	insertUsername: true,
	insertSignature: true,  // sign welcome templates, where appropriate
	quickWelcomeMode: 'norm',
	quickWelcomeTemplate: 'welcome',
	customWelcomeList: [],
	customWelcomeSignature: true,

	// Talkback
	markTalkbackAsMinor: true,
	insertTalkbackSignature: true,  // always sign talkback templates
	talkbackHeading: 'New message from ' + mw.config.get('wgUserName'),
	adminNoticeHeading: 'Notice',
	mailHeading: "You've got mail!",

	// Shared
	markSharedIPAsMinor: true
};

// now some skin dependent config.
if (mw.config.get('skin') === 'vector') {
	Twinkle.defaultConfig.portletArea = 'right-navigation';
	Twinkle.defaultConfig.portletId = 'p-twinkle';
	Twinkle.defaultConfig.portletName = 'TW';
	Twinkle.defaultConfig.portletType = 'menu';
	Twinkle.defaultConfig.portletNext = 'p-search';
} else {
	Twinkle.defaultConfig.portletArea = null;
	Twinkle.defaultConfig.portletId = 'p-cactions';
	Twinkle.defaultConfig.portletName = null;
	Twinkle.defaultConfig.portletType = null;
	Twinkle.defaultConfig.portletNext = null;
}


Twinkle.getPref = function twinkleGetPref(name) {
	if (typeof Twinkle.prefs === 'object') {
		if (Twinkle.prefs[name]) {
			return Twinkle.prefs[name];
		}
	}
	// Old preferences format:
	if (typeof window.TwinkleConfig === 'object' && window.TwinkleConfig[name]) {
		return window.TwinkleConfig[name];
	}
	if (typeof window.FriendlyConfig === 'object' && window.FriendlyConfig[name]) {
		return window.FriendlyConfig[name];
	}
	return Twinkle.defaultConfig[name];
};


/**
 * **************** Twinkle.addPortlet() ****************
 *
 * Adds a portlet menu to one of the navigation areas on the page.
 * This is necessarily quite a hack since skins, navigation areas, and
 * portlet menu types all work slightly different.
 *
 * Available navigation areas depend on the skin used.
 * Monobook:
 *  "column-one", outer div class "portlet", inner div class "pBody". Existing portlets: "p-cactions", "p-personal", "p-logo", "p-navigation", "p-search", "p-interaction", "p-tb", "p-coll-print_export"
 *  Special layout of p-cactions and p-personal through specialized styles.
 * Vector:
 *  "mw-panel", outer div class "portal", inner div class "body". Existing portlets/elements: "p-logo", "p-navigation", "p-interaction", "p-tb", "p-coll-print_export"
 *  "left-navigation", outer div class "vectorTabs" or "vectorMenu", inner div class "" or "menu". Existing portlets: "p-namespaces", "p-variants" (menu)
 *  "right-navigation", outer div class "vectorTabs" or "vectorMenu", inner div class "" or "menu". Existing portlets: "p-views", "p-cactions" (menu), "p-search"
 *  Special layout of p-personal portlet (part of "head") through specialized styles.
 * Modern:
 *  "mw_contentwrapper" (top nav), outer div class "portlet", inner div class "pBody". Existing portlets or elements: "p-cactions", "mw_content"
 *  "mw_portlets" (sidebar), outer div class "portlet", inner div class "pBody". Existing portlets: "p-navigation", "p-search", "p-interaction", "p-tb", "p-coll-print_export"
 *
 * @param String navigation -- id of the target navigation area (skin dependant, on vector either of "left-navigation", "right-navigation", or "mw-panel")
 * @param String id -- id of the portlet menu to create, preferably start with "p-".
 * @param String text -- name of the portlet menu to create. Visibility depends on the class used.
 * @param String type -- type of portlet. Currently only used for the vector non-sidebar portlets, pass "menu" to make this portlet a drop down menu.
 * @param Node nextnodeid -- the id of the node before which the new item should be added, should be another item in the same list, or undefined to place it at the end.
 *
 * @return Node -- the DOM node of the new item (a DIV element) or null
 */
Twinkle.addPortlet = function(navigation, id, text, type, nextnodeid) {
	// sanity checks, and get required DOM nodes
	var root = document.getElementById(navigation);
	if (!root) {
		return null;
	}

	var item = document.getElementById(id);
	if (item) {
		if (item.parentNode && item.parentNode === root) {
			return item;
		}
		return null;
	}

	var nextnode;
	if (nextnodeid) {
		nextnode = document.getElementById(nextnodeid);
	}

	// verify/normalize input
	var skin = mw.config.get('skin');
	type = skin === 'vector' && type === 'menu' && (navigation === 'left-navigation' || navigation === 'right-navigation') ? 'menu' : '';
	var outerDivClass;
	var innerDivClass;
	switch (skin) {
		case 'vector':
			if (navigation !== 'portal' && navigation !== 'left-navigation' && navigation !== 'right-navigation') {
				navigation = 'mw-panel';
			}
			outerDivClass = navigation === 'mw-panel' ? 'portal' : type === 'menu' ? 'vectorMenu' : 'vectorTabs';
			innerDivClass = navigation === 'mw-panel' ? 'body' : type === 'menu' ? 'menu' : '';
			break;
		case 'modern':
			if (navigation !== 'mw_portlets' && navigation !== 'mw_contentwrapper') {
				navigation = 'mw_portlets';
			}
			outerDivClass = 'portlet';
			innerDivClass = 'pBody';
			break;
		default:
			navigation = 'column-one';
			outerDivClass = 'portlet';
			innerDivClass = 'pBody';
			break;
	}

	// Build the DOM elements.
	var outerDiv = document.createElement('div');
	outerDiv.className = outerDivClass + ' emptyPortlet';
	outerDiv.id = id;
	if (nextnode && nextnode.parentNode === root) {
		root.insertBefore(outerDiv, nextnode);
	} else {
		root.appendChild(outerDiv);
	}

	if (outerDivClass === 'vectorMenu') {
		// add invisible checkbox to make menu keyboard accessible
		// similar to the p-cactions ("More") menu
		var chkbox = document.createElement('input');
		chkbox.className = 'vectorMenuCheckbox';
		chkbox.setAttribute('type', 'checkbox');
		chkbox.setAttribute('aria-labelledby', 'p-twinkle-label');
		outerDiv.appendChild(chkbox);
	}
	var h5 = document.createElement('h3');
	if (outerDivClass === 'vectorMenu') {
		h5.id = 'p-twinkle-label';
	}
	if (type === 'menu') {
		var span = document.createElement('span');
		span.appendChild(document.createTextNode(text));
		h5.appendChild(span);

		var a = document.createElement('a');
		a.href = '#';

		$(a).click(function (e) {
			e.preventDefault();

			if (!Twinkle.userAuthorized) {
				alert('Sorry, your account is too new to use Twinkle.');
			}
		});

		h5.appendChild(a);
	} else {
		h5.appendChild(document.createTextNode(text));
	}
	outerDiv.appendChild(h5);

	var innerDiv = null;
	if (type === 'menu') {
		innerDiv = document.createElement('div');
		innerDiv.className = innerDivClass;
		outerDiv.appendChild(innerDiv);
	}

	var ul = document.createElement('ul');
	(innerDiv || outerDiv).appendChild(ul);

	return outerDiv;
};


/**
 * **************** Twinkle.addPortletLink() ****************
 * Builds a portlet menu if it doesn't exist yet, and add the portlet link.
 * @param task: Either a URL for the portlet link or a function to execute.
 */
Twinkle.addPortletLink = function(task, text, id, tooltip) {
	if (Twinkle.getPref('portletArea') !== null) {
		Twinkle.addPortlet(Twinkle.getPref('portletArea'), Twinkle.getPref('portletId'), Twinkle.getPref('portletName'), Twinkle.getPref('portletType'), Twinkle.getPref('portletNext'));
	}
	var link = mw.util.addPortletLink(Twinkle.getPref('portletId'), typeof task === 'string' ? task : '#', text, id, tooltip);
	$('.client-js .skin-vector #p-cactions').css('margin-right', 'initial');
	if (typeof task === 'function') {
		$(link).click(function (ev) {
			task();
			ev.preventDefault();
		});
	}
	if ($.collapsibleTabs) {
		$.collapsibleTabs.handleResize();
	}
	return link;
};


/**
 * **************** General initialization code ****************
 */

var scriptpathbefore = mw.util.wikiScript('index') + '?title=',
	scriptpathafter = '&action=raw&ctype=text/javascript&happy=yes';

// Retrieve the user's Twinkle preferences
$.ajax({
	url: scriptpathbefore + 'User:' + encodeURIComponent(mw.config.get('wgUserName')) + '/twinkleoptions.js' + scriptpathafter,
	dataType: 'text'
})
	.fail(function () {
		mw.notify('Could not load twinkleoptions.js');
	})
	.done(function (optionsText) {

		// Quick pass if user has no options
		if (optionsText === '') {
			return;
		}

		// Twinkle options are basically a JSON object with some comments. Strip those:
		optionsText = optionsText.replace(/(?:^(?:\/\/[^\n]*\n)*\n*|(?:\/\/[^\n]*(?:\n|$))*$)/g, '');

		// First version of options had some boilerplate code to make it eval-able -- strip that too. This part may become obsolete down the line.
		if (optionsText.lastIndexOf('window.Twinkle.prefs = ', 0) === 0) {
			optionsText = optionsText.replace(/(?:^window.Twinkle.prefs = |;\n*$)/g, '');
		}

		try {
			var options = JSON.parse(optionsText);
			if (options) {
				if (options.twinkle || options.friendly) {
					Twinkle.prefs = $.extend(options.twinkle, options.friendly);
				} else {
					Twinkle.prefs = options;
				}
			}
		} catch (e) {
			mw.notify('Could not parse twinkleoptions.js');
		}
	})
	.always(function () {
		$(Twinkle.load);
	});

// Developers: you can import custom Twinkle modules here
// For example, mw.loader.load(scriptpathbefore + "User:UncleDouggie/morebits-test.js" + scriptpathafter);

Twinkle.load = function () {
	// Don't activate on special pages other than those on the whitelist so that
	// they load faster, especially the watchlist.
	var specialPageWhitelist = [ 'Block', 'Contributions', 'DeletedContributions', 'Prefixindex' ];
	var isSpecialPage = mw.config.get('wgNamespaceNumber') === -1 &&
		specialPageWhitelist.indexOf(mw.config.get('wgCanonicalSpecialPageName')) === -1;

	// Also, Twinkle is incompatible with Internet Explorer versions 8 or lower,
	// so don't load there either.
	var isOldIE = $.client.profile().name === 'msie' &&
		$.client.profile().versionNumber < 9;

	// Prevent users that are not autoconfirmed from loading Twinkle as well.
	if (isSpecialPage || isOldIE || !Twinkle.userAuthorized) {
		return;
	}

	// Prevent clickjacking
	if (window.top !== window.self) {
		return;
	}

	// Set custom Api-User-Agent header, for server-side logging purposes
	Morebits.wiki.api.setApiUserAgent('Twinkle/2.0 (' + mw.config.get('wgDBname') + ')');

	// Load the modules in the order that the tabs should appear
	// User/user talk-related
	Twinkle.arv();
	Twinkle.warn();
	if (Morebits.userIsInGroup('sysop')) {
		Twinkle.block();
	}
	Twinkle.welcome();
	Twinkle.shared();
	Twinkle.talkback();
	// Deletion
	Twinkle.speedy();
	Twinkle.prod();
	Twinkle.xfd();
	Twinkle.image();
	// Maintenance
	Twinkle.protect();
	Twinkle.tag();
	// Misc. ones last
	Twinkle.diff();
	Twinkle.unlink();
	Twinkle.config.init();
	Twinkle.fluff.init();
	if (Morebits.userIsInGroup('sysop')) {
		Twinkle.deprod();
		Twinkle.batchdelete();
		Twinkle.batchprotect();
		Twinkle.batchundelete();
	}
	// Run the initialization callbacks for any custom modules
	Twinkle.initCallbacks.forEach(function (func) {
		func();
	});
	Twinkle.addInitCallback = function (func) {
		func();
	};

	// Increases text size in Twinkle dialogs, if so configured
	if (Twinkle.getPref('dialogLargeFont')) {
		mw.util.addCSS('.morebits-dialog-content, .morebits-dialog-footerlinks { font-size: 100% !important; } ' +
			'.morebits-dialog input, .morebits-dialog select, .morebits-dialog-content button { font-size: inherit !important; }');
	}
};

}(window, document, jQuery)); // End wrap with anonymous function

// </nowiki>
