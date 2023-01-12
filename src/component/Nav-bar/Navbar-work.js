import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../../style/Work-navbar.css'
import {useDispatch} from "react-redux";

function NavbarWork(props) {
    const work = JSON.parse(localStorage.getItem('work'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formEditInfoCompany = ({id}) => {
        console.log(id)
        navigate('edit-company-information/' + id)
    };
    const [styleAdd, setStyleAdd] = useState({});
    const [styleEdit, setStyleEdit] = useState({});

    const checkClick = (e) => {
        if (e) {
            setStyleAdd({color: '#239baf', width: '100%', left: 0})
            setStyleEdit({})
        } else {
            setStyleEdit({color: '#239baf', width: '100%', left: 0})
            setStyleAdd({})
        }
    }
    const reset = () => {
        setStyleAdd({})
        setStyleEdit({})
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light work-navbar">
                <Link to={'/work'} onClick={reset}><img
                    src={'https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-w-design_460848-8606.jpg'}
                    alt={''} style={{width: '10rem', height: '-2rem'}}/></Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item add">
                            <Link to={'add-job'} className={'text-navbar'} style={styleAdd} onClick={() => {checkClick(true)}}> Thêm tin tuyển dụng</Link>
                        </li>
                        <li className="nav-item edit">
                            <div onClick={() => {
                                dispatch(formEditInfoCompany({id: work.company.companyId}))

                            }}>
                                <button style={styleEdit} onClick={() => {checkClick(false)}} id={'edit'}>Sửa thông tin doanh nghiệp</button>
                            </div>
                        </li>
                        <li className="nav-item logout">
                            <button onClick={() => {
                                localStorage.clear()
                                navigate('/access-account')
                            }} id={'out'}>Đăng xuất
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWork;
