import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider';


import NewsList from '../Widgets/NewsList/newsList';


const Home = () => {
	return ( 
		<div> 
		   <NewsSlider
				type = "featured"
				start = {0}
				amount = {3}
				settings = {{
					dots:false
				}}
		   />

		   <NewsList/>
		</div>
	)
}


export default Home;