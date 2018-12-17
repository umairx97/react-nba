// Imports 
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


// Components 
import { URL } from '../../../config';
import styles from './newslist.module.css'
import Button from '../Buttons/buttons';
import CardInfo from '../../Widgets/CardInfo/cardinfo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



// Main Component for News List 
class NewsList extends Component { 
	
	// Initial State Settings 
	state = {
		teams: [],
		items:[], 
		start: this.props.start,
		end:this.props.start + this.props.amount,
		amount: this.props.amount
	}


	// Lifecycle Methods
	componentWillMount () { 
		this.request(this.state.start, this.state.end);
	}


	// Request for teams from start to end as parameters 
	request = (start, end) => { 
		if(this.state.teams.length < 1){
			axios.get(`${URL}/teams`)
			.then(response => { 
				this.setState({
					teams:response.data
				})
			})

		}


		// Request for articles related to teams
		axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
		.then(response => { 
			this.setState({ 
				items:[...this.state.items,...response.data], 
				start,
				end
			})
		})
	}



	// Load more news 
	loadMore = () => { 
		let end = this.state.end + this.state.amount;
		this.request(this.state.end, end);
	}





	renderNews = (type) => { 
		let template = null; 

		// Rendering the template based on the type passed as props
		switch(type) {
			case ('card'): 
				template = this.state.items.map((item, i) => (

					<CSSTransition
						classNames = {{
							enter: styles.newsList_wrapper,
							enterActive: styles.newsList_wrapper_enter
						}}
						timeout = {500}
						key ={i} 
					> 
						<div> 
							<div className = {styles.newslist_item}>
								<Link to = {`/articles/${item.id}`}>
									<CardInfo
									teams = {this.state.teams}
									team = {item.team}
									date = {item.date}
									/>
									<h2>{item.title}</h2>
								
								</Link>
							</div>
						</div>
					</CSSTransition>
					
				))
				break;
			case ('cardMain'): 
				template = this.state.items.map((item, i) => (
					<CSSTransition
						classNames = {{
							enter: styles.newsList_wrapper,
							enterActive: styles.newsList_wrapper_enter
						}}
						timeout = {500}
						key ={i} 
					> 

						<Link to = {`/articles/${item.id}`}>
							<div className = {styles.flex_wrapper}>
									<div className = {styles.left}
										style = {{ 
											background: `url(/images/articles/${item.image})`
										}}>


									<div> </div>
								</div>

								<div className = {styles.right}>

								<CardInfo
									teams = {this.state.teams}
									team = {item.team}
									date = {item.date}
									/>
									<h2>{item.title}</h2>
								</div>

								</div>
							

						</Link>
					</CSSTransition>

				))
				break;
			default:
				template = null;
		}
		
		return template;
	}

	render() { 
		return (
			
			// Props for Components 
			<div>

				<TransitionGroup
				component = "div"
				className = "List">

					{this.renderNews(this.props.type)}

				</TransitionGroup>

				<Button
					type="loadmore"
					loadMore = {() => this.loadMore()}
					cta = "Load More News"
				/>
			</div>
		)
	}
}

// Exports
export default NewsList