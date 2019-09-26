import React, { Component } from 'react';
import Axios from 'axios';
import {urlApi} from '../../3.helpers/database'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class ProductDetails extends Component {

    state = {
        productDetail : [],
        qtyInput      : 1,
        editMode      : false

    }


    componentDidMount(){
        this.getProductDetails()
    }

    getProductDetails = () =>{
        Axios.get(urlApi + 'products/' + this.props.match.params.id)
        .then(res=>{
            this.setState({productDetail : res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }


    addToCart = () =>{
        
    }


    render() {
       var {id, nama, harga, discount, img, deskripsi} = this.state.productDetail
        return (
            <div className='container mt-3 pt-3'>
                <div className="row">
                    <div className="col-md-4 pr-5 pt-2">
                        <div className="card" style={{width:'120%'}}>
                                <img className="card-img-top" src={img} alt='card' />
                        </div>
                    </div>
                    <div className="col-md-8 pl-5">
                        <h1  style={{fontWeight:'700', color:'#606060', fontSize:'30px', paddingTop:'1%'}}>
                        {nama}</h1>
                        <div style={{backgroundColor : 'red',
                                     width           : '50px',
                                     height          : '22px',
                                     color           : 'white',
                                     textAlign       : 'center',
                                     display         : 'inline-block',
                                     marginTop       : '10px'
                                    }}>{discount}%</div>
                        <span style={{color:"#606060",
                                      marginLeft : '15px',
                                      textDecoration : 'line-through',
                                      fontSize  : '14px', 
                                      fontWeight : '600' }}>Rp. {harga}</span>
                        <div style={{color: 'darkorange',
                                     fontSize:'25px', 
                                     fontWeight: '700', 
                                     marginTop:'20px'}}>Rp. {harga - (harga * (discount/100))}</div>

                        <div className="row">
                            <div className="col-2">
                                <div style={{fontWeight:'700', marginTop:'15px', color:'#606060', fontSize:'15px'}}>Jumlah</div>
                                <input type='number' className='form-control' value={this.state.qtyInput} style={{marginTop:'10px', width:'60px'}}/>
                            </div>
                            <div className="col-6">
                            <div style={{fontWeight:'700', marginTop:'15px', color:'#606060', fontSize:'15px'}}>Catatan Untuk Penjual (Opsional)</div>
                                <input type='text' className='form-control' style={{marginTop:'10px'}} placeholder='Contoh: Warna Putih, Ukuran XL '/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-8">
                                <p style={{color:'#606060', fontStyle:'italic'}}>{deskripsi}</p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                {
                                    this.state.username
                                    ?
                                    <input type='button'value='Tambah Keranjang' className=' btn-success'/>
                                    :
                              <Link to='/login' style={{textDecoration:'none'}} >
                                <input type='button'value='Tambah Keranjang' className='btn btn-success'/>
                              </Link>
                                }
                            </div>
                        </div>
                        {
                            this.state.editMode
                            ?
                        
                        <Modal isOpen={this.state.editMode}>
                            <ModalHeader toggle={()=>this.setState({editMode : false})}>

                            </ModalHeader>
                            <ModalBody>
                                <div className="row">
                                    <div className="col-3">

                                    </div>
                                    <div className="col-6">

                                    </div>
                                    <div className="col-3">

                                    </div>
                                </div>
                            </ModalBody>
                        </Modal>
                        :null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        username : state.iniUser.username,
        id       : state.iniUser.id
    }
}

export default connect(mapStateToProps) (ProductDetails);