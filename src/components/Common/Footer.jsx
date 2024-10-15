import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    render() {

        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-5 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}>
                                                <img src={require('./../../images/designlog.png')} alt="Inteshape" />
                                            </NavLink>
                                        </div>
                                        <p>This is a basic React and tailwind project to showcase my frontend skills.</p>
                                        <ul className="social-icons  sx-social-links">
                                            <li><a href="https://www.behance.net/" className="fa fa-behance" target="_blank"></a></li>
                                            <li><a href="https://www.facebook.com" className="fa fa-facebook" target="_blank"></a></li>
                                            <li><a href="https://twitter.com" className="fa fa-twitter" target="_blank"></a></li>
                                            <li><a href="https://www.instagram.com" className="fa fa-instagram" target="_blank"></a></li>
                                        </ul>
                                    </div>
                                </div>
                               
                                {/* USEFUL LINKS */}
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Useful links</h5>
                                        <ul>
                                            <li><NavLink to={"/about-1"}>About</NavLink></li>
                                            <li><NavLink to={"/work"}>Work</NavLink></li>
                                            <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* CONTACT US */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h5 className="widget-title">Contact Us</h5>
                                        <ul className="widget_address">
                                            <li>Ahmedabad, Gujarat, India</li>
                                            <li>utsavdodiya.svmr@gmail.com</li>
                                            <li>(+91) 9998-317-523 </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="call-to-action-wrap">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6">
                                        
                                    </div>
                                    <div className="col-lg-5 col-md-6">
                                        <div className="call-to-action-right">
                                            <div className="widget_newsletter">
                                                <div className="newsletter-bx">
                                                    <form role="search" method="post" action="#">
                                                        <div className="input-group">
                                                            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                            <span className="input-group-btn">
                                                                <button type="button" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                            </span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="sx-footer-bot-left">
                                    <span className="copyrights-text">© Developed by Utsav Dodiya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        );
    };
};

export default Footer;