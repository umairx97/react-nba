// Imports 
import React, { Component } from 'react';
import axios from 'axios';


// Components
import SlideTemplates from './slider_templates';
import { URL } from '../../../config';


class NewsSlider extends Component { 

    state = { 
        news: []
    }

    // Getting the JSON Database before app load
    componentWillMount () { 
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then(response => { 
            this.setState ({
                news:response.data
            })
        })  
    }


    render () { 
        return ( 
            <SlideTemplates data = {this.state.news} type = {this.props.type} settings = {this.props.settings}/>
        )
    }
}

export default NewsSlider;
