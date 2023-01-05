import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../../style/Navbar-home.css'

function NavbarHome() {
    const navigate = useNavigate()
    let token = localStorage.getItem("token");
    let name = localStorage.getItem("name")
    return (
        <>
            <div className={'row'}>
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{height: "4.5rem"}}>
                        <Link className="navbar-brand" to="/"><img
                            src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-w-design_460848-8606.jpg"
                            alt="logo" style={{width:'10rem',height:'-2rem'}}/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">Tìm việc làm<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/companies">Danh sách công ty <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                        {token ?
                            <>
                                <p className={'name-user'}>{name}</p>
                                <div>
                                    <button style={{left:'-3rem'}} className={'logout'} onClick={() => {
                                        localStorage.clear()
                                        navigate('/access-account')
                                    }}>Đăng xuất
                                    </button>
                                </div>
                            </>
                            :
                            <div>
                                <Link to={'/access-account'} className={'login'}>Đăng nhập</Link>
                            </div>
                        }
                    </nav>
                </div>
            </div>
        </>
    );
}

export default NavbarHome;