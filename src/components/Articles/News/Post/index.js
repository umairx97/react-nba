import React, {Component} from 'react';
import axios from 'axios';
import {URL} from '../../../../config';

import styles from '../../articles.module.css';

class NewsArticles extends Component { 

    state = { 
        article: [], 
        team: [],

    }
    
    render () { 
        return ( 
            <div> 
                Article view 
            </div>
        )
    }
}


export default NewsArticles;