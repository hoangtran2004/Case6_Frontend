import React from 'react';
import {Link} from "react-router-dom";
import '../../style/Navbar-home.css'
function NavbarHome() {

    return (
            <div className={'row'} >
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light sticky-top" >
                        <Link className="navbar-brand" to="/"><img src="https://image.winudf.com/v2/image1/Y29tLmxvZ28uYW5pbWFsX3NjcmVlbl84XzE1NjIxNTA1MzFfMDM2/screen-8.jpg?fakeurl=1&type=.webp" alt="logo"/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">Tìm việc làm<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">Danh sách công ty <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to={'/access-account'} className={'login'} style={{marginRight:'120px'}}><span>Đăng Nhập</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to={'#'} className={'login'}><span>Đăng xuất</span></Link>
                                </li>

                            </ul>

                        </div>
                    </nav>
                </div>
        </div>


    );
}

export default NavbarHome;