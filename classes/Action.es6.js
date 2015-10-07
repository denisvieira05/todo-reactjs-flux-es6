/*jshint node:true, esnext:true, browser:true, newcap:false, undef:true, unused:true*/

import PubSub from "./PubSub";
import Dispatcher from "./Dispatcher";

class Action extends PubSub {
    dispatch(actionName, options = {}) {
        Dispatcher.dispatch({
            actionName: actionName,
            storeID: this.storeID,
            data: options.data,
            error: options.error,
            response: options.response
        });
    }
}

module.exports = Action;
