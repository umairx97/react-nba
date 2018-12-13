import React from 'react'
import styles from './footer.module.css';
import {Link} from 'react-router-dom';

let date = (new Date()).getFullYear()
const footerstring = `@NBA ${date} All rights reserverd`;

const Footer = () => ( 



		<div className = {styles.footer}> 
			<Link to = "/" className = {styles.logo}>
				 <img alt="nba logo" src="/images/nba_logo.png"/>
			</Link>

			<div className = {styles.rights}> 
				{footerstring}
			</div>
		</div>
	)   


	export default Footer
