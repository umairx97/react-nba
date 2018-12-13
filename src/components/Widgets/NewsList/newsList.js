import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
class NewsList extends Component { 
	
	state = {
		items:[], 
		start: this.props.start,
		end:this.props.start + this.props.amount,
		amount: this.props.amount
	}

	componentWillMount () { 
		axios.get(``)
	}

	render() { 
		return ( 
			<div>
				
			</div>
		)
	}
}

export default NewsList