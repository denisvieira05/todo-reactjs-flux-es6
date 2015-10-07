/*jshint node:true, esnext:true, browser:true, newcap:false, undef:true, unused:true*/

import PubSub from "classes/PubSub";
import Dispatcher from "classes/Dispatcher";


import StartAPI from "apis/StartAPI";
import StartStore from "stores/StartStore";

let _store = StartStore.instance,
    _api = StartAPI.instance;

class StartAction extends Action {
 
}

module.exports = StartAction;
