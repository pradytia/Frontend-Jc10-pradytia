import React, { Component } from 'react';
import './Auth.css'
import {Link} from 'react-router-dom'

class Auth extends Component {

    state = {
        page : 'REGISTER',
        loginUsername : '',
        loginPassword : '',
        registerName  : '',
        registerEmail : '',
        registerPass  : '',
        repeatPass    : ''
    }

    render() {
        return (
        
            <div className='container'>
                <section className='login-box'>
                    <h2>Login</h2>
                    <form action="">
                    <input type='text' placeholder='Username' onChange={(e)=>this.setState({loginUsername : e.target.value})}/>
                    <input type='password' placeholder='Password' onChange={(e)=>this.setState({loginPassword : e.target.value})}/>
                    <input type='submit' value='Login' style={{backgroundColor:' #038ade',  color: '#fff'}}/> 
                    <p className='float-right'>belum punya akun? <Link to='/register'>register</Link></p> 
                    </form>
                </section>
            </div>
        );
    }
}

export default Auth;