var App;

(function () {
    "use strict";

    requirejs.config({
        paths: {
            'jquery': './libs/jquery/dist/jquery.min',
            'ring': './libs/ring/ring',
            'underscore': './libs/underscore/underscore'
        },
        shim: {
            'dest/App': {
                deps: [
                    'jquery',
                    'ring'
                ]
            },
            'ring': {
                deps: [
                    'underscore'
                ]
            },
            'underscore': {
                exports: '_'
            }
        },

        urlArgs: "v=" + window.config.cacheBreak,
        waitSeconds: 15
    });

    requirejs([
        './dest/App'
    ], function () {
        $(function () {
            App = new $.App($('#site'));
        });
    });
})();