import React, { Component } from 'react';

class New2 extends Component {
    render() {
        return (
            <div>
                 <div className='container mt-5' style={{maxWidth:'100%', backgroundColor:'darkorange'}}>
                <h3 style={{fontFamily:'Apple Chancery, Comic Sans MS, Lucida Handwriting', 
                fontWeight:'bold', fontSize:'35px', fontStyle:'italic', color:'orange'}}></h3>
                <div className="row">
                    <div className="col-5">
                        <h1 className='text-center mt-5 pt-5'>Holiday Blend<br/>Sneak Peek</h1>
                        <p className='pt-3 mt-5' style={{fontStyle:'italic'}}>Be the first to try Holiday Blend, a celebratory culmination of a <br/>year of spectacular coffee.
                        This year's cup is spirited blend,<br/> stout and spicy with fruited notes.</p>
                    </div>
                    <div className="col-md-7">
                        <img className='d-block w-100 mt-4' alt='image'
                         src='https://d3mrtwiv4dr09z.cloudfront.net/media/wysiwyg/ecommerce/coffee/promo/19HD-09-September-Coffee-Holiday-Blend-Preview-Split-Screen-720x720.jpg'
                        style={{paddingTop:'15%', paddingBottom:'10%', 
                        border:'1px solid #ddd', padding:'5px', borderRadius:'4px'}}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default New2;