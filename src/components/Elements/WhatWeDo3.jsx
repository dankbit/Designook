import React from 'react';

const services = [
  {
    count: '01',
    title: 'Architecture',
    image: require('./../../images/services/service-projects/services_one.jpg'),
  },
  {
    count: '02',
    title: 'Planning',
    image: require('./../../images/services/service-projects/services_two.jpg'),
  },
  {
    count: '03',
    title: 'Exterior',
    image: require('./../../images/services/service-projects/exterior_five.jpg'),
  },
  {
    count: '04',
    title: 'Decoration',
    image: require('./../../images/services/service-projects/planning_two.jpg'),
  },
  {
    count: '05',
    title: 'Interior Planning',
    image: require('./../../images/services/service-projects/interior_two.jpg'),
  },
  {
    count: '06',
    title: 'Style Selection',
    image: require('./../../images/services/service-projects/style_two.jpg'),
  },
  {
    count: '07',
    title: 'Architecture',
    image: require('./../../images/services/service-projects/architecture_two.jpg'),
  },
  {
    count: '08',
    title: 'Planning',
    image: require('./../../images/services/service-projects/services_seven.jpg'),
  },
];

var bgimg1 = require('./../../images/background/cross-line2.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

class WhatWeDo3 extends React.Component {
  render() {
    return (
      <>
        <div
          className='section-full  mobile-page-padding bg-white  p-t80 p-b50 bg-repeat overflow-hide'
          style={{ backgroundImage: 'url(' + bgimg1 + ')' }}
        >
          <div className='container'>
            {/* TITLE START */}
            <div className='section-head'>
              <div className='sx-separator-outer separator-center'>
                <div
                  className='sx-separator bg-white bg-moving bg-repeat-x'
                  style={{ backgroundImage: 'url(' + bgimg2 + ')' }}
                >
                  <h3 className='sep-line-one'>What We Do</h3>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            <div className='section-content'>
              <div className='row number-block-three-outer justify-content-center'>
                {services.map((item, index) => (
                  <div
                    className='col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30'
                    key={index}
                  >
                    <div className='number-block-three slide-ani-top'>
                      <div className='sx-media'>
                        <img src={item.image} alt='' />
                      </div>
                      <div className='figcaption bg-gray  p-a30'>
                        <h4 className='m-tb0'>{item.title}</h4>
                        <div className='figcaption-number animate-top-content'>
                          <span>{item.count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WhatWeDo3;
