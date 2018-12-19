//Imports
import React, {Component} from 'react';
import './layout.css';


//Components 
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


class Layout extends Component { 

	state = { 
		showNav: false

	}

	//Toggles the State of Navigation bar
	toggleSidenav = (action) => { 
		this.setState ({ 
			showNav:action
		})
	}



	render () { 
		return (
			<div> 
				<Header
					user = {this.props.user}
					showNav = {this.state.showNav}
					onHideNav = { () => this.toggleSidenav(false)} //Toggles the Navigation bar state to false 
					onOpenNav = {() => this.toggleSidenav(true)} //Toggles the Navigation bar state to true
				/>
				
				{this.props.children}
				<Footer/>
			</div>
		)
	}
}

//Export Modules
export default Layout;