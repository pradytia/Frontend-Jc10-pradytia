import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Home.css';
import Axios from 'axios';
import {urlApi} from '../../3.helpers/database'
import ProductBox from '../../2.component/ProductBox';
import Carousel from '../../2.component/Carousel';
import Card from '../../2.component/Card';
import FooterPage from '../Footer/Footer';
import News from '../../2.component/News';
import New2 from '../../2.component/New2';


class Home extends Component {

    state = {
        tampungProduk : []
    }

    componentDidMount(){
        this.getDataProduk()
    }

    getDataProduk = () =>{
        Axios.get(urlApi + 'products')
        .then(res=>{
        console.log(res)
        this.setState({tampungProduk : res.data})
        })
        .catch(err=>{
        console.log(err)
        })
    }

    renderData = () =>{
        var jsx =  this.state.tampungProduk.map(val=>{
            return(
                <ProductBox nama={val.nama} harga={val.harga} discount={val.discount} img={val.img} id={val.id} ul={val.ulasan}/>
            )
        })
        return jsx
    }

    render() {

        return (

            <div> 
                <Carousel/>         
                <div className="container mt-5 holiday" style={{fontFamily:'Apple Chancery, Comic Sans MS, Lucida Handwriting', fontWeight:'bold', color:'orange'}}>
                     <h3>COFFE SHOP</h3>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                    {this.renderData()}
                    </div> 
                </div>
                <News/>
                <div className="container mt-5 holiday" style={{fontFamily:'Apple Chancery, Comic Sans MS, Lucida Handwriting', fontWeight:'bold', color:'orange'}}>
                    <h3>PAKET USAHA</h3>
                </div>
                <Card/><br/><br/>
                <New2/>
                <br/><br/>
                <FooterPage/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {namaUSer: state.iniUser}
}

export default connect(mapStateToProps)(Home);