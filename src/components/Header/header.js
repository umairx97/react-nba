// Imports
import React from 'react'; 
import style from './header.module.css';
import {Link} from 'react-router-dom';


//Components 
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sidenav';

const Header = (props) => { 

	//Navigation bar function
    const navBars = () => ( 
        <div className = {style.bars}>
			<FontAwesome name="bars"
			onClick = {props.onOpenNav}

			style = {{ 
				color: '#dfdfdf', 
				padding: '10px', 
				cursor: 'pointer'
			}}

			/>
            
        </div>
    )


	//NBA Logo Component
    const  logo = () => (
            <Link to="/" className = {style.logo}>
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
    )


    return (
        <header className = {style.Header}> 
		<SideNav {...props}></SideNav>
            <div className={style.HeaderOpt}>
                {navBars()}
                {logo ()} 
            </div>
        </header>

    )
}

// Exports
export default Header;