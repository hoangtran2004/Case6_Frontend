import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../../style/Work-navbar.css'
import {useDispatch} from "react-redux";
function NavbarWork(props) {
    const work = JSON.parse(localStorage.getItem('work'));
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const formEditInfoCompany = ({id}) => {
        navigate('edit-company-information/' + id)
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light work-navbar">
               <Link to={'/work'}><img src={'https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png'} alt={''}/></Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item ">
                            <Link to={'add-job'} className="add"> Thêm tin tuyển dụng</Link>
                        </li>
                        <li className="nav-item ">
                            <div onClick={() => {
                                dispatch(formEditInfoCompany({id: work.company.companyId}))

                            }} style={{cursor:'pointer'}}>Sửa thông tin doanh nghiệp
                            </div>
                        </li>
                        <li className="nav-item">
                            <button className={'logout'} onClick={() => {
                                localStorage.clear()
                                navigate('/access-account')
                            }}>Đăng xuất
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWork;
