import React from 'react';
import CountUp from 'react-countup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/My Profile.jpg'),
        reviewername: 'Utsav Dodiya',
        position: 'Architect',
        review: '“Exceptional creativity and attention to detail! The team transformed our space into something truly breathtaking, far beyond what we imagined.”'
    },
    {
        image: require('./../../images/testimonials/My Profile.jpg'),
        reviewername: 'Utsav Dodiya',
        position: 'Architect',
        review: '"Their ability to blend functionality with stunning design is remarkable. We could not be happier with the results of our home renovation."'
    },
    {
        image: require('./../../images/testimonials/My Profile.jpg'),
        reviewername: 'Utsav Dodiya',
        position: 'Interior designer',
        review: '"Professional, reliable, and full of great ideas. They took the time to understand our vision and delivered a design that exceeded our expectations."'
    },
    
]

var bgimg1 = require('./../../images/infographic.jpg');
var bgimg2 = require('./../../images/background/bg-5.png');
var bgimg3 = require('./../../images/background/cross-line2.png');
var bgimg4 = require('./../../images/background/bg-12.jpg');

class Testimonials1 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            nav: false,
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
                <div className="section-full container-fluid">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 bg-gray bg-cover bg-no-repeat" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                <div className="sx-left-part mobile-page-padding">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="sx-separator-outer separator-left">
                                            <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                                <h3 className="sep-line-one">Infographic</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    <div className="counter-blocks">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <div className="sx-count  text-black sx-icon-box-wraper bg-repeat  bg-white p-a30" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                                    <h2 className="st-count-number sx-text-primary text-left"><span className="counter"><CountUp end={24} duration={5} /></span></h2>
                                                    <h4 className="m-tb0">Years of Experience</h4>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <div className="sx-count text-black sx-icon-box-wraper bg-repeat  bg-white p-a30" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                                    <h2 className="st-count-number sx-text-primary text-left"><span className="counter"><CountUp end={340} duration={5} /></span></h2>
                                                    <h4 className="m-tb0">Project Taken</h4>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <div className="sx-count text-black sx-icon-box-wraper bg-repeat  bg-white p-a30" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                                    <h2 className="st-count-number sx-text-primary text-left"><span className="counter"><CountUp end={86} duration={5} /></span></h2>
                                                    <h4 className="m-tb0">Awards Won</h4>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <div className="sx-count text-black sx-icon-box-wraper bg-repeat  bg-white p-a30" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                                    <h2 className="st-count-number sx-text-primary text-left"><span className="counter"><CountUp end={36} duration={5} /></span><span>K</span></h2>
                                                    <h4 className="m-tb0">Twitter Followers</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 bg-white bg-repeat" style={{ backgroundImage: 'url(' + bgimg4 + ')' }}>
                                <div className="sx-right-part mobile-page-padding  p-t80 p-b50">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="sx-separator-outer separator-left">
                                            <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                                <h3 className="sep-line-one">Testimonial</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    {/* TESTIMONIAL START */}
                                    <OwlCarousel className="owl-carousel testimonial-home number-slider" {...options}>
                                        {testimonials.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="testimonial-2  hover-animation-1">
                                                    <div className="testimonial-detail clearfix">
                                                        <div className="testimonial-pic shadow scale-in-center"><img src={item.image} alt="" width={100} height={100} /></div>
                                                        <h4 className="testimonial-name">{item.reviewername}</h4>
                                                        <span className="testimonial-position">{item.position}</span>
                                                        <span className="fa fa-quote-right" />
                                                    </div>
                                                    <div className="testimonial-text bg-white  shadow-sm">
                                                        <p>{item.review}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}

                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials1;