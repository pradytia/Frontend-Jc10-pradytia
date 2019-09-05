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
              src="https://i.pinimg.com/originals/09/52/e9/0952e9d8c44d9e1fcc1e9b6da06ca49c.jpg"
              alt="First slide"
            />
            <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Spesialis Alat Kopi dan Paket Usaha Kopi</h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://www.coffindo.id/images/news/ingin-membuat-kopi-espresso-begini-caranya-quj2O6iRw9.jpeg"
              alt="Second slide"
            />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Espresso Machine</h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/v1475191849/hkgetdsbsmtsika58hwv.jpg"
              alt="Third slide"
            />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">French Press Coffee</h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    <div className="container mt-5 holiday" style={{fontFamily:'ChunkFiveRegular', fontWeight:'bolder', color:'brown'}}>
        <h3>COFFEE SHOP</h3>
    </div>
        </div>
    );
};

export default Carousel;