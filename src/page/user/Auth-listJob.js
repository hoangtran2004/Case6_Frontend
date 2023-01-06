import AuthSearch from "./Auth-search";
import SideBar from "../../component/Side-bar";
import '../../style/Auth-home.css'
import {Outlet} from "react-router-dom";


export default function AuthListJob() {

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

                            <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </>
    )
}