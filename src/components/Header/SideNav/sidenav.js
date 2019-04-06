// Imports
import React from 'react';
import SideNav from 'react-simple-sidenav';


// Components
import SideNavItems from './sidenav_items';

const SideNavigation = (props) => { 
    return ( 
        <div>
            <SideNav 
            // Toggles hide and show functions for sidenav
            showNav = {props.showNav}
            onHideNav = {props.onHideNav}
            navStyle = {{ 
                background: '#242424',
                maxWidth: '220px',
            }}
            >

            <SideNavItems {...props}/>
            </SideNav>
        </div>
    )
}

// Exports
export default SideNavigation;
