import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Bold } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

import Video from '../src/video';

/* global document, window */

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [
			Video,
			Essentials,
			Bold,
			Heading,
			MediaEmbed,
			Paragraph
		],
		toolbar: [
			'videoButton',
			'|',
			'heading',
			'|',
			'bold',
			'|',
			'mediaEmbed'
		]
	} )
	.then( editor => {
		window.editor = editor;
		CKEditorInspector.attach( editor );
		window.console.log( 'CKEditor 5 is ready.', editor );
	} )
	.catch( err => {
		window.console.error( err.stack );
	} );
