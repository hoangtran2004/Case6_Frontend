import React from 'react';
import {Link} from "react-router-dom";
import '../../style/Navbar-home.css'
function NavbarHome() {

    return (
            <div className={'row'}>
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                        <a className="navbar-brand" href="Case6_Frontend/src/component/Nav-bar/Navbar-home#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="Case6_Frontend/src/component/Nav-bar/Navbar-home#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Case6_Frontend/src/component/Nav-bar/Navbar-home#">Link</a>
                                </li>
                                <Link to={'/access-account'} className={'login'}><span>Đăng Nhập</span></Link>
                            </ul>

                        </div>
                    </nav>
                </div>
        </div>


    );
}

export default NavbarHome;