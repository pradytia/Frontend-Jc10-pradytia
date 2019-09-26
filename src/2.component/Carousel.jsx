import React from 'react';
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask
} from
"mdbreact";


const Carousel = () => {
    return (
        <div>
           
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1 atur">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://s-ecom.ottenstatic.com/original/5d729271020f6199149299.jpg"
              alt="First slide"
            />
            <MDBMask overlay="light" />
          </MDBView>
          <MDBCarouselCaption>
            {/* <h3 className="h3-responsive">Spesialis Alat Kopi dan Paket Usaha Kopi</h3> */}
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://s-ecom.ottenstatic.com/original/5d733764b3760407656300.jpg"
              alt="Second slide"
            />
          </MDBView>
          <MDBCarouselCaption>
            {/* <h3 className="h3-responsive">Espresso Machine</h3> */}
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://s-ecom.ottenstatic.com/original/5d75c4df7e7f6676191280.jpg"
              alt="Third slide"
            />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"></h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    
        </div>
    );
};

export default Carousel;