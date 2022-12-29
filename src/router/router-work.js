import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

function RouterWork() {
    localStorage.setItem("tokenCompany", 'abc')
    let token = localStorage.getItem("tokenCompany")
    let navigate = useNavigate()
    useEffect(() => {
        console.log(token)
        if (!token) {
            navigate('/work/login')
        }
    }, [])
    return (
        <div>
            <h1>abv</h1>
            <Outlet></Outlet>
        </div>
    )
}

export default RouterWork;