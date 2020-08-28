# TypeScript PDF Viewer Sample (WebViewer)

[WebViewer](https://www.pdftron.com/documentation/web/) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com). It provides a slick out-of-the-box responsive UI that interacts with the core library to view, annotate and manipulate PDFs that can be embedded into any web project.

![WebViewer UI](https://www.pdftron.com/downloads/pl/webviewer-ui.png)

This repo is specifically designed for any users interested in integrating WebViewer into a TypeScript project. WebViewer has a comprehensive definition file ready for use by just adding a reference to the definition file.

## Initial setup

Before you begin, make sure your development environment includes [Node.js](https://nodejs.org/en/).

## Install

```shell
git clone https://github.com/PDFTron/webviewer-typescript-sample.git
cd webviewer-typescript-sample
npm install
```

## Run

Setup the TypeScript compiler to watch for changes and recompile the source file:

```shell
npm run watch
```

Open a different shell service and run:

```shell
npm start
```

## WebViewer APIs

Most classes and functions are well documented in the TypeScript definition file. See [API documentation](https://www.pdftron.com/documentation/web/guides/ui/apis).

## Enabling full API

PDFNetJS Full is a complete browser side PDF SDK, unlocking viewing, parsing and editing of PDF files. To enable full API, you can modify constructor in `src/index.ts` and then use `tsc src/index.ts` from the project root:

```diff
const viewerElement = document.getElementById('viewer');
WebViewer({
    path: 'WebViewer/lib',
    initialDoc: 'path/to/local/file OR online URL', // replace with your own PDF file
+   fullAPI: true
}, viewerElement).then((instance) => {
    // call APIs here
    })
}
```

## License

See [license](./LICENSE).
