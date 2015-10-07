/*jshint node:true, browser:true, esnext:true, undef:true, unused:true*/

import PubSub from "./PubSub";
import Dispatcher from "./Dispatcher";

class Store extends PubSub {
    _acceptPayload(payload) {
        return payload.storeID === this.id;
    }

    _register(callbacks) {
        this.id = Dispatcher.register((payload) => {
            if (typeof callbacks[payload.actionName] === "function") {
                if (this._acceptPayload(payload)) {
                    callbacks[payload.actionName](payload);
                    this.publish(payload.error ? "error" : "change", payload);
                }
            }
        });
    }
}

module.exports = Store;
