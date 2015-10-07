/*jshint node:true, browser:true, esnext:true, undef:true, unused:true*/

import PubSub from "classes/PubSub";
import Dispatcher from "classes/Dispatcher";

var _Todos = localStorage.getItem('todos') || [];

class StartAPI {
    init() {
    	return(_Todos);
    }
}

module.exports = StartAPI;
