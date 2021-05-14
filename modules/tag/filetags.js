// maintenance tags for FILES start here

Twinkle.tag.fileList = {
	'License and sourcing problem tags': [
		{ label: '{{Better source requested}}: source info consists of bare image URL/generic base URL only', value: 'Better source requested' },
		{ label: '{{Non-free reduce}}: non-low-resolution fair use image (or too-long audio clip, etc)', value: 'Non-free reduce' },
		{ label: '{{Orphaned non-free revisions}}: fair use media with old revisions that need to be deleted', value: 'Orphaned non-free revisions' }
	],
	'Wikimedia Commons-related tags': [
		{ label: '{{Copy to Commons}}: free media that should be copied to Commons', value: 'Copy to Commons' },
		{
			label: '{{Do not move to Commons}}: file not suitable for moving to Commons',
			value: 'Do not move to Commons',
			subgroup: [
				{
					type: 'input',
					name: 'DoNotMoveToCommons_reason',
					label: 'Reason: ',
					tooltip: 'Enter the reason why this image should not be moved to Commons (required). If the file is PD in the US but not in country of origin, enter "US only"',
					required: true
				},
				{
					type: 'number',
					name: 'DoNotMoveToCommons_expiry',
					label: 'Expiration year: ',
					min: new Morebits.date().getFullYear(),
					tooltip: 'If this file can be moved to Commons beginning in a certain year, you can enter it here (optional).'
				}
			]
		},
		{
			label: '{{Keep local}}: request to keep local copy of a Commons file',
			value: 'Keep local',
			subgroup: {
				type: 'input',
				name: 'keeplocalName',
				label: 'Commons image name if different: ',
				tooltip: 'Name of the image on Commons (if different from local name), excluding the File: prefix:'
			}
		},
		{
			label: '{{Now Commons}}: file has been copied to Commons',
			value: 'Now Commons',
			subgroup: {
				type: 'input',
				name: 'nowcommonsName',
				label: 'Commons image name if different: ',
				tooltip: 'Name of the image on Commons (if different from local name), excluding the File: prefix:'
			}
		}
	],
	'Cleanup tags': [
		{ label: '{{Artifacts}}: PNG contains residual compression artifacts', value: 'Artifacts' },
		{ label: '{{Bad font}}: SVG uses fonts not available on the thumbnail server', value: 'Bad font' },
		{ label: '{{Bad format}}: PDF/DOC/... file should be converted to a more useful format', value: 'Bad format' },
		{ label: '{{Bad GIF}}: GIF that should be PNG, JPEG, or SVG', value: 'Bad GIF' },
		{ label: '{{Bad JPEG}}: JPEG that should be PNG or SVG', value: 'Bad JPEG' },
		{ label: '{{Bad SVG}}: SVG containing raster graphics', value: 'Bad SVG' },
		{ label: '{{Bad trace}}: auto-traced SVG requiring cleanup', value: 'Bad trace' },
		{
			label: '{{Cleanup image}}: general cleanup', value: 'Cleanup image',
			subgroup: {
				type: 'input',
				name: 'cleanupimageReason',
				label: 'Reason: ',
				tooltip: 'Enter the reason for cleanup (required)',
				required: true
			}
		},
		{ label: '{{ClearType}}: image (not screenshot) with ClearType anti-aliasing', value: 'ClearType' },
		{ label: '{{Imagewatermark}}: image contains visible or invisible watermarking', value: 'Imagewatermark' },
		{ label: '{{NoCoins}}: image using coins to indicate scale', value: 'NoCoins' },
		{ label: '{{Overcompressed JPEG}}: JPEG with high levels of artifacts', value: 'Overcompressed JPEG' },
		{ label: '{{Opaque}}: opaque background should be transparent', value: 'Opaque' },
		{ label: '{{Remove border}}: unneeded border, white space, etc.', value: 'Remove border' },
		{
			label: '{{Rename media}}: file should be renamed according to the criteria at [[WP:FMV]]',
			value: 'Rename media',
			subgroup: [
				{
					type: 'input',
					name: 'renamemediaNewname',
					label: 'New name: ',
					tooltip: 'Enter the new name for the image (optional)'
				},
				{
					type: 'input',
					name: 'renamemediaReason',
					label: 'Reason: ',
					tooltip: 'Enter the reason for the rename (optional)'
				}
			]
		},
		{ label: '{{Should be PNG}}: GIF or JPEG should be lossless', value: 'Should be PNG' },
		{
			label: '{{Should be SVG}}: PNG, GIF or JPEG should be vector graphics', value: 'Should be SVG',
			subgroup: {
				name: 'svgCategory',
				type: 'select',
				list: [
					{ label: '{{Should be SVG|other}}', value: 'other' },
					{ label: '{{Should be SVG|alphabet}}: character images, font examples, etc.', value: 'alphabet' },
					{ label: '{{Should be SVG|chemical}}: chemical diagrams, etc.', value: 'chemical' },
					{ label: '{{Should be SVG|circuit}}: electronic circuit diagrams, etc.', value: 'circuit' },
					{ label: '{{Should be SVG|coat of arms}}: coats of arms', value: 'coat of arms' },
					{ label: '{{Should be SVG|diagram}}: diagrams that do not fit any other subcategory', value: 'diagram' },
					{ label: '{{Should be SVG|emblem}}: emblems, free/libre logos, insignias, etc.', value: 'emblem' },
					{ label: '{{Should be SVG|fair use}}: fair-use images, fair-use logos', value: 'fair use' },
					{ label: '{{Should be SVG|flag}}: flags', value: 'flag' },
					{ label: '{{Should be SVG|graph}}: visual plots of data', value: 'graph' },
					{ label: '{{Should be SVG|logo}}: logos', value: 'logo' },
					{ label: '{{Should be SVG|map}}: maps', value: 'map' },
					{ label: '{{Should be SVG|music}}: musical scales, notes, etc.', value: 'music' },
					{ label: '{{Should be SVG|physical}}: "realistic" images of physical objects, people, etc.', value: 'physical' },
					{ label: '{{Should be SVG|symbol}}: miscellaneous symbols, icons, etc.', value: 'symbol' }
				]
			}
		},
		{ label: '{{Should be text}}: image should be represented as text, tables, or math markup', value: 'Should be text' }
	],
	'Image quality tags': [
		{ label: '{{Image hoax}}: Image may be manipulated or constitute a hoax', value: 'Image hoax' },
		{ label: '{{Image-blownout}}', value: 'Image-blownout' },
		{ label: '{{Image-out-of-focus}}', value: 'Image-out-of-focus' },
		{
			label: '{{Image-Poor-Quality}}', value: 'Image-Poor-Quality',
			subgroup: {
				type: 'input',
				name: 'ImagePoorQualityReason',
				label: 'Reason: ',
				tooltip: 'Enter the reason why this image is so bad (required)',
				required: true
			}
		},
		{ label: '{{Image-underexposure}}', value: 'Image-underexposure' },
		{
			label: '{{Low quality chem}}: disputed chemical structures', value: 'Low quality chem',
			subgroup: {
				type: 'input',
				name: 'lowQualityChemReason',
				label: 'Reason: ',
				tooltip: 'Enter the reason why the diagram is disputed (required)',
				required: true
			}
		}
	],
	'Replacement tags': [
		{ label: '{{Obsolete}}: improved version available', value: 'Obsolete' },
		{ label: '{{PNG version available}}', value: 'PNG version available' },
		{ label: '{{Vector version available}}', value: 'Vector version available' }
	]
};