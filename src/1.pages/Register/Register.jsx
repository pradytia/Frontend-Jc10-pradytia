import React, {Component} from 'react';
import './Register.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {connect} from 'react-redux'
import {onRegister} from '../../redux/1.actions'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Cookie from 'universal-cookie'

let cookieObj = new Cookie()

class Register extends Component {

    state = {
        registerUsername : '',
        registerEmail    : '',
        registerPassword : '',
        repeatPassword   : '',
        isSame           : true

    }
    
    componentWillReceiveProps(newProps){
      cookieObj.set('userData', newProps.username, {path:'/'})
    }




    onRegisterBtnHandler = () =>{

      // if(this.state.registerUsername === '' || this.state.registerEmail ==='' || this.state.registerPassword ===''
      //  || this.state.repeatPassword === ''){
      //     this.setState({isSame : false})
        
      //  }

        let userObj = {
            username : this.state.registerUsername,
            email    : this.state.registerEmail,
            password : this.state.registerPassword
        }
        this.props.onRegister(userObj)
    }

    render() {

      if(this.props.username !==''){
        return <Redirect to='/'/>
      }

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
            <input type='button' value='Register' onClick={this.onRegisterBtnHandler} className='btn btn-success mt-4'/>
            :
            <input type='button' value='Register' onClick={()=> swal('Failed', 'Silahkan Coba lagi', 'error')} className='btn btn-success mt-4'/>
          }
        </div>
        )
    }
}

const mapStateToprops = (state) =>{
  return{
      message   : state.iniUser.msg,
      isLoading : state.iniUser.loading, 
      username :  state.iniUser.username
  }
}

export default connect(mapStateToprops,{onRegister})(Register);