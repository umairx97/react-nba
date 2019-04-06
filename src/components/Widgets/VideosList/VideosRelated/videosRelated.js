import React from 'react';

import styles from '../videoslist.module.css';
import VideosListTemplate from '../videoslisttemplate';

const VideosRelated = (props) => { 
    return ( 
        <div className = {styles.relatedWrapper}>
            <VideosListTemplate
            data = {props.data}
            teams = {props.teams}
            />
        </div>
    )
}

export default VideosRelated