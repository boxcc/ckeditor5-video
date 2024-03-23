import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Bold } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

import { Video, VideoResize, VideoStyle, VideoToolbar } from '../src/index';

/* global document, window */

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [
			Essentials,
			Bold,
			Heading,
			MediaEmbed,
			Paragraph,
			Video,
			VideoResize,
			VideoStyle,
			VideoToolbar
		],
		toolbar: [
			'heading',
			'|',
			'bold',
			'|',
			'mediaEmbed'
		],
		video: {
			resizeOptions: [
				{
					name: 'videoResize:original',
					label: 'Original',
					icon: 'original',
					value: 100
				},
				{
					name: 'videoResize:50',
					label: '50',
					icon: 'medium',
					value: 50
				},
				{
					name: 'videoResize:75',
					label: '75',
					icon: 'large',
					value: 75
				}
			],

			resizeUnit: '%',

			// You need to configure the video toolbar, too, so it shows the new style
			// buttons as well as the resize buttons.
			toolbar: [
				'videoStyle:alignLeft', 'videoStyle:alignCenter', 'videoStyle:alignRight',
				'|',
				'videoResize:50',
				'videoResize:75',
				'videoResize:original'
			]
		}
	} )
	.then( editor => {
		window.editor = editor;
		CKEditorInspector.attach( editor );
		window.console.log( 'CKEditor 5 is ready.', editor );
	} )
	.catch( err => {
		window.console.error( err.stack );
	} );
