import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


//Components 
import Routes from './routes';

const App = () => { 
    return ( 

        <BrowserRouter> 
        
            <Routes></Routes>

        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
