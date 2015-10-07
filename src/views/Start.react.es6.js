/*jshint node:true, browser:true, esnext:true, newcap:false, unused:true, undef:true*/

import PubSub from "classes/PubSub";
import Dispatcher from "classes/Dispatcher";

import "./Start.scss";
import React from "react";

import Header from "views/Header";
import Todos from "views/Todos";

class Start {
    render() {
        return (
            <div className="Start">
                <section className="todoapp">
                    <Header />
                    <Todos />
                </section>
            </div>
        );
    }
}

React.render(<Start />, document.querySelector("body"));
