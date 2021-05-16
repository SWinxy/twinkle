// Tags for REDIRECTS start here
Twinkle.tag.redirectList = {
	'Grammar, punctuation, and spelling': {
		'Abbreviation': [
			{ tag: 'acronym', description: 'redirect from an acronym (often spoken as a single word, e.g. POTUS)', from: true, to: true },
			{ tag: 'Bluebook abbreviation', description: 'redirect from a Bluebook standardized abbreviation', from: true },
			{ tag: 'initialism', description: 'redirect from an initialism to its expanded form (often pronounced letter-by-letter, e.g. AGF)', from: true, to: true },
			{ tag: 'ISO 4 abbreviation', description: 'redirect from an ISO 4 publication title abbreviation', from: true },
			{ tag: 'MathSciNet abbreviation', description: 'redirect from MathSciNet publication title abbreviation to the unabbreviated title', from: true },
			{ tag: 'numeronym', description: 'redirect from a numeronym to a related topic (number-based word, e.g. K9)', from: true },
			{ tag: 'NLM abbreviation', description: 'redirect from a NLM publication title abbreviation to the unabbreviated title', from: true },
			{ tag: 'systematic abbreviation', description: 'redirect from a systematic abbreviation', from: true },
		],
		'Capitalisation': [
			{ tag: 'CamelCase', description: 'redirect from a CamelCase title', from: true },
			{ tag: 'miscapitalisation', description: 'redirect from a capitalisation error', from: true },
			{ tag: 'other capitalisation', description: 'redirect from a title with another method of capitalisation', from: true },
		],
		'Grammar & punctuation': [
			{ tag: 'modification', description: 'redirect from a modification of the target\'s title, such as with words rearranged', from: true },
			// { tag: 'R from rearrangement' }, // redirects to modification
			{ tag: 'plural', description: 'redirect from a plural word to the singular equivalent or from a singular noun to its plural form', from: true, to: true },
			// from alternative punctuation -> alternative spelling
			// from alternative hyphenation -> alt spelling
			// from alternative spacing -> alt spelling
		],
		'Parts of speech': [
			{ tag: 'adjective', description: 'redirect from an adjective (word or phrase that describes a noun)', from: true },
			{ tag: 'adverb', description: 'redirect from an adverb or adverbial phrase, which modifies a verb, an adjective or another adverb', from: true },
			{ tag: 'common noun', description: 'redirect from a common noun (person, place, or thing)', from: true },
			{ tag: 'gerung', description: 'redirect from a gerung–a verb that ends in \'ing\' that functions as a noun', from: true },
			{ tag: 'proper noun', description: 'redirect from a proper noun–a noun that begins with an uppercase letter', from: true },
			{ tag: 'verb', description: 'redirect from an English-language verb or verb phrase', from: true },
		],
		'Spelling': [
			{ tag: 'alternative spelling', description: 'redirect from a title with a different spelling, punctuation, or hyphenation', from: true },
			{ tag: 'alternative translation', description: 'redirect from an alternative English transliteration to a more common variation', from: true },
			{ tag: 'alternative transliteration', description: 'redirect from an alternative English transliteration to a more common variation', from: true },
			{ tag: 'American English', description: 'redirect from a term in American English spelling to an alternate spelling variation', from: true },
			{ tag: 'ASCII-only', description: 'redirect from a title in only basic ASCII to the formal title, with differences that are not diacritical marks or ligatures or vise versa', from: true, to: true },
			{ tag: 'British English', description: 'redirect from a term in British English spelling to an alternate spelling variation', from: true },
			{ tag: 'diacritic', description: 'redirect from a page name that has diacritical marks (accents, umlauts, etc.) or vise versa', from: true, to: true },
			{ tag: 'ligature', description: 'redirect from a page name that has ligatures to one without (e.g. Æ or æ) or vise versa', from: true, to: true },
			{ tag: 'misspelling', description: 'redirect from a misspelling or typographical error', from: true },
			{ tag: 'stylization', description: 'redirect from a stylized article title', from: true },
		]
	},
	'Alternative names': {
		General: [
			{
				tag: 'alternative language',
				description: 'redirect from or to a title in another language',
				from: true,
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
			{ tag: 'alternative name', description: 'redirect from a title that is another name, a pseudonym, a nickname, or a synonym', from: true },
			{ tag: 'ambiguous sort name', description: 'redirect from an ambiguous sort name to a page or list that disambiguates it', from: true },
			{ tag: 'antonym', description: 'redirect from a page that is an antonym or opposite of the target page', from: true },
			{ tag: 'eponym', description: 'redirect from an eponym', from: true },
			{ tag: 'former name', description: 'redirect from a former name or working title no longer known by that name', from: true },
			{ tag: 'incomplete name', description: 'R from incomplete name', from: true },
			{ tag: 'incorrect name', description: 'redirect from an erroneus name that is unsuitable as a title', from: true },
			{ tag: 'less specific name', description: 'redirect from a less specific title to a more specific, less general one', from: true },
			{ tag: 'long name', description: 'redirect from a more complete title', from: true },
			{ tag: 'more specific name', description: 'redirect from a more specific title to a less specific, more general one', from: true },
			{ tag: 'non-neutral name', description: 'redirect from a title that is a non-neutral, perhaps pejorative, controversial or offensive word, phrase or name', from: true },
			{ tag: 'numerals', description: 'redirect from a title that includes the mathematical symbol of a number (or numbers) to an article with the word form of the number', from: true },
			{ tag: 'Roman numerals', description: 'redirect from a title in Roman numerals, to a title in Arabic numerals', from: true },
			{ tag: 'portmanteau', description: 'redirect from a portmanteau to a related topic, such as the expansion of the portmanteau.', from: true },
			{ tag: 'short name', description: 'redirect from a title that is a shortened form of a person\'s full name, a book title, or other more complete title', from: true },
			{ tag: 'sort name', description: 'redirect from the target\'s sort name, such as beginning with their surname rather than given name', from: true },
			{ tag: 'synonym', description: 'redirect from a semantic synonym of the target page title', from: true }
		],
		People: [
			{ tag: 'birth name', description: 'redirect from a person\'s birth name to a more common name', from: true },
			{ tag: 'given name', description: 'redirect from a person\'s given name', from: true },
			{ tag: 'joint biography', description: 'redirect from one person\'s name to a biographical article that includes this person along with one or more other persons', to: true },
			{ tag: 'married name', description: 'redirect from a person\'s married name to that person\'s more notable name when appropriate', from: true },
			{ tag: 'name with title', description: 'redirect from a person\'s name preceded or followed by a title to the name with no title or with the title in parentheses', from: true },
			{ tag: 'person', description: 'redirect from a person or persons to a related article', from: true },
			{ tag: 'personal name', description: 'redirect from an individual\'s personal name to an article titled with their professional or other better known moniker', from: true },
			{ tag: 'pseudonym', description: 'redirect from a pseudonym', from: true },
			{ tag: 'surname', description: 'redirect from a title that is a surname', from: true },
		],
		Technical: [
			{ tag: 'ATC code', description: 'redirect from a title that is an ATC code to an article about a pharmaceutical drug', from: true },
			{ tag: 'ATCvet code', description: 'redirect from a title that is an ATCvet code to an article about a veterinary drug', from: true },
			{ tag: 'CAS Registry Number', description: 'redirect from a CAS Registry Number to its subject\'s article in mainspace', from: true },
			{ tag: 'chemical formula', description: 'redirect from a chemical/molecular formula to its systematic (technical) or trivial name', from: true },
			{ tag: 'citation identifier', description: 'redirect from a citation identifier (e.g. ISBN)', from: true },
			{ tag: 'code', description: 'redirect from a code that has no distinctive category to which it may be sorted', from: true },
			{ tag: 'DOI prefix', description: 'redirect from a DOI prefix to the associated registrant (typically a publisher or imprint)', from: true },
			{ tag: 'drug trade name', description: 'redirect from (or to) the trade name of a drug to (or from) the international nonproprietary name (INN)', from: true },
			{ tag: 'E number', description: 'redirect from an E number', from: true },
			{ tag: 'E2 symmetry', description: 'redirect from an E2 symmetry to an article section of a Euclidean tiling on its symmetry', from: true },
			{ tag: 'filename', description: 'redirect from a title that is a filename of the target', from: true },
			{ tag: 'gene symbol', description: 'redirect from a Human Genome Organisation (HUGO) symbol for a gene to an article about the gene', from: true },
			{ tag: 'Java package name', description: 'redirect from a Java package name, class, or interface, to the software project or language feature that provides that package, or the computer science concept that it implements', from: true },
			{ tag: 'mathematical expression', description: 'redirect from a mathematical symbol or expression to a target article about the symbol or expression', from: true },
			{ tag: 'technical name', description: 'redirect from a more technical name to a common name or vise versa', from: true, to: true },
		],
		Organisms: [
			{ tag: 'animal', description: 'redirect from one or more animals to a related main topic that describes the animal(s)', from: true },
			{ tag: 'scientific name', description: 'redirect from the common name to the scientific name or vise versa', fromto, from: true, to: true },
			{ tag: 'alternative scientific name', description: 'redirect from an alternative scientific name to the accepted scientific name', from: true },
			{ tag: 'scientific abbreviation', description: 'redirect from a scientific abbreviation', from: true },
			{ tag: 'monotypic taxon', description: 'redirect from the only lower-ranking member of a monotypic taxon to its monotypic taxon or vise versa', fromto, from: true, to: true },
			{ tag: 'taxon with possibilities', description: 'redirect from a title related to a living organism that potentially could be expanded into an article' },
		],
		Geography: [
			{ tag: 'calling code', description: 'redirect from a title that is a country calling code to its associated telephone/country article', from: true },
			{ tag: 'Canadian settlement name', description: 'redirect from an article title related to a Canadian settlement', from: true },
			{ tag: 'city and province', description: 'redirect from a geographic location that uses the format "city, province"', from: true },
			{ tag: 'city and state', description: 'redirect from a geographic location that uses the format "city, state"', from: true },
			{ tag: 'name and country', description: 'redirect from the specific name to the briefer name', from: true },
			{ tag: 'more specific geographic name', description: 'redirect from a geographic location that includes extraneous identifiers such as the county or region of a city', from: true },
			{ tag: 'postal code', description: 'redirect from a postal code to its assigned geographic area', from: true },
			{ tag: 'postal abbreviation', description: 'redirect from a postal abbreviation to its associated city, state or other geographic entity', from: true },
		],
		Other: [
			{ tag: 'case citation', description: 'redirect from a legal case citation', from: true },
			{ tag: 'company name', description: 'redirect from a company name', from: true },
			{ tag: 'predecessor company name', description: 'rredirect from the name of a former company to a successor company', from: true },
		]
	},
	'Navigation aids': {
		'Navigation': [
			{ tag: 'anchor', description: 'redirect from a topic that does not have its own page to an anchored part of a page on the subject', to: true },
			{
				tag: 'avoided double redirect',
				description: 'redirect from an alternative title for another redirect',
				subgroup: {
					name: 'doubleRedirectTarget',
					type: 'input',
					label: 'Redirect target name',
					tooltip: 'Enter the page this redirect would target if the page wasn\'t also a redirect'
				}
			},
			{ tag: 'category navigation', description: 'redirect from a category that is used as a navigational aid to the target category', from: true },
			{ tag: 'demonym', description: 'redirect from a term that denotes the inhabitants of a target place', from: true },
			{ tag: 'file metadata link', description: 'redirect of a wikilink created from EXIF, XMP, or other information (i.e. the "metadata" section on some image description pages)', from: true },
			{ tag: 'for convenience', description: 'redirect from a title that is intended to make it easier to get to the target page' },
			{ tag: 'list entry', description: 'redirect to a list which contains brief descriptions of subjects not notable enough to have separate articles', to: true },
			{ tag: 'mentioned in hatnote', description: 'redirect from a title that is mentioned in a hatnote at the redirect target' },
			{ tag: 'section', description: 'similar to {{R to list entry}}, but when list is organized in sections, such as list of characters in a fictional universe', to: true },
			{ tag: 'shortcut', description: 'redirect from a Wikipedia shortcut', from: true },
			{ tag: 'subpage', description: 'redirect to a subpage', from: true, to: true },
		],
		'Disambiguation': [
			{ tag: 'ambiguous term', description: 'redirect from an ambiguous page name to a page that disambiguates it. This template should never appear on a page that has "(disambiguation)" in its title, use R to disambiguation page instead', from: true },
			{ tag: 'disambiguation page', description: 'redirect to a disambiguation page', to: true },
			{ tag: 'incomplete disambiguation', description: 'redirect from a page name that is too ambiguous to be the title of an article and should redirect to an appropriate disambiguation page', from: true },
			{ tag: 'incorrect disambiguation', description: 'redirect from a page name with incorrect disambiguation due to an error or previous editorial misconception', from: true },
			{ tag: 'other disambiguation', description: 'redirect from a page name with an alternative disambiguation qualifier', from: true },
			{ tag: 'predictable disambiguation', description: 'redirect from a page name with parenthetical disambiguation', from: true },
			{ tag: 'unnecessary disambiguation', description: 'redirect from a page name that has an unneeded disambiguation qualifier', from: true },
		],
		'Merge, duplicate & move': [
			{ tag: 'draft', description: 'redirect from a page in the draft namespace (drafts) to an article in mainspace', from: true },
			{ tag: 'duplicated article', description: 'redirect to a similar article in order to preserve its edit history', from: true },
			{ tag: 'with history', description: 'redirect from a page containing substantive page history, kept to preserve content and attributions' },
			{ tag: 'move', description: 'redirect from a page that has been moved/renamed', from: true },
			{ tag: 'merge', description: 'redirect from a merged page in order to preserve its edit history', from: true },
			{ tag: 'with old history', description: 'redirect from a page that was from a historic version of this Wikipedia project' },
		],
		'Namespace': [
			{ tag: 'remote talk page', description: 'redirect from a talk page in any talk namespace to a corresponding page that is more heavily watched', from: true },
			{ tag: 'category namespace', description: 'redirect from a page outside the category namespace to a category page', to: true },
			{ tag: 'draft namespace', description: 'redirect from a page in the draft namespace to an article in mainspace', to: true },
			{ tag: 'help namespace', description: 'redirect from any page inside or outside of help namespace to a page in that namespace', to: true },
			{ tag: 'main namespace', description: 'redirect from a page outside the main-article namespace to an article in mainspace', to: true },
			{ tag: 'portal namespace', description: 'redirect from any page inside or outside of portal space to a page in that namespace', to: true },
			{ tag: 'project namespace', description: 'redirect from any page inside or outside of project (Wikipedia: or WP:) space to any page in the project namespace', to: true },
			{ tag: 'talk page', description: 'redirect from a page outside any and all of the talk namespaces to a talk page', to: true },
			{ tag: 'template namespace', description: 'redirect from a page outside the template namespace to a template page', to: true },
			{ tag: 'user namespace', description: 'redirect from a page outside the user namespace to a user page (not to a user talk page)', to: true },
		]
	},
	'Media': {
		General: [
			{ tag: 'brand name', description: 'redirect from a brand name to a generic name', from: true },
			{ tag: 'book', description: 'redirect from a book title to a more general, relevant article', from: true },
			{ tag: 'film', description: 'redirect from a film title that is a subtopic of the redirect target or a title in an alternative language that has been produced in that language', from: true },
			{ tag: 'upcoming film', description: 'redirect from a title that potentially could be expanded into a new article or other type of associated page', from: true },
			{ tag: 'journal', description: 'redirect from a trade or professional journal article to a more general, relevant Wikipedia article', from: true },
			{ tag: 'meme', description: 'redirect from a name of an internet meme or other pop culture phenomenon that is a subtopic of the redirect target', from: true },
			{ tag: 'work', description: 'redirect from a creative work to a related topic such as the author/artist, publisher, or a subject related to the work', from: true },
			{ tag: 'television episode', description: 'redirect from a television episode title to a related work or lists of episodes', from: true },
			{ tag: 'television program', description: 'redirect from a title of television program, television series or web series that is a subtopic of the redirect target.', from: true },
		],
		Fiction: [
			{ tag: 'fictional character', description: 'redirect from a fictional character to a related fictional work or list of characters', from: true },
			{ tag: 'fictional element', description: 'redirect from a fictional element (such as an object or concept) to a related fictional work or list of similar elements', from: true },
			{ tag: 'fictional location', description: 'redirect from a fictional location or setting to a related fictional work or list of places', from: true },
			{ tag: 'ME from alternative name', description: 'redirect from an alternative article title of a Middle-earth related topic' },
			{ tag: 'ME from alternative spelling', description: 'redirect from an alternative article title of a Middle-earth related topic' },
			{ tag: 'ME from duplicated article', description: 'redirect from a page on the same or very similar subject matter related to the Middle-earth legendarium' },
			{ tag: 'ME without diacritics', description: 'redirect from essentially the same Middle-earth page name that does not have diacritical marks' },
		],
		Music: [
			{ tag: 'album', description: 'redirect from an album to a related topic such as the recording artist or a list of albums', from: true },
			{ tag: 'cover song', description: 'redirect from a cover version of a song to the article about the original song', from: true },
			{ tag: 'lyric', description: 'redirect from a lyric to a song or other source that describes the lyric', from: true },
			{ tag: 'song', description: 'redirect from a song title to a more general, relevant article', from: true },
		],
		Comics: [
			{ tag: 'comics with possibilities', description: 'redirect from a comics-related title that potentially could be expanded into an article'},
			{ tag: 'comics from alternative name', description: 'redirect from a title that is another name or identity, a pseudonym, a nickname, or a synonym of the comic book character detailed in the target article'},
			{ tag: 'comics to list entry', description: 'redirect from a comics related title for a minor topic to a list of minor entities'},
			{ tag: 'comics from merge', description: 'redirect from a comics title that was merged into the target article'},
			{ tag: 'comics naming convention', description: 'redirect to a title that complies with the Wikipedia naming conventions for comics-related articles'},
			{ tag: 'comics from related word', description: ' redirect from a word, phrase, concept, character, story or item to a comics title that is related in some way.'},
			{ tag: 'comics to section', description: 'redirect from a comics-related subject that does not have its own page to an article section that covers the subject'},
		]
	},
	'Miscellaneous': {
		'Related information': [
			{ tag: 'airline code', description: 'redirect from an airline code (IATA, ICAO, or call sign)', from: true },
			{ tag: 'airport code', description: 'redirect from an airport letter code or location identifier, such as IATA or ICAO', from: true },
			{ tag: 'alternative military designation', description: 'redirect from an alternative military designation to a more common military designation of an aircraft, vehicle, or other item', from: true },
			{ tag: 'article without mention', description: 'redirect to an article without any mention of the redirected word or phrase', to: true },
			{ tag: 'bus route', description: 'redirect from a bus route', from: true },
			{ tag: 'catchphrase', description: 'redirect from a catchphrase to an article or section of an article about the catchphrase', from: true },
			{ tag: 'London bus route', description: 'redirect from a London area bus route', from: true },
			{ tag: 'NYC bus route', description: 'redirect from a New York City bus route', from: true },
			{ tag: 'decade', description: 'redirect from a year to the decade article', to: true },
			{ tag: 'century', description: 'redirect from a year or decade to the associated century article', to: true },
			{ tag: 'domain name', description: 'redirect from a domain name to an article about a website', from: true },
			{ tag: 'top-level domain', description: 'redirect from a top-level domain to an article about a website (or the company that hosts it) that is more often referred to', from: true },
			{ tag: 'gender', description: 'redirect from a word or phrase that specifies gender to one that is either gender-neutral or specific to a different gender', from: true },
			{ tag: 'legislation', description: 'redirect from the alphanumeric form of enacted legislation to an article titled in an alternative form', from: true },
			{ tag: 'list topic', description: 'redirect from the topic of a list to the equivalent list', from: true },
			{ tag: 'member', description: 'redirect from a member of a group to a related topic such as the group or organization', from: true },
			{ tag: 'phrase', description: 'redirect from a phrase to a more general relevant article covering the topic', from: true },
			{ tag: 'related topic', description: 'redirect to an article about a similar topic', to: true },
			{ tag: 'related word', description: 'redirect from a related word', from: true },
			{ tag: 'relative', description: 'redirect from the name of a relative of a person to the article about the person', from: true },
			{ tag: 'spouse', description: 'redirect from the name of a person\'s spouse or former spouse to the article about the person', from: true },
			{ tag: 'school', description: 'redirect from a school article that had very little information', from: true },
			{ tag: 'subtopic', description: 'redirect from a title that is a subtopic of the target article', from: true, to: true },
			{ tag: 'team', description: 'redirect from a team/club/squad to the sporting league/association in which the team is a member', from: true },
			{ tag: 'Unicode character', description: 'redirect from a single Unicode character to an article or Wikipedia project page that infers meaning for the symbol', from: true },
			{ tag: 'Unicode code', description: 'redirect from a Unicode code point to an article about the character it represents', from: true },
			{ tag: 'emoji', description: 'redirect from an emoji to an article describing the depicted concept or the emoji itself', from: true },
		],
		'With possibilities': [
			{ tag: 'with possibilities', description: 'redirect from a specific title to a more general, less detailed article (something which can and should be expanded)' },
			{ tag: 'category with possibilities', description: 'redirect from a category title that potentially could be populated as a separate category' },
		],
		'ISO codes': [
			{ tag: 'ISO 639 code', description: 'redirect from a title that is an ISO 639 language code to an article about the language', from: true },
			{ tag: 'ISO 3166 code', description: 'redirect from a title that contains an ISO 3166 geographical code to an article about the location', from: true },
			{ tag: 'ISO 4217 code', description: 'redirect from a title that contains an ISO 4217 currency code to an article about the currency', from: true },
			{ tag: 'ISO 1592 code', description: 'redirect from a title that contains an ISO 15924 script code to an article about the script', from: true },
		],
		'Printworthiness': [
			{ tag: 'printworthy', description: 'redirect from a title that would be helpful in a printed or CD/DVD version of Wikipedia' },
			{ tag: 'unprintworthy', description: 'redirect from a title that would NOT be helpful in a printed or CD/DVD version of Wikipedia' },
		]
	}
};