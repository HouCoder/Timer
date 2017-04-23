(function (){
    var CDNJS_PATH = '//cdnjs.cloudflare.com/ajax/libs/';

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
            jquery: CDNJS_PATH + 'jquery/1.12.4/jquery.min',
            uaparser: CDNJS_PATH + 'UAParser.js/0.7.12/ua-parser.min',
            bootstrap: CDNJS_PATH + 'twitter-bootstrap/3.3.7/js/bootstrap.min',
            select2: CDNJS_PATH + 'select2/4.0.3/js/select2.min',
            howler: CDNJS_PATH + 'howler/2.0.3/howler.min'
        }
    });
})();
