/// <reference path="../webviewer.d.ts" />

WebViewer({
    path: '../public/lib', // path to the PDFTron 'lib' folder on your server
    licenseKey: 'Insert commercial license key here after purchase',
    initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf',
  }, document.getElementById('viewer'))
  .then(function(instance) {
    const docViewer: CoreControls.DocumentViewer  = instance.docViewer;
    const annotManager: CoreControls.AnnotationManager = instance.annotManager;
    // call methods from instance, docViewer and annotManager as needed
  
    // you can also access major namespaces from the instance as follows:
    const Tools = instance.Tools;
    const Annotations = instance.Annotations;
  });



