import { Video as VideoDll, icons } from '../src';
import Video from '../src/video';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 Video DLL', () => {
	it( 'exports Video', () => {
		expect( VideoDll ).to.equal( Video );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
