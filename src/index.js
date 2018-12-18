import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from './firebase';

//Components 
import Routes from './routes';

const App = (props) => { 
    return ( 

        <BrowserRouter> 
        
            <Routes {...props}></Routes>

        </BrowserRouter>
    )
}
firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})