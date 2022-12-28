import AuthSearch from "./Auth-search";
import SideBar from "../../component/Side-bar";
import '../../style/Auth-home.css'
export default function AuthListJob() {
    return(
        <>
        <AuthSearch></AuthSearch>
            <div className="container-listJob">
                <div className="row">
                    <div className="col-3">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-4">
                        <div className="list-job">
                            <h2>List job</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}