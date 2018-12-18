// Imports
import React , {Component} from 'react';
import styles from './videoslist.module.css';
import {firebaseTeams, firebaseVideos, firebaseLooper} from '../../../firebase';



// Components
import Button from '../Buttons/buttons';
import VideosListTemplate from './videoslisttemplate';


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

    


    // Getting Teams if length is less than 1 and setting the state 
    request = (start, end) => { 
        if(this.state.teams.length < 1 ){
            firebaseTeams.once('value')
			.then((snapshot)=> { 
				const teams = firebaseLooper(snapshot); 
				this.setState({ 
					teams,
				})
			})

        }


        // Getting the videos from the url and setting the state array of videos 
        firebaseVideos.orderByChild('id').startAt(start).endAt(end).once('value')
			.then((snapshot) => { 
				const videos = firebaseLooper(snapshot);
				this.setState ({ 
					videos:[...this.state.videos,...videos], 
				start,
				end
			})
		})
			.catch(e=> { 
				console.log(e);
			})
    }


    renderVideos =  () => { 
        let template = null;

        switch (this.props.type){ 
            case ('card'): 
                template = <VideosListTemplate data = {this.state.videos} teams = {this.state.teams}/>
                break;
            default: 
                template = null;
        }

        return template;
    }


    // Loads more Videos 
    loadMore = () => { 
        let end = this.state.end + this.state.amount;
        this.request(this.state.end + 1, end);

    }

    // Renders the load more videos 
    renderButton = () => { 
        return this.props.loadmore ? 
        <Button
        type = "loadmore"
        loadMore = {() => this.loadMore()}
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

