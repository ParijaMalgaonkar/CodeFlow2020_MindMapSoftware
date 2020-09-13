import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { app } from 'firebase';
// import { AuthProvider } from './Auth';

const Navigation = () => {

            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>

                <button /*onClick={()=> app.auth().signOut()}*/ className='f3 link dim black ma3 pa3 pointer'>Sign Out</button>
            </nav>
}

export default Navigation;