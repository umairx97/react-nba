// Imports
import FontAwesome from 'react-fontawesome';
import React from 'react';
import styles from './cardinfo.module.css';

const CardInfo = (props) => { 

    // Rendering the team name in the card
    const teamName = (teams, team) => { 
        let data = teams.find((item) => { 
            return item.id === team 
        });

        if(data){ 
            return data.name
        }
    }

    return (
        // Setting the styles for the team name and the date 
        <div className = {styles.cardinfo}> 
            <span className = {styles.teamName}>
            {teamName(props.teams, props.team)}
            </span>

            <span className = {styles.date}>
                <FontAwesome name = "clock-o"/>
                {props.date}
            </span>
        </div>
    )
} 

// Exports
export default CardInfo;