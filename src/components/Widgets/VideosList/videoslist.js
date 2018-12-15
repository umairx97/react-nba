// Imports
import React , {Component} from 'react';
import styles from './videoslist.module.css';
import axios from 'axios';


// Components 
import {URL} from '../../../config';
import Button from '../Buttons/buttons';



class VideosList extends Component { 
    
    state = { 
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
    }

    // Lifecycle Method
    componentWillMount () { 
        this.request(this.state.start, this.state.end)
    }

    renderVideos () { 
        
    }


    // Getting Teams if length is less than 1 and setting the state 
    request = (start, end) => { 
        if(this.state.teams.length < 1 ){
            axios.get(`${URL}/teams`)
            .then (response => { 
                this.setState ({ 
                    teams:response.data
                })
            }) 

        }


        // Getting the videos from the url and setting the state array of videos 
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(response => { 
            this.setState  ({ 
                videos: [...this.state.videos,...response.data]
            })
        })
    }

    loadMore = () => { 

    }

    // Renders the load more videos 
    renderButton = () => { 
        return this.props.loadmore ? 
        <Button
        type = "loadmore"
        loadmore = {() => this.loadMore()}
        cta = "Load More Videos"
        />

        :

        <Button type = "linkTo" cta="More Videos" linkTo= "/videos"/>
    }


    // Renders the NBA Videos Title
    renderTitle = () => { 
        return this.props.title ? 
        
        <h3>
            <strong>NBA</strong> Videos
        </h3>
        : 
        null
    }

    render () { 
        return ( 
            <div className = {styles.videoslist_wrapper}> 
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}


// Exports 
export default VideosList;

