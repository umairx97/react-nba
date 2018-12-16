import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../../../../config';

import styles from '../../articles.module.css';
import Header from './header';
import Body from './body';


class NewsArticles extends Component { 

    // State of teams and articles 
    state = { 
        article: [], 
        team: []

    }


    // Loads before the main component
    componentWillMount () { 
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then (response => { 
            let article = response.data[0];

            axios.get(`${URL}/teams?id=${article.team}`)
            .then (response => { 
                this.setState ({ 
                    article,
                    team:response.data
                })
            }) 
        })
    }


    render () { 

        // Gets the data saved in state
        const article = this.state.article; 
        const team = this.state.team; 


        return ( 

            // Setting the props for components 
            <div className = {styles.articleWrapper}> 
                <Header
                teamData = {team[0]}
                date = {article.date}
                author = {article.author}
                />
                
                <Body/>
            </div>
        )
    }
}


// Exports
export default NewsArticles;