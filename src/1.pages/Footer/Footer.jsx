import React from "react";
import './Footer.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 foot">

      <MDBContainer fluid className="text-center text-md-left">

        <MDBRow>
          <MDBCol md="12">
            <h4 className="title text-center">ngopiKuy  <i className="fas fa-mug-hot"></i></h4>
            <p className='text-center mt-3'>
                Daftarkan emailmu untuk ikut GIVEAWAY atau Informasi Promo dari ngopiKuy
            </p>
            
            <div className="row justify-content-center">
            <div className="col-3" style={{display:'inline-block'}}>
            <input className='text-center' type='text' placeholder='EMAIL ADDRESS' className='form-control' />
            </div>
            <div className="col-2">
            <input type='button' value='SUBSCRIBE' className=' btn-warning'/>
            </div>
            </div>
            
          </MDBCol>  
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3">

        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> ngopiKuy <i className="fas fa-mug-hot"></i> </a>
        </MDBContainer>
        
      </div>

      
    </MDBFooter>
  );
}

export default FooterPage;