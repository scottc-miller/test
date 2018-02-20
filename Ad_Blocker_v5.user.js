// ==UserScript==
// @name         Ad_Blocker_v5
// @namespace    http://mysite.socccd.edu
// @updateURL    https://github.com/scottc-miller/test/raw/master/Ad_Blocker_v5.user.js
// @downloadURL  https://github.com/scottc-miller/test/raw/master/Ad_Blocker_v5.user.js
// @version      2.0
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
    var myID  = document.getElementByID('ctl00_BodyContent_vwAcademicHistory_lblStudentID');
    var myDiv = document.getElementById('ctl00_BodyContent_vwAcademicHistory_divControls');
    if (myID.innerHTML == '272212'){
     myDiv.innerHTML = GM_getResourceText("html");
    }
}());
