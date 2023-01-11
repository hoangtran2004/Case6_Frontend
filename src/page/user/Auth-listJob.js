import AuthSearch from "./Auth-search";
import SideBar from "../../component/Sizebar/Side-bar";
import '../../style/Auth-home.css'
import {Outlet} from "react-router-dom";


export default function AuthListJob() {

    return (
        <>
            <div className="row container-listJob">
                <div className="col-3 left-div"><SideBar></SideBar></div>
                <div className="col-9 right-div" id={'s'}>
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