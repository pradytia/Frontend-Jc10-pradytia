import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {onLogin} from '../../redux/1.actions';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class Login extends Component {

    state = {
        loginUsername : '',
        loginPassword : ''
    }

    onBtnLogin = () =>{
        let tampungUser = {
            nama : this.state.loginUsername,
            pass: this.state.loginPassword
        }
        this.props.onLogin(tampungUser)
    }

    render() {
        if(this.props.username !==''){
            return <Redirect to='/'/>
        }
        return (
            <div className='container'>
            <section className='login-box'>
                <h2>Login</h2>
                <form action="">
                <input type='text' placeholder='Username' onChange={(e)=>this.setState({loginUsername : e.target.value})}/>
                <input type='password' placeholder='Password' onChange={(e)=>this.setState({loginPassword : e.target.value})}/>
                {
                    !this.props.isLoading
                    ?
                   
                    <input type='button' value='Login' onClick={this.onBtnLogin} style={{backgroundColor:' #038ade',  color: '#fff'}}/> 
                    :
                    <input type='button' value='Login' style={{backgroundColor:' #038ade',  color: '#fff'}}/> 
                }
                <p className='float-right' style={{color:'black'}}>belum punya akun? <Link to='/register'>register</Link></p> 
                </form>
            </section>
        </div>
        );
    }
}

    const mapStateToProps = (state) =>{
        return{
                isLoading : state.iniUser.loading,
                username : state.iniUser.username
        }
    }


export default connect(mapStateToProps, {onLogin})(Login);