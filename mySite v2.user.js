// ==UserScript==
// @name         mySite v2
// @namespace    http://mysite.socccd.edu
// @updateURL    https://github.com/scottc-miller/test/raw/master/mySite%20v2.user.js
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://mysite.socccd.edu/Portal/MySite/Classes/AcademicHistory.aspx
// @resource html https://raw.githubusercontent.com/scottc-miller/test/master/foo.html
// @resource html2 https://raw.githubusercontent.com/scottc-miller/test/master/mySite.html
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// @grant GM_getResourceText
// ==/UserScript==

(function() {
     //Successfully Updated via github!
     // HTML escape generator @ https://www.freeformatter.com/javascript-escape.html
    var myDiv = document.getElementById('ctl00_BodyContent_vwAcademicHistory_divControls');
    myDiv.innerHTML = GM_getResourceText("html");
}());
