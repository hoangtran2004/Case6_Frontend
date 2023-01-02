import AuthSearch from "./Auth-search";
import SideBar from "../../component/Side-bar";
import '../../style/Auth-home.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getJob} from "../../service/Job-service";
import {Outlet} from "react-router-dom";

export default function AuthListJob() {
    const dispatch = useDispatch();
    useSelector(state => {
        return state.job.job
    })
    useEffect(() => {
        dispatch(getJob())
    }, [])
    return (
        <>
            <AuthSearch></AuthSearch>
            <div className="row container-listJob">
                <div className="col-12">
                    <div className="col-3 sideBar">
                        <div>
                            <SideBar></SideBar>
                        </div>
                    </div>
                    <div className="col-9 main">
                        <div className="row">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}