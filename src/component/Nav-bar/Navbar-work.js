import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import '../../style/Work-navbar.css'
import {useDispatch, useSelector} from "react-redux";
import {findImageByIdCompany, workById} from "../../service/Work-service";

function NavbarWork(props) {
    let item = JSON.parse(localStorage.getItem('work'));
    let idCompany = item.company.companyId;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formEditInfoCompany = ({id}) => {
        navigate('edit-company-information/' + id)
    };
    const [styleAdd, setStyleAdd] = useState({});
    const [styleEdit, setStyleEdit] = useState({});
    useEffect(() => {
        dispatch(workById(idCompany))
        dispatch(findImageByIdCompany(idCompany))
    }, [])
    const imageCompany = useSelector(state => {
        return state.work.workImage
    })
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
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light work-navbar">
                <Link to={'/work'} onClick={reset}><img
                    src={'https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-w-design_460848-8606.jpg'}
                    alt={''} style={{width: '10rem', height: '-2rem'}}/></Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item add">
                            <Link to={'add-job'} className={'text-navbar'} style={styleAdd} onClick={() => {
                                checkClick(true)
                            }}> Thêm tin tuyển dụng</Link>
                        </li>
                        <li className="nav-item logout">
                            <button onClick={() => {
                                localStorage.clear()
                                navigate('/access-account')
                            }} id={'out'}>Đăng xuất
                            </button>
                        </li>
                        <li className="nav-item li-avatar">
                            <img src={imageCompany} alt="" id={'avatar-work'} onClick={() => {
                                dispatch(formEditInfoCompany({id: idCompany}))
                            }}/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWork;
