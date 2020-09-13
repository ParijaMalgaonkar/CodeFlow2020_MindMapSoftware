import React, {Component} from 'react'; 
// Importing Module 
import ReactDOM from 'react-dom'; 
import './Login.css';
import Particles from 'react-particles-js';

import Navigation from './Navigation';
import SignIn from './Signin';


const particlesOptions = {
  particles : {
    opacity : {
      value: 0.1
    },
    number : {
      value: 90,
      density : {
        enable: true,
        value_area:700
      }
    }, 
    interactivity : {
      onhover : {
        enable: true,
      }

    }
  }
}

function Login() {
        return (
            <div className="App">
              <Particles className='particles'
                params={particlesOptions} />
              <Navigation />
              <SignIn />
            </div>
        );
}

export default Login;