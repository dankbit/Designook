import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const filters = [
    { label: "Bathroom", filter: ".col-one" },
    { label: "Decoration", filter: ".col-two" },
    { label: "Kitchen", filter: ".col-three" },
    { label: "Living room", filter: ".col-four" }
];

const projects = [
    {
        image: require('./../../images/projects/portrait/bathroom_one.jpg'),
        title: 'Bathroom Decor',
        address: 'Muscat, Sultanate of Oman',
        filter: 'col-one'
    },
    {
        image: require('./../../images/projects/portrait/bathroom_two.jpg'),
        title: 'Bathroom Decor',
        address: 'Vancouver, Canada',
        filter: 'col-one'
    },
    {
        image: require('./../../images/projects/portrait/decor_one.jpg'),
        title: 'Home Decor',
        address: 'Bay Bridge, San Francisco',
        filter: 'col-two'
    },
    {
        image: require('./../../images/projects/portrait/decor_twoo.jpg'),
        title: 'Home Decor',
        address: 'Washington, USA',
        filter: 'col-two'
    },
    {
        image: require('./../../images/projects/portrait/kitchen_one.jpg'),
        title: 'Kitchen Core',
        address: 'Dubai, UAE',
        filter: 'col-three'
    },
    {
        image: require('./../../images/projects/portrait/kitchen_two.jpg'),
        title: 'Kitchen Core',
        address: 'Toronto, Canada',
        filter: 'col-three'
    },
    {
        image: require('./../../images/projects/portrait/living_one.jpg'),
        title: 'Living Room',
        address: 'California, USA',
        filter: 'col-four'
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Projects1 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };
    render() {
        const options = {
            loop:false,
            autoplay:false,
            margin:30,
            nav:true,
            dots: false,
            navText: ['Prev', 'Next'],
            responsive:{
                0:{
                    items:1,
                },
                540:{
                    items:2,
                },
                768:{
                    items:3,
                },			
                991:{
                    items:3
                },
                1136:{
                    items:4
                },					
                1366:{
                    items:5
                }	
                }
        };
        return (
            <>
                <div className="section-full mobile-page-padding  p-t80 p-b50 bg-white">
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">All Projects</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                        </div>
                        <div className=" filter-carousal-1-outer relative z-index1">
                            <div className="container">
                                {/* TITLE START */}
                                <div className="text-center clearfix filter-pos-right shadow m-b30">
                                    <ul className="btn-filter-wrap">
                                        <li className="btn-filter btn-active" data-filter="*">All</li>
                                        {filters.map((item, index) => (
                                            <li key={index} className="btn-filter" data-filter={item.filter}>{item.label}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="filter-carousal-1  container-fluid p-b30">
                                {/* IMAGE CAROUSEL START */}
                                <div className="section-content ">
                                    <OwlCarousel className="owl-carousel owl-carousel-filter  owl-btn-bottom-center mfp-gallery navigation-with-name" {...options}>
                                        {projects.map((item, index) => (
                                            <div key={index} className={`${item.filter} item fadingcol overflow-hide`}>
                                                <div className="sx-box   image-hover-block">
                                                    <div className="sx-thum-bx">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="sx-info  p-t20 text-white">
                                                        <h4 className="sx-tilte">{item.title}</h4>
                                                        <p className="m-b0">{item.address}</p>
                                                    </div>
                                                    <a className="mfp-link" href={item.image}>
                                                        <i className="fa fa-arrows-alt" />
                                                    </a>
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

export default Projects1;