import React from 'react';
import TodoCount from './TodoCount';
import Filters from './Filters';

class Footer {	
	render(){
		return(
			<footer className="footer">

				<TodoCount />

	      <Filters />

	      <button className="clear-completed">Clear completed</button>

	   </footer>
		);
	}
}

module.exports = Footer;