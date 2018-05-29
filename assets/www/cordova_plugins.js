cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "mobi.monaca.plugins.Monaca.monaca",
        "file": "plugins/mobi.monaca.plugins.Monaca/www/monaca.js",
        "pluginId": "mobi.monaca.plugins.Monaca"
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "mobi.monaca.plugins.Monaca": "3.1.0",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-custom-config": "2.0.3"
};
// BOTTOM OF METADATA
});