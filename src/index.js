/// <reference path="../webviewer.d.ts" />
WebViewer({
    path: '../public/lib',
    licenseKey: 'Insert commercial license key here after purchase',
    initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
}, document.getElementById('viewer'))
    .then(function (instance) {
    var docViewer = instance.docViewer;
    var annotManager = instance.annotManager;
    // call methods from instance, docViewer and annotManager as needed
    // you can also access major namespaces from the instance as follows:
    var Tools = instance.Tools;
    var Annotations = instance.Annotations;
});
