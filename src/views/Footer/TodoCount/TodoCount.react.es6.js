import React from 'react';

class TodoCount{
	render(){
		return(
				<span className="todo-count" >
	      	<strong>2</strong>
	      	<span> </span>
	      	<span>items</span>
	      	<span> left</span>
	      </span>
		);
	}
}

module.exports = TodoCount;