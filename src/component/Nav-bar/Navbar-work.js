import React from 'react';
import {Link} from "react-router-dom";
import '../../style/Work-navbar.css'
function NavbarWork(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light work-navbar">
               <Link to={'#'}><img src={'https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png'} alt={''}/></Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item ">
                            <Link to={'#'} className="add"> Thêm tin tuyển dụng</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'#'} className="edit">Sửa thông tin doanh nghiệp</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'#'} className="logout">Đăng xuất</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWork;
