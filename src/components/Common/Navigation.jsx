import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

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

        loadScript('./assets/js/mobilenav.js');

    };

    render() {
        return (
            <>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <NavLink to={"/"}>HOME</NavLink>
                        
                    </li>
                    <li><NavLink to={"/about"}>ABOUT</NavLink>
                       
                    </li>
                 
                    <li>
                        <NavLink to={"/work"}>WORK</NavLink>
                       
                    </li>
                    <li><NavLink to={"/contact-us"}>CONTACT US</NavLink></li>
                </ul>
            </>
        );
    };
};

export default Navigation;