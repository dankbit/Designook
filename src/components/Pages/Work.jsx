import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from '../Common/Header4';
import Footer from '../Common/Footer';
import Banner from '../Elements/Banner';

const filters = [
    { label: "Architecture", filter: ".cat-1" },
    { label: "Decor", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Residential", filter: ".cat-5" }
];

const projects = [
    {
        image: require('./../../images/projects/portrait/work_one.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/portrait/work_two.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/work_three.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/portrait/work_four.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/projects/portrait/work_five.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/projects/portrait/work_six.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/projects/portrait/work_seven.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/portrait/work_eight.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/work_nine.jpg'),
        title: 'Interior Designer Website',
        address: 'India',
        filter: 'cat-1'
    }
]

var bnrimg = require('./../../images/banner/workpagebanner.jpg');
var bgimg1 = require('./../../images/background/cross-line.png');

class Work extends React.Component {
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
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Our Work" pagename="Work" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            {/* Filter Nav START */}
                            <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation masonry-filter clearfix">
                                    <li className="active"><NavLink to={"#"} className="btn from-top" data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><NavLink to={"#"} className="btn from-top" data-filter={item.filter} >{item.label}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                            {/* Filter Nav END */}
                            {/* GALLERY CONTENT START */}
                            <ul className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30`}>
                                        <div className="sx-box image-hover-block">
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
                            </ul>
                            {/* GALLERY CONTENT END */}
                            <div className="text-center load-more-btn-outer" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                <button className="site-button-secondry btn-half"><span>Read More</span></button>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Work;