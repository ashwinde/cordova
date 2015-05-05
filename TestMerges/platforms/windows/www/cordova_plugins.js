cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/src/windows/InAppBrowserProxy.js",
        "id": "org.apache.cordova.inappbrowser.InAppBrowserProxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/org.apache.cordova.TestPlugin/www/test.js",
        "id": "org.apache.cordova.TestPlugin.TestPlugin",
        "clobbers": [
            "test.something"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.TestPlugin/src/windows/TestPluginProxy.js",
        "id": "org.apache.cordova.TestPlugin.TestPluginProxy",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.inappbrowser": "0.6.0",
    "org.apache.cordova.TestPlugin": "0.6.0"
}
// BOTTOM OF METADATA
});