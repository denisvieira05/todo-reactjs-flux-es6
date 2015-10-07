/*jshint node:true, undef:true, unused:true*/

var Dispatcher = require("flux").Dispatcher,
    dispatcher;

if (!dispatcher) {
    dispatcher = new Dispatcher();
}

module.exports = dispatcher;