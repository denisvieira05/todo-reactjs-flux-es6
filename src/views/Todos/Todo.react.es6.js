import React from "react";

class Todo {
    constructor(props){
        super(props);
        
        this.state = {
            name: ''
        }
    }
    
    render(){
        console.log(this);
        
        return(
             <li>
                <div className="view">
                    <input id={this.props.id} className="toggle" type="checkbox" />
                    <label >{this.state.name}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" />
             </li>
        );
    }
}
module.exports = Todo;