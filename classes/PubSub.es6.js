/*jshint node:true, esnext:true, undef:true, unused:true*/

import {EventEmitter} from "events";

let _instance = Symbol(),
    _enforcer = Symbol();

class PubSub extends EventEmitter {
    constructor(enforcer) {
        super();

        if (enforcer !== _enforcer) {
            throw "Cannot construct singleton";
        }

        this._initialize();
    }

    _initialize() {}

    subscribe(topics, callback) {
        if (topics && callback) {
            topics.split(" ").forEach((topic) => {
                this.on(topic, callback);
            });
        }

        return this;
    }

    on(...args) {
        super.on.apply(this, args);
        return this;
    }

    off(topics, callback) {
        this.unsubscribe(topics, callback);
        return this;
    }

    unsubscribe(topics, callback) {
        if (topics) {
            topics.split(" ").forEach((topic) => {
                if (callback) {
                    this.removeListener(topic, callback);
                } else {
                    this.removeAllListeners(topic);
                }
            });
        } else {
            this.removeAllListeners();
        }

        return this;
    }

    trigger(...args) {
        this.publish.apply(this, args);
        return this;
    }

    publish(...args) {
        var topics = args[0].split(" ");

        topics.forEach((topic) => {
            this.emit.apply(this, [topic].concat(args.slice(1)).concat([topic]));
        });

        return this;
    }

    static get instance() {
        if (!this[_instance]) {
            this[_instance] = new this(_enforcer);
        }

        return this[_instance];
    }
}

module.exports = PubSub;
