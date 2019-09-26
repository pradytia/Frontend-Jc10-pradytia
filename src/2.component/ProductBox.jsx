import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

//card-col -> img -> cardbody (text & price) --> footer(btn)

const ProductBox = (props) => {
    return (
        <div className='card col-md-3 m-3 mt-5' >
            <Link to={'/product-details/' + props.id}>
            <img src={props.img} height='200px' className='card-img top img' alt='Card'/>
            </Link>
            <div className='discount'>{props.discount}%</div>

            <div className="card-body">
                <h4 className="card-text text-center">{props.nama}</h4>
                <p className='card-text text-center'>Rp. {props.harga}</p>
                <div className='text-center'>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span> &nbsp;
                <span style={{fontSize:'12px'}}>{props.ul}</span>                   
                </div>
            </div>
            <div className="card-footer">
                 <Link to={'/product-details/' + props.id}>
                     <center>
                        <h3 className="fas fa-shopping-cart" style={{color:'green'}}/>
                     </center>
                </Link>
            </div>
        </div>
        
    );
};

export default ProductBox;