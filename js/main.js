requirejs.config({
    shim: {
        'bootstrap': {
            deps: [
                'jquery'
            ]
        }
    },

    paths: {
        jquery: window.JW.CDNJS + 'jquery/dist/jquery.min',
        uaparser: window.JW.CDNJS + 'ua-parser-js/dist/ua-parser.min',
        bootstrap: window.JW.CDNJS + 'bootstrap/dist/js/bootstrap.min',
        select2: window.JW.CDNJS + 'select2/dist/js/select2.min',
        howler: window.JW.CDNJS + 'howler.js/howler.min'
    }
});
