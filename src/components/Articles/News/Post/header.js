import React from 'react';



const header = (props) => { 
    
    const teamNfo = (team) => { 
        return team ? (
            <TeamInfo team = {team}/>
        ) : null
    }
    
    return ( 
        <div>
            {teamNfo(props.teamData)}
        </div> 
    )
}

export default header;