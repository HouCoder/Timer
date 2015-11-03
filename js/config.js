(function (){
    var COMPONENTS_PATH = '../bower_components/';

    requirejs.config({
        baseUrl: './js/',
        shim: {
            'bootstrap': {
                deps: [
                    'jquery'
                ]
            }
        },
        paths: {
            jquery: COMPONENTS_PATH + 'jquery/dist/jquery.min',
            uaparser: COMPONENTS_PATH + 'ua-parser-js/dist/ua-parser.min',
            bootstrap: COMPONENTS_PATH + 'bootstrap/dist/js/bootstrap.min',
            select2: COMPONENTS_PATH + 'select2/dist/js/select2.min',
            howler: COMPONENTS_PATH + 'howler.js/howler.min'
        }
    });
})();
