// Imports 
import React, { Component } from 'react';
import { firebaseArticles, firebaseLooper } from '../../../firebase';

// Components
import SlideTemplates from './slider_templates';



class NewsSlider extends Component { 

    state = { 
        news: []
    }

    // Getting the JSON Database before app load
    componentWillMount () {
        
        firebaseArticles.limitToFirst(3).once('value')
        .then((snapshot)=>{ 
            const news = firebaseLooper(snapshot)
            this.setState({
                news,
            })
        })


        // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        // .then(response => { 
        //     this.setState ({
        //         news:response.data
        //     })
        // })  
    }


    render () { 
        return ( 
            <SlideTemplates data = {this.state.news} type = {this.props.type} settings = {this.props.settings}/>
        )
    }
}

export default NewsSlider;
