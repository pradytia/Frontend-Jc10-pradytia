import React from 'react';
import './App.css';
import {withRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './1.pages/Home/Home';
import Login from './1.pages/Login/Login';
import Promo from './1.pages/Promo/Promo';
import Register from './1.pages/Register/Register';
import Footer from './1.pages/Footer/Footer';
import NavbarCom from './1.pages/Navbar/Navbar';
import ProductDetails from './1.pages/ProductDetails/ProductDetails';
import Cart from './1.pages/Cart/Cart';
import AdminDashboard from './1.pages/Admin/AdminDashboard';
import Auth from './1.pages/Auth/Auth';






// import Icon from '@material-ui/core/Icon'

function App() {
  return (
     <div>
        <NavbarCom/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/cart' component={Cart} exact/>
          <Route path='/admin/dashboard' component={AdminDashboard} exact/>
          <Route path='/promo' component={Promo} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/product-details/:id' component={ProductDetails} exact/>

        </Switch>
        {/* <Footer/> */}
    </div>
  );
}

export default withRouter(App);
