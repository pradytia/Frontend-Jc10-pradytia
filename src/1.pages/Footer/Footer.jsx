import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="brown" className="font-small pt-4 mt-4">
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
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> ngopiKuy </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;