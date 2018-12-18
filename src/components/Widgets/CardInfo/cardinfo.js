// Imports
import FontAwesome from 'react-fontawesome';
import React from 'react';
import styles from './cardinfo.module.css';

import moment from 'moment';

const CardInfo = (props) => { 

    // Rendering the team name in the card
    const teamName = (teams, team) => { 
        let data = teams.find((item) => { 
            return item.teamId === team 
        });

        if(data){ 
            return data.name
        }
    }


    const formatDate = (date)=> { 
        return moment(date).format(' DD-MM-YYYY')
    }
    return (
        // Setting the styles for the team name and the date 
        <div className = {styles.cardinfo}> 
            <span className = {styles.teamName}>
            {teamName(props.teams, props.team)}
            </span>

            <span className = {styles.date}>
                <FontAwesome name = "clock-o"/>
                {formatDate(props.date)}
            </span>
        </div>
    )
} 

// Exports
export default CardInfo;