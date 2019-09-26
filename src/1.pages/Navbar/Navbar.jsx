import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import Cookie from 'universal-cookie';
import {resetUser} from '../../redux/1.actions'

let cookieObj = new Cookie()


class NavbarCom extends Component {

    state = {
        navbarOpen : false
    }

    onBtnLogOut = () =>{
        cookieObj.remove('userData')
        this.props.resetUser()
    }

    render() {
        return (
            <div>

                <MDBNavbar  expand='md' className='navbar-color navbar'>
                    <MDBNavbarToggler onClick={()=>this.setState({navbarOpen : !this.state.navbarOpen})}/>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right className='pr-3 text-center pl-3'>
                            {
                                this.props.nama.username && this.props.nama.role
                                ?
                                <>
                            <MDBNavItem>
                                <MDBNavLink style={{color:'white', fontSize:'18px'}}></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>                             
                              <MDBNavLink to='/' style={{color:'white', fontSize:'18px', letterSpacing:'2px', wordSpacing:'5px'}}><i className="fas fa-home"></i> Home</MDBNavLink>                          
                            </MDBNavItem>
                            <MDBNavItem>
                                    <MDBNavLink href='/promo' style={{color:'white', fontSize:'18px',wordSpacing:'5px'}}><i class="fas fa-sign-in-alt"></i> Paket Usaha</MDBNavLink>                             
                            </MDBNavItem>
                         
                                <MDBDropdown>
                                <MDBDropdownToggle nav caret style={{color:'white', fontSize:'18px'}}>
                                    <MDBIcon icon="user" style={{color:'white', borderRadius:'50px',letterSpacing:'2px', wordSpacing:'5px' }}/> &nbsp;
                                    {this.props.nama.username}
                                    </MDBDropdownToggle>
                                <MDBDropdownMenu right>
                                    <MDBDropdownItem>
                                        <MDBNavLink to='/login'>
                                            Login
                                        </MDBNavLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBNavLink to='/register'>
                                            Register
                                        </MDBNavLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem onClick={this.onBtnLogOut}>                                      
                                            Logout                                     
                                        </MDBDropdownItem>
                                </MDBDropdownMenu>
                                </MDBDropdown>
                                </>
                            :
                                <>
                            <MDBNavItem>
                                <MDBNavLink className='pr-3' to='/' style={{color:'white', fontSize:'18px'}}><i className="fas fa-home"></i> Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className='pr-3' to='/promo'  style={{color:'white', fontSize:'18px'}}>
                                   <i className="fas fa-tag"></i> Paket Usaha
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                    <MDBNavLink  className='pr-3' href='/' style={{color:'white', fontSize:'18px'}}>
                                        <i className="fas fa-sign-in-alt"></i> Coffe shop
                                    </MDBNavLink>                             
                            </MDBNavItem>
                            <MDBNavItem>
                               
                                    {/* <NavLink href='/' style={{color:'white', fontSize:'18px'}}> Options</NavLink> */}
                           
                            </MDBNavItem>
                            <MDBDropdown>
                                    <MDBDropdownToggle nav caret style={{color:'white'}}>
                                    <MDBIcon icon="user" style={{color:'white'}} className='justify-content-center pl-3'/>
                                    </MDBDropdownToggle>
                                <MDBDropdownMenu right>
                                    <MDBDropdownItem>
                                        <MDBNavLink to='/login'>
                                            Login
                                        </MDBNavLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBNavLink to='/register'>
                                            Register
                                        </MDBNavLink>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                                </MDBDropdown>
                                </>
                            }
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

const map = (state) => {
    return {nama: state.iniUser}
}

export default connect(map, {resetUser})(NavbarCom);