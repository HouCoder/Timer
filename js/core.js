define('core', ['jquery', 'uaparser', 'bootstrap'], function ($, UAparser){
    var core = {};

    core.setBackgroundColor = function( hexColor ){
        $('body').css('background-color', hexColor);
    }

    core.echoBrowserName = function(){
        var browser = UAparser().browser;
        alert('You are using ' + browser.name);
    }

    return core;
});
