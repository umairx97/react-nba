import FontAwesome from 'react-fontawesome';
import React from 'react';
import styles from './cardinfo.module.css';

const CardInfo = (props) => { 

    const teamName = (teams, team) => { 
        let data = teams.find((item) => { 
            return item.id === team 
        });

        if(data){ 
            return data.name
        }
    }

    return (
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

export default CardInfo;