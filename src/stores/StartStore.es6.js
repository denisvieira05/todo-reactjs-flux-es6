/*jshint node:true, browser:true, esnext:true, undef:true, unused:true*/

import PubSub from "classes/PubSub";
import Dispatcher from "classes/Dispatcher";

let _collection = [];

class StartStore {
    get collection() {
        return _collection;
    }
}

StartStore.instance._register({
    
});

module.exports = StartStore;
