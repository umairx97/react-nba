//Imports
import React from 'react';

//Components 
import NewsSlider from '../Widgets/NewsSlider/slider';
import NewsList from '../Widgets/NewsList/newsList';
import VideosList from '../Widgets/VideosList/videoslist';

const Home = () => {
	return (

		//Props for the components {NewsSlider, NewsList, VideosList}
		<div> 
		   <NewsSlider
				type = "featured"
				start = {0}
				amount = {3}
				settings = {{
					dots:false
				}}
		   />

		   {/* <NewsList
			   type = "card"
			   loadmore = {true}
			   start = {3}
			   amount = {3}
		   />

		   <VideosList
		   type = "card"
		   title = {true}
		   loadmore = {true}
		   start = {0}
		   amount = {3}
		   /> */}
		</div>
	)
}

// Exports
export default Home;