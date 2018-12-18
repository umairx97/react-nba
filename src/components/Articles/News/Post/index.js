import React, {Component} from 'react';
import {firebaseDB, firebaseLooper, firebaseTeams} from '../../../../firebase';



import styles from '../../articles.module.css';
import Header from './header';


class NewsArticles extends Component { 

    // State of teams and articles 
    state = { 
        article: [], 
        team: []

    }


    // Loads before the main component
    componentWillMount () { 
        firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
        .then((snapshot)=>{ 
            let article = snapshot.val();

            firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value')
            .then((snapshot)=> { 
                const team = firebaseLooper(snapshot)

                this.setState({ 
                    article, 
                    team
                })
            })
        })



        // axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        // .then (response => { 
        //     let article = response.data[0];

        //     axios.get(`${URL}/teams?id=${article.team}`)
        //     .then (response => { 
        //         this.setState ({ 
        //             article,
        //             team:response.data
        //         })
        //     }) 
        // })
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
                
                <div className = {styles.articleBody}>

                <h1> {article.title} </h1>
                <div className = {styles.articleImage}
                    style = {{ 
                        background: `url('/images/articles/${article.image}')`
                    }}
                
                ></div>
                <div className = {styles.articleText}>
                    {article.body}
                </div> 
                </div> 
            </div>
        )
    }
}


// Exports
export default NewsArticles;