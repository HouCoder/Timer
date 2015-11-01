requirejs.config({
    baseUrl: './',
    shim: {
        'bootstrap': {
            deps: [
                'jquery'
            ]
        }
    },
    paths: {
        jquery: window.TIMER.COMPONENTS_PATH + 'jquery/dist/jquery.min',
        uaparser: window.TIMER.COMPONENTS_PATH + 'ua-parser-js/dist/ua-parser.min',
        bootstrap: window.TIMER.COMPONENTS_PATH + 'bootstrap/dist/js/bootstrap.min',
        select2: window.TIMER.COMPONENTS_PATH + 'select2/dist/js/select2.min',
        howler: window.TIMER.COMPONENTS_PATH + 'howler.js/howler.min'
    }
});
