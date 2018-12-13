import React from 'react'
import styles from './footer.module.css';
import {Link} from 'react-router-dom';


import {CURRENT_YEAR} from '../../config';


const Footer = () => ( 
		<div className = {styles.footer}> 
			<Link to = "/" className = {styles.logo}>
				 <img alt="nba logo" src="/images/nba_logo.png"/>
			</Link>

			<div className = {styles.rights}> 
				`@NBA 2018 All rights reserved.`
			</div>
		</div>
	)   


	export default Footer
