import React from 'react';
import VideosList from '../../../Widgets/VideosList/videoslist';


const VideosMain = () => { 
    return ( 
        <div> 
            <VideosList
                type = "card"
                title = {false}
                loadmore = {true}
                start = {0}
                amount = {10}
            />
        </div>
    )
}

export default VideosMain;