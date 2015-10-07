import React from "react";

import Todo from "./Todo";
// import Actions from "actions/StartAction";

class Todos {
    render(){
        var arr = [{
            id: 1,
            name: 'Title-ok'
        }];
        return (
            <section className="main" >
              <input className="toggle-all" type="checkbox" />
              <ul className="todo-list">
              {
                  arr.map(function(item){
                   return (
                        <Todo 
                            id={item.id} 
                            name={item.name}
                        />
                    ) 
                })
              }

              </ul>
           </section>  
           
        );
    }
};

module.exports = Todos;