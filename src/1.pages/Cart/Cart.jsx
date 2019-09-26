import React, { Component } from 'react';
import Axios from 'axios';
import {urlApi} from '../../3.helpers/database'
import {connect} from 'react-redux'

class Cart extends Component {

    state = {
        cartData : []
    }

    
    getDataCart = (id) =>{
        Axios.get(urlApi + 'cart?userId=' + id)
        .then(res=>{
            this.setState({cartData : res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    // userId       : this.props.id,
    // productId    : this.state.product.id,
    // productName  : this.state.product.nama,
    // price        : this.state.product.harga,
    // quantity     : parseInt(this.state.qtyinput),
    // discount     : this.state.product.discount,
    // img          : this.state.product.img

    renderCart = () =>{
        var jsx = this.state.cartData.map(val=>{
            return(
                <tr>
                    <td>{val.productName}</td>
                    <td>{val.price}</td>
                    <td>{val.quantity}</td>
                    <td>{(val.price-(val.price * (val.discount/100))) * val.quantity}</td>
                    <td>edit</td>
                    <td><input type='button' className='btn btn-danger' value='Delete'/></td>
                </tr>
            )
        })
        return jsx
    }

    render() {
        return (
            <div className='container'>   
                <table className='table table-dark text-white mt-3 text-center '>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        id : state.iniUser.id
    }
}

export default connect(mapStateToProps)(Cart);