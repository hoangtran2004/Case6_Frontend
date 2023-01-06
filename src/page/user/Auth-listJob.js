import AuthSearch from "./Auth-search";
import SideBar from "../../component/Side-bar";
import '../../style/Auth-home.css'
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getJob} from "../../service/Job-service";

export default function AuthListJob() {

    return (
        <>
            <div className="row container-listJob">
                <div className="col-3"><SideBar></SideBar></div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-12">
                            <AuthSearch></AuthSearch>
                        </div>
                        <div className="col-12">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}