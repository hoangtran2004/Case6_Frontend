import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import NavbarWork from "../component/Nav-bar/Navbar-work";

function RouterWork() {
    localStorage.setItem("tokenCompany", 'abc')
    let token = localStorage.getItem("tokenCompany")
    let navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/work/login')
        }
    }, [])
    return (
        <div>
            <NavbarWork></NavbarWork>
            <Outlet></Outlet>
        </div>
    )
}

export default RouterWork;