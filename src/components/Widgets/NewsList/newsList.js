import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

import { URL } from '../../../config';


import { CSSTransition, TransitionGroup } from 'react-transition-group';
class NewsList extends Component { 
	
	state = {
		items:[], 
		start: this.props.start,
		end:this.props.start + this.props.amount,
		amount: this.props.amount
	}

	componentWillMount () { 
		axios.get(`${URL}\articles?_start = ${this.state.start}&end=${this.state.end}`)
		.then(response => { 
			this.setState({ 
				items:[...this.state.items,...response.data]
			})
		})
	}

	render() { 
		console.log(this.state.items);
		return ( 
			<div>
				Hello
			</div>
		)
	}
}

export default NewsList