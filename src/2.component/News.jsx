import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div className='container mt-5' style={{maxWidth:'100%'}}>
                <h3 style={{fontFamily:'Apple Chancery, Comic Sans MS, Lucida Handwriting', 
                fontWeight:'bold', fontSize:'35px', fontStyle:'italic', color:'orange'}}>MENU</h3>
                <div className="row" style={{backgroundColor:'orange'}}>
                    <div className="col-md-7">
                        <img className='d-block w-100 mt-4' alt='image'
                         src='https://images6.alphacoders.com/350/350478.jpg'
                        style={{paddingRight:'20%',paddingLeft:'5%' ,paddingTop:'15%', paddingBottom:'10%', 
                        border:'1px solid brown', padding:'5px', borderRadius:'4px'}}/>
                    </div>
                    <div className="col-5">
                        <h1 className='text-center mt-5 pt-5'>COFFEE</h1>
                        <p className='pt-3' style={{fontStyle:'italic'}}>The Dutch unwittingly gave coffee a nickname in the late 17th century, when they began the successful European coffee plantation on their island.
                           Top-grade Arabicas are still produced in Java as well as in Sumatera, Sulawesi and Flores.
                           Though the Indonesian archipelago is most notable as the world’s largest producer of Robusta beans.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;