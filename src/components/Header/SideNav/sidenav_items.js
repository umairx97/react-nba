//Imports
import React from 'react';
import { Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


// Components
import style from './sidenav.module.css';


    // Side navigation items
    const items = [
        {
            type: style.Option,
            icon: 'home',
            text:'Home',
            link: '/'
        },
        {
            type: style.Option,
            icon: 'file-text-o',
            text:'News',
            link: '/news'
        },
        {
            type: style.Option,
            icon: 'play',
            text:'Videos',
            link: '/videos'
        },
        {
            type: style.Option,
            icon: 'sign-in',
            text:'Sign in',
            link: '/sign-in'
        },
        {
            type: style.Option,
            icon: 'sign-out',
            text:'Sign out',
            link: '/sign-out'
        }        
    ]  


    // Function to iterate over items
    const showItems = () => { 
        return items.map((item,i) => { 
            return (
                <div key = {i} className = {item.type}>
            
                    <Link to={item.link}>
                        <FontAwesome name = {item.icon}/>
                        {item.text}
                    </Link>

                </div> 

            )
        })
    }

    // Main render functions
    const SideNavItems = () => { 
        return (
                <div> 
                    {showItems()}
                </div>
        )

    }


export default SideNavItems;