// ==UserScript==
// @name         Spax&Peps Snay.io script
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  A script that updates automatically, to bring you cool features for Snay.io.
// @author       Spax&PepsYTB
// @match        https://www.snay.io/*
// @license      MIT
// @icon         https://cdn.discordapp.com/attachments/1110945421586604082/1120861440924995584/NCdpUQE.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    fetch('https://raw.githubusercontent.com/ShazamHax/Snay.io-Script/main/ScriptCode.js')
  .then(response => response.text())
  .then(text => {
        var scriptCode = Function(text);
        scriptCode();
  })
  .catch(error => {
    console.error('Error:', error);
  });


})();
