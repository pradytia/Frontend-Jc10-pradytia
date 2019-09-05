import React, {Component} from 'react';
import './Card.css'
class Card extends Component {
    render() {
        return (

            <div className='container satu mt-5'>
                <div className="row">
                    <div className="col-4">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img className='pict'
                                src="https://cdn.shopify.com/s/files/1/2436/1155/products/IMG-20181127-134859-257_345x345@2x.jpg?v=1546579444"
                                alt="img"/>
                            <h3>Mini Kedai 1</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Paket Mini Kedai 1 terdiri dari : 1pcs Grinder Delonghi KG 89, 1pcs Bellman Cx25 ( Espresso Maker+ Steamer Susu),
                            1pcs Kettle Latina 540 (450ml),1pcs Scale / Timbangan With Timer....
                            </p>
                            <a >Read More</a>
                        </div>
                    </div>
                </div>

              </div>

                <div className="col-4">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img className='pict'
                                src="https://ecs7.tokopedia.net/img/cache/300/product-1/2018/12/16/1721178/1721178_bb660552-5dab-4428-8410-bf4c136f9927_1080_1080.jpg"
                                alt="img"/>
                            <h3 className='text-center'>Mini Kedai 2</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Paket Mini Kedai 2 terdiri dari : 1pcs Kompor Elektrik, 1pcs Kettle Leher Angsa Honai 900ml dengan Thermometer,
                            1pcs Grinder Model N600, 2pcs Vietnam Drip, 1pcs Timbangan Digital + Timer...
                            </p>
                            <a >Read More</a>
                        </div>
                    </div>
                </div>
                </div>

                    <div className="col-4">
                  <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img className='pict'
                                src="https://cdn.shopify.com/s/files/1/2436/1155/products/IMG_20180827_131048_345x345@2x.jpg?v=1535350370"
                                alt="img"/>
                            <h3>Mini Kedai 3</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Paket Mini Kedai 2 terdiri dari : 1pcs Kompor Elektrik, 1pcs Kettle Leher Angsa Honai 900ml dengan Thermometer,
                            1pcs Grinder Model N600, 2pcs Vietnam Drip......</p>
                            <a >Read More</a>
                        </div>
                    </div>
                </div>
                </div>

                </div>
            </div>
        );
    }
}

export default Card;