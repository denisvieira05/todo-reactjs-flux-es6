import React from 'react';

class Filters{
	render(){
		return(
				<ul className="filters">
	         <li ><a href="#/" className="selected">All</a></li>
	         <span> </span>
	         <li><a href="#/active" className="">Active</a></li>
	         <span> </span>
	         <li><a href="#/completed" className="">Completed</a></li>
	      </ul>
		);
	}
} 

module.exports = Filters;