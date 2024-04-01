@kinto-technologies/ckeditor5-video
==========================

This package was created by the [ckeditor5-package-generator](https://www.npmjs.com/package/ckeditor5-package-generator) package.

This plugin is enabling add video tag to CKEditor5 based on [@visao/ckeditor5-video](https://github.com/Technologie-Visao/ckeditor5-video).

## Demo

Run sample application by blow command.

```
yarn start
```

## Installation

Add this to your custom build or inside your project.

- With npm

```
npm install --save-dev @kinto-technologies/ckeditor5-video
```

- With yarn

```
yarn add -D @kinto-technologies/ckeditor5-video
```

## Plugins

### Video Plugin

- Plugin to parse videos in the editor
- Mandatory for the other plugins VideoRelated plugins

```js
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [Video],
        video: {}
    } )
```

### VideoUpload Plugin

- Plugin to upload video files via toolbar upload prompt or drag and drop functionalities
- Specify allowed media(mime) types. Default => `['mp4', 'webm', 'ogg']`
- Allow multiple file upload or not, Default => `true`
- Add the videoUpload toolbar option to access the file repository
- Must provide an UploadAdapter.
- The use of the Video plugin is mandatory for this plugin to work

```js
function VideoUploadAdapterPlugin( editor ) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new VideoUploadAdapter(loader);
    };
}

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [Video, VideoUpload],
        extraPlugins: [VideoUploadAdapterPlugin],
        toolbar: ['videoUpload'],
        video: {
            upload: {
                types: ['mp4'],
                allowMultipleFiles: false,
            }
        }
    } )
```

### VideoToolbar Plugin

- Balloon toolbar for different Video plugin plugins
- See VideoResizing and VideoStyle sections for examples

### VideoResizing Plugin

- Plugin for resizing the video in the editor
- Should work just like image resize. See the ck-editor 5 documentation for more examples.

```js
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [Video, VideoToolbar, VideoResize], // or [Video, VideoToolbar, VideoResizeEditing, VideoResizeHandles],
        video: {
            resizeUnit: 'px',
            // Configure the available video resize options.
            resizeOptions: [
                {
                    name: 'videoResize:original',
                    value: null,
                    label: 'Original',
                    icon: 'original'
                },
                {
                    name: 'videoResize:50',
                    value: '50',
                    label: '50',
                    icon: 'medium'
                },
                {
                    name: 'videoResize:75',
                    value: '75',
                    label: '75',
                    icon: 'large'
                }
            ],
            toolbar: [
                'videoResize',
                '|',
                'videoResize:50',
                'videoResize:75',
                'videoResize:original'
            ]
        },
    } )
```

### VideoStyle Plugin

- Plugin for styling the video plugins.
- Should work just like image resize. See the ck-editor 5 documentation for more examples.
- Predefined styles are:
  - `full`
  - `side`
  - `alignLeft`
  - `alignCenter`
  - `alignRight`

```js

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [Video, VideoToolbar, VideoStyle],
        video: {
            styles: [
                'alignLeft', 'alignCenter', 'alignRight'
            ],
            toolbar: ['videoStyle:alignLeft', 'videoStyle:alignCenter', 'videoStyle:alignRight']
        },
    } )
```

## License

The `@kinto-technologies/ckeditor5-video` package is available under [MIT license](https://opensource.org/licenses/MIT).

However, it is the default license of packages created by the [ckeditor5-package-generator](https://www.npmjs.com/package/ckeditor5-package-generator) package and it can be changed.
