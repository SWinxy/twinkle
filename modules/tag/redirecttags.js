// Tags for REDIRECTS start here
Twinkle.tag.redirectList = {
	'Grammar, punctuation, and spelling': {
		'Abbreviation': [
			{ tag: 'R from/to acronym', description: 'redirect from an acronym (often spoken as a single word, e.g. POTUS)', fromto },
			{ tag: 'R from/to initialism', description: 'redirect from an initialism to its expanded form (often pronounced letter-by-letter, e.g. AGF)', fromto },
			{ tag: 'R from MathSciNet abbreviation', description: 'redirect from MathSciNet publication title abbreviation to the unabbreviated title' },
			{ tag: 'R from NLM abbreviation', description: 'redirect from a NLM publication title abbreviation to the unabbreviated title' },
			{ tag: 'R from numeronym', description: 'redirect from a numeronym to a related topic (number-based word, e.g. K9)' },
			{ tag: 'R from Bluebook abbreviation', description: 'redirect from a Bluebook standardized abbreviation' },
			{ tag: 'R from ISO 4 abbreviation', description: 'redirect from an ISO 4 publication title abbreviation' }
		],
		'Capitalisation': [
			{ tag: 'R from CamelCase', description: 'redirect from a CamelCase title' },
			{ tag: 'R from other capitalisation', description: 'redirect from a title with another method of capitalisation' },
			{ tag: 'R from miscapitalisation', description: 'redirect from a capitalisation error' }
		],
		'Grammar & punctuation': [
			{ tag: 'R from modification', description: 'redirect from a modification of the target\'s title, such as with words rearranged' },
			{ tag: 'R from/to plural', description: 'redirect from a plural word to the singular equivalent or from a singular noun to its plural form', fromto }
		],
		'Parts of speech': [
			{ tag: 'R from verb', description: 'redirect from an English-language verb or verb phrase' },
			{ tag: 'R from adjective', description: 'redirect from an adjective (word or phrase that describes a noun)' },
			{ tag: 'R from common noun', description: 'redirect from a common noun (person, place, or thing)'},
			{ tag: 'R from gerung', description: 'redirect from a gerung–a verb that ends in \'ing\' that functions as a noun' },
			{ tag: 'R from proper noun', description: 'redirect from a proper noun–a noun that begins with an uppercase letter' },
			{ tag: 'R from verb', description: 'redirect from an English-language verb or verb phrase' }
		],
		'Spelling': [
			{ tag: 'R from alternative spelling', description: 'redirect from a title with a different spelling, punctuation, or hyphenation' },
			{ tag: 'R from alternative transliteration', description: 'redirect from an alternative English transliteration to a more common variation' },
			{ tag: 'R from American English', description: 'redirect from a term in American English spelling to an alternate spelling variation' },
			{ tag: 'R from/to ASCII-only', description: 'redirect from a title in only basic ASCII to the formal title, with differences that are not diacritical marks or ligatures or vise versa', fromto },
			{ tag: 'R from British English', description: 'redirect from a term in British English spelling to an alternate spelling variation' },
			{ tag: 'R from/to diacritic', description: 'redirect from a page name that has diacritical marks (accents, umlauts, etc.) or vise versa', fromto },
			{ tag: 'R from/to ligature', description: 'redirect from a page name that has ligatures to one without (e.g. Æ or æ) or vise versa', fromto },
			{ tag: 'R from misspelling', description: 'redirect from a misspelling or typographical error' },
			{ tag: 'R from stylization', description: 'redirect from a stylized article title' }
		]
	},
	'Alternative names': {
		General: [
			{
				tag: 'R from alternative language',
				description: 'redirect from or to a title in another language',
				subgroup: [
					{
						name: 'altLangFrom',
						type: 'input',
						label: 'From language (two-letter code): ',
						tooltip: 'Enter the two-letter code of the language the redirect name is in; such as en for English, de for German'
					},
					{
						name: 'altLangTo',
						type: 'input',
						label: 'To language (two-letter code): ',
						tooltip: 'Enter the two-letter code of the language the target name is in; such as en for English, de for German'
					},
					{
						name: 'altLangInfo',
						type: 'div',
						label: $.parseHTML('<p>For a list of language codes, see <a href="/wiki/Wp:Template_messages/Redirect_language_codes">Wikipedia:Template messages/Redirect language codes</a></p>')
					}
				]
			},
			{ tag: 'R from alternative name', description: 'redirect from a title that is another name, a pseudonym, a nickname, or a synonym' },
			{ tag: 'R from ambiguous sort name', description: 'redirect from an ambiguous sort name to a page or list that disambiguates it' },
			{ tag: 'R from antonym', description: 'redirect from a page that is an antonym or opposite of the target page' },
			{ tag: 'R from former name', description: 'redirect from a former name or working title no longer known by that name' },
			{ tag: 'R from incomplete name', description: 'R from incomplete name' },
			{ tag: 'R from incorrect name', description: 'redirect from an erroneus name that is unsuitable as a title' },
			{ tag: 'R from less specific name', description: 'redirect from a less specific title to a more specific, less general one' },
			{ tag: 'R from long name', description: 'redirect from a more complete title' },
			{ tag: 'R from more specific name', description: 'redirect from a more specific title to a less specific, more general one' },
			{ tag: 'R from non-neutral name', description: 'redirect from a title that is a non-neutral, perhaps pejorative, controversial or offensive word, phrase or name' },
			{ tag: 'R from numerals', description: 'redirect from a title that includes the mathematical symbol of a number (or numbers) to an article with the word form of the number' },
			{ tag: 'R from Roman numerals', description: 'redirect from a title in Roman numerals, to a title in Arabic numerals' },
			{ tag: 'R from portmanteau', description: 'redirect from a portmanteau to a related topic, such as the expansion of the portmanteau.' },
			{ tag: 'R from short name', description: 'redirect from a title that is a shortened form of a person\'s full name, a book title, or other more complete title' },
			{ tag: 'R from sort name', description: 'redirect from the target\'s sort name, such as beginning with their surname rather than given name' },
			{ tag: 'R from synonym', description: 'redirect from a semantic synonym of the target page title' }
		],
		People: [
			{ tag: 'R from birth name', description: 'redirect from a person\'s birth name to a more common name' },
			{ tag: 'R from given name', description: 'redirect from a person\'s given name' },
			{ tag: 'R to joint biography', description: 'redirect from one person\'s name to a biographical article that includes this person along with one or more other persons' },
			{ tag: 'R from married name', description: 'redirect from a person\'s married name to that person\'s more notable name when appropriate' },
			{ tag: 'R from name with title', description: 'redirect from a person\'s name preceded or followed by a title to the name with no title or with the title in parentheses' },
			{ tag: 'R from person', description: 'redirect from a person or persons to a related article' },
			{ tag: 'R from personal name', description: 'redirect from an individual\'s personal name to an article titled with their professional or other better known moniker' },
			{ tag: 'R from pseudonym', description: 'redirect from a pseudonym' },
			{ tag: 'R from surname', description: 'redirect from a title that is a surname' }
		],
		Technical: [
			{ tag: 'R from CAS Registry Number', description: 'redirect from a CAS Registry Number to its subject\'s article in mainspace' },
			{ tag: 'R from citation identifier', description: 'redirect from a citation identifier (e.g. ISBN)' },
			{ tag: 'R from drug trade name', description: 'redirect from (or to) the trade name of a drug to (or from) the international nonproprietary name (INN)' },
			{ tag: 'R from filename', description: 'redirect from a title that is a filename of the target' },
			{ tag: 'R from Java package name', description: 'redirect from a Java package name, class, or interface, to the software project or language feature that provides that package, or the computer science concept that it implements' },
			{ tag: 'R from molecular formula', description: 'redirect from a molecular/chemical formula to its technical or trivial name' },
			{ tag: 'R from gene symbol', description: 'redirect from a Human Genome Organisation (HUGO) symbol for a gene to an article about the gene' },
			{ tag: 'R from/to technical name', description: 'redirect from a more technical name to a common name or vise versa', fromto }
		],
		Organisms: [
			{ tag: 'R from/to scientific name', description: 'redirect from the common name to the scientific name or vise versa', fromto },
			{ tag: 'R from alternative scientific name', description: 'redirect from an alternative scientific name to the accepted scientific name' },
			{ tag: 'R from scientific abbreviation', description: 'redirect from a scientific abbreviation' },
			{ tag: 'R from/to monotypic taxon', description: 'redirect from the only lower-ranking member of a monotypic taxon to its monotypic taxon or vise versa', fromto },
			{ tag: 'R taxon with possibilities', description: 'redirect from a title related to a living organism that potentially could be expanded into an article' }
		],
		Geography: [
			{ tag: 'R from name and country', description: 'redirect from the specific name to the briefer name' },
			{ tag: 'R from more specific geographic name', description: 'redirect from a geographic location that includes extraneous identifiers such as the county or region of a city' },
			{ tag: 'R from postal code', description: 'redirect from a postal code to its assigned geographic area' }
		]
	},
	'Navigation aids': {
		'Navigation': [
			{ tag: 'R to anchor', description: 'redirect from a topic that does not have its own page to an anchored part of a page on the subject' },
			{
				tag: 'R avoided double redirect',
				description: 'redirect from an alternative title for another redirect',
				subgroup: {
					name: 'doubleRedirectTarget',
					type: 'input',
					label: 'Redirect target name',
					tooltip: 'Enter the page this redirect would target if the page wasn\'t also a redirect'
				}
			},
			{ tag: 'R from category navigation', description: 'redirect from a category that is used as a navigational aid to the target category' },
			{ tag: 'R from file metadata link', description: 'redirect of a wikilink created from EXIF, XMP, or other information (i.e. the "metadata" section on some image description pages)' },
			{ tag: 'R to list entry', description: 'redirect to a list which contains brief descriptions of subjects not notable enough to have separate articles' },
			{ tag: 'R mentioned in hatnote', description: 'redirect from a title that is mentioned in a hatnote at the redirect target' },
			{ tag: 'R to section', description: 'similar to {{R to list entry}}, but when list is organized in sections, such as list of characters in a fictional universe' },
			{ tag: 'R from shortcut', description: 'redirect from a Wikipedia shortcut' },
			{ tag: 'R from/to subpage', description: 'redirect to a subpage', fromto }
		],
		'Disambiguation': [
			{ tag: 'R from ambiguous term', description: 'redirect from an ambiguous page name to a page that disambiguates it. This template should never appear on a page that has "(disambiguation)" in its title, use R to disambiguation page instead' },
			{ tag: 'R to disambiguation page', description: 'redirect to a disambiguation page' },
			{ tag: 'R from incomplete disambiguation', description: 'redirect from a page name that is too ambiguous to be the title of an article and should redirect to an appropriate disambiguation page' },
			{ tag: 'R from incorrect disambiguation', description: 'redirect from a page name with incorrect disambiguation due to an error or previous editorial misconception' },
			{ tag: 'R from other disambiguation', description: 'redirect from a page name with an alternative disambiguation qualifier' },
			{ tag: 'R from predictable disambiguation', description: '' },
			{ tag: 'R from unnecessary disambiguation', description: 'redirect from a page name that has an unneeded disambiguation qualifier' }
		],
		'Merge, duplicate & move': [
			{ tag: 'R from draft', description: '' },
			{ tag: 'R from duplicated article', description: 'redirect to a similar article in order to preserve its edit history' },
			{ tag: 'R with history', description: 'redirect from a page containing substantive page history, kept to preserve content and attributions' },
			{ tag: 'R from move', description: 'redirect from a page that has been moved/renamed' },
			{ tag: 'R from merge', description: 'redirect from a merged page in order to preserve its edit history' },
			{ tag: 'R with old history', description: 'redirect from a page that was from a historic version of this Wikipedia project' }
		],
		'Namespace': [
			{ tag: 'R from remote talk page', description: 'redirect from a talk page in any talk namespace to a corresponding page that is more heavily watched' },
			{ tag: 'R to category namespace', description: 'redirect from a page outside the category namespace to a category page' },
			{ tag: 'R to draft namespace', description: 'redirect from a page in the draft namespace to an article in mainspace' },
			{ tag: 'R to help namespace', description: 'redirect from any page inside or outside of help namespace to a page in that namespace' },
			{ tag: 'R to main namespace', description: 'redirect from a page outside the main-article namespace to an article in mainspace' },
			{ tag: 'R to portal namespace', description: 'redirect from any page inside or outside of portal space to a page in that namespace' },
			{ tag: 'R to project namespace', description: 'redirect from any page inside or outside of project (Wikipedia: or WP:) space to any page in the project namespace' },
			{ tag: 'R to talk page', description: 'redirect from a page outside any and all of the talk namespaces to a talk page' },
			{ tag: 'R to template namespace', description: 'redirect from a page outside the template namespace to a template page' },
			{ tag: 'R to user namespace', description: 'redirect from a page outside the user namespace to a user page (not to a user talk page)' }
		]
	},
	'Media': {
		General: [
			{ tag: 'R from book', description: 'redirect from a book title to a more general, relevant article' },
			{ tag: 'R from film', description: 'redirect from a film title that is a subtopic of the redirect target or a title in an alternative language that has been produced in that language' },
			{ tag: 'R from upcoming film', description: 'redirect from a title that potentially could be expanded into a new article or other type of associated page' },
			{ tag: 'R from journal', description: 'redirect from a trade or professional journal article to a more general, relevant Wikipedia article' },
			{ tag: 'R from meme ', description: 'redirect from a name of an internet meme or other pop culture phenomenon that is a subtopic of the redirect target' },
			{ tag: 'R from work ', description: 'redirect from a creative work to a related topic such as the author/artist, publisher, or a subject related to the work' },
			{ tag: 'R from album', description: 'redirect from an album to a related topic such as the recording artist or a list of albums' },
			{ tag: 'R from lyric', description: 'redirect from a lyric to a song or other source that describes the lyric' },
			{ tag: 'R from song', description: 'redirect from a song title to a more general, relevant article' },
			{ tag: 'R from television episode', description: 'redirect from a television episode title to a related work or lists of episodes' },
			{ tag: 'R from television program', description: 'redirect from a title of television program, television series or web series that is a subtopic of the redirect target.' }
		],
		Fiction: [
			{ tag: 'R from fictional character', description: 'redirect from a fictional character to a related fictional work or list of characters' },
			{ tag: 'R from fictional element', description: 'redirect from a fictional element (such as an object or concept) to a related fictional work or list of similar elements' },
			{ tag: 'R from fictional location', description: 'redirect from a fictional location or setting to a related fictional work or list of places' }

		],
		Comics: [
			{ tag: 'R comics with possibilities', description: 'redirect from a comics-related title that potentially could be expanded into an article' },
			{ tag: 'R comics from alternative name', description: 'redirect from a title that is another name or identity, a pseudonym, a nickname, or a synonym of the comic book character detailed in the target article' },
			{ tag: 'R comics to list entry', description: 'redirect from a comics related title for a minor topic to a list of minor entities' },
			{ tag: 'R comics from merge', description: 'redirect from a comics title that was merged into the target article' },
			{ tag: 'R comics naming convention', description: 'redirect to a title that complies with the Wikipedia naming conventions for comics-related articles' },
			{ tag: 'R comics from related word', description: ' redirect from a word, phrase, concept, character, story or item to a comics title that is related in some way.' },
			{ tag: 'R comics to section', description: 'redirect from a comics-related subject that does not have its own page to an article section that covers the subject' }
		]
	},
	'Miscellaneous': {
		'Related information': [
			{ tag: 'R to article without mention', description: 'redirect to an article without any mention of the redirected word or phrase' },
			{ tag: 'R to decade', description: 'redirect from a year to the decade article' },
			{ tag: 'R to century', description: 'redirect from a year or decade to the associated century article' },
			{ tag: 'R from domain name', description: 'redirect from a domain name to an article about a website' },
			{ tag: 'R from top-level domain', description: 'redirect from a top-level domain to an article about a website (or the company that hosts it) that is more often referred to' },
			{ tag: 'R from gender', description: 'redirect from a word or phrase that specifies gender to one that is either gender-neutral or specific to a different gender' },
			{ tag: 'R from legislation', description: 'redirect from the alphanumeric form of enacted legislation to an article titled in an alternative form' },
			{ tag: 'R from list topic', description: 'redirect from the topic of a list to the equivalent list' },
			{ tag: 'R from member', description: 'redirect from a member of a group to a related topic such as the group or organization' },
			{ tag: 'R from phrase', description: 'redirect from a phrase to a more general relevant article covering the topic' },
			{ tag: 'R to related topic', description: 'redirect to an article about a similar topic' },
			{ tag: 'R from related word', description: 'redirect from a related word' },
			{ tag: 'R from relative', description: 'redirect from the name of a relative of a person to the article about the person' },
			{ tag: 'R from spouse', description: 'redirect from the name of a person\'s spouse or former spouse to the article about the person' },
			{ tag: 'R from school', description: 'redirect from a school article that had very little information' },
			{ tag: 'R from/to subtopic', description: 'redirect from a title that is a subtopic of the target article' },
			{ tag: 'R to subtopic', description: 'redirect to a subtopic of the redirect\'s title' },
			{ tag: 'R from team', description: 'redirect from a team/club/squad to the sporting league/association in which the team is a member' },
			{ tag: 'R from Unicode character', description: 'redirect from a single Unicode character to an article or Wikipedia project page that infers meaning for the symbol' },
			{ tag: 'R from Unicode code', description: 'redirect from a Unicode code point to an article about the character it represents' },
			{ tag: 'R from emoji', description: 'redirect from an emoji to an article describing the depicted concept or the emoji itself' }
		],
		'With possibilities': [
			{ tag: 'R with possibilities', description: 'redirect from a specific title to a more general, less detailed article (something which can and should be expanded)' },
			{ tag: 'R category with possibilities', description: 'redirect from a category title that potentially could be populated as a separate category' }
		],
		'ISO codes': [
			{ tag: 'R from ISO 639 code', description: 'redirect from a title that is an ISO 639 language code to an article about the language' },
			{ tag: 'R from ISO 3166 code', description: 'redirect from a title that contains an ISO 3166 geographical code to an article about the location' },
			{ tag: 'R from ISO 4217 code', description: 'redirect from a title that contains an ISO 4217 currency code to an article about the currency' },
			{ tag: 'R from ISO 1592 code', description: 'redirect from a title that contains an ISO 15924 script code to an article about the script' }
		],
		'Printworthiness': [
			{ tag: 'R printworthy', description: 'redirect from a title that would be helpful in a printed or CD/DVD version of Wikipedia' },
			{ tag: 'R unprintworthy', description: 'redirect from a title that would NOT be helpful in a printed or CD/DVD version of Wikipedia' }
		]
	}
};