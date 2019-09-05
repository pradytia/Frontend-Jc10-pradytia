import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class NavbarCom extends Component {

    state = {
        navbarOpen : false
    }
    render() {
        return (
            <div>
                <MDBNavbar  expand='lg' className='navbar-color navbar'>
                    <MDBNavLink to='/'>
                    <MDBNavbarBrand href='/' className='pt-2 '>
                        <h5 className='judul'>ngopiKuy <i className="fas fa-mug-hot"></i>
                        </h5>
                       </MDBNavbarBrand>
                    </MDBNavLink>
                    <MDBNavbarToggler onClick={()=>this.setState({navbarOpen : !this.state.navbarOpen})}/>
                    <MDBCollapse navbar>
                        <MDBNavbarNav right>
                            {
                                this.props.nama.username && this.props.nama.role
                                ?
                                <>
                            <MDBNavItem>                             
                              <MDBNavLink to='/' style={{color:'white', fontSize:'18px'}}><i className="fas fa-home"></i> Home</MDBNavLink>                          
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink style={{color:'white', fontSize:'18px'}}>{this.props.nama.username}</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                             <MDBNavLink style={{color:'white', fontSize:'18px'}}>{this.props.nama.role}</MDBNavLink>                               
                            </MDBNavItem>
                            <MDBNavItem>
                                    <MDBNavLink href='/' style={{color:'white', fontSize:'18px'}}><i class="fas fa-sign-in-alt"></i></MDBNavLink>                             
                            </MDBNavItem>
                         
                                <MDBDropdown>
                                <MDBDropdownToggle nav caret style={{color:'white'}}>
                                    <MDBIcon icon="user" style={{color:'white'}}/>
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
                                    <MDBDropdownItem>
                                        <MDBNavLink>
                                            Logout
                                        </MDBNavLink>
                                        </MDBDropdownItem>
                                </MDBDropdownMenu>
                                </MDBDropdown>
                                </>
                            :
                                <>
                            <MDBNavItem>
                                <MDBNavLink to='/' style={{color:'white', fontSize:'18px'}}><i className="fas fa-home"></i> Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to='/promo'  style={{color:'white', fontSize:'18px'}}>
                                   <i className="fas fa-tag"></i> Paket Usaha
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                    <MDBNavLink href='/' style={{color:'white', fontSize:'18px'}}>
                                        <i className="fas fa-sign-in-alt"></i> Coffe shop
                                    </MDBNavLink>                             
                            </MDBNavItem>
                            <MDBNavItem>
                               
                                    {/* <NavLink href='/' style={{color:'white', fontSize:'18px'}}> Options</NavLink> */}
                           
                            </MDBNavItem>
                            <MDBDropdown>
                                    <MDBDropdownToggle nav caret style={{color:'white'}}>
                                    <MDBIcon icon="user" style={{color:'white'}}/>
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

export default connect(map)(NavbarCom);