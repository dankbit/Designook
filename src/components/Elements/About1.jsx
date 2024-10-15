import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/about-slider/one1.jpg'),
    require('./../../images/about-slider/two2.jpg'),
    require('./../../images/about-slider/three.jpg'),
    require('./../../images/about-slider/four.jpg'),
]

var bgimg1 = require('./../../images/background/bg-4.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

class About1 extends React.Component {

    render() {
        const options = {
            loop: true,
            autoplay: true,
            margin: 30,
            nav: true,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b80 bg-white bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 className="sep-line-one">About us</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="about-home-left">
                                        <h3 className="m-t0 sx-tilte">We are Competitive in Architecture Solutions</h3>
                                        <p>Landscape Design is a process of Developing Practical and Pleasing Outdoor living space. There are six principles of Design that have been used by Artists for centuries throughout all Art Forms, Painting and Floral Design.</p>
                                        <div className="text-left">
                                            <NavLink to="/" className="site-button-secondry btn-half"><span>Read More</span></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <div className="about-home-right">
                                        <OwlCarousel className="owl-carousel about-home number-slider owl-btn-vertical-center" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="sx-img-effect zoom-slow">
                                                    <img src={item} alt="" />
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                        <div className="about-home-before">
                                            <img src={require('./../../images/about-slider/aboutslider(1).jpeg')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About1;