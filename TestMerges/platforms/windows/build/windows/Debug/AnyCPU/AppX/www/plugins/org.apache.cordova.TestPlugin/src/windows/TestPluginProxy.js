﻿cordova.define("org.apache.cordova.TestPlugin.TestPluginProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/*jslint sloppy:true */
/*global Windows:true, require, document, setTimeout, window, module */



var cordova = require('cordova'),
    channel = require('cordova/channel'),
    urlutil = require('cordova/urlutil');

var Test = {
    close: function (win, lose) {
       new Windows.UI.Popups.MessageDialog("In Test Plugin close(). \n Should have called close() in inAppBrowser").showAsync();
    },
    show: function (win, lose) {
       console.log ("In Test Plugin show()");
    }
};

module.exports = Test;

require("cordova/exec/proxy").add("TestPlugin", module.exports);
});
