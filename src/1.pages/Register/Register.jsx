import React, {Component} from 'react';
import './Register.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {connect} from 'react-redux'
import {onRegister} from '../../redux/1.actions'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'

class Register extends Component {

    state = {
        registerUsername : '',
        registerEmail    : '',
        registerPassword : '',
        repeatPassword   : ''

    }
    

    onRegisterBtnHandler = () =>{
        let userObj = {
            username : this.state.registerUsername,
            email    : this.state.registerEmail,
            password : this.state.registerPassword
        }
        this.props.onRegister(userObj)
    }

    render() {
        return (
        <div className='login-box'>
          <h1>Register</h1>
          <div className="text-box test">
          <i className="fas fa-user icons mt-2"></i>
            <input className='testing' type='text' onChange={(e)=>this.setState({registerUsername : e.target.value})} placeholder='Username'/>
          </div>
          <div className="text-box test">
          <i className="fas fa-envelope icons mt-2"></i>
            <input className='testing' type='text' onChange={(e)=>this.setState({registerEmail : e.target.value})} placeholder='Email'/>
          </div>
          <div className="text-box test">
          <i className="fas fa-lock icons mt-2"></i>
            <input className='testing' type='text' onChange={(e)=>this.setState({registerPassword : e.target.value})} placeholder='Password'/>
          </div>
          <div className="text-box test">
          <i className="fas fa-lock icons mt-2"></i>
            <input className='testing' type='text' onChange={(e)=>this.setState({repeatPassword : e.target.value})} placeholder='Repeat password'/>
          </div>
          {
            !this.props.isLoading
            ?
            <Link to='/'>
            <input type='button' value='Register' onClick={this.onRegisterBtnHandler} className='btn btn-success mt-4'/>
            </Link>
            :
            <h3>{this.props.message}</h3>
          }
        </div>
        )
    }
}

const mapStateToprops = (state) =>{
  return{
      message   : state.iniUser.msg,
      isLoading : state.iniUser.loading
  }
}

export default connect(mapStateToprops,{onRegister})(Register);