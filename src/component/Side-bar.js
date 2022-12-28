import '../style/Side-bar.css'
import {Link} from "react-router-dom";
export default function SideBar() {
    return(
        <>
            <div className="container-sideBar">
                <div className="row" style={{padding:'12px'}}>
                    <div className="col-12">
                        <p>Lọc tìm kiếm của bạn</p>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 type-job">
                        <p style={{marginLeft:"14px", fontSize:"14px"}}>Loại công việc</p>
                        <Link to={'#'}>job1</Link>
                        <br/>
                        <Link to={'#'}>job2</Link>
                        <br/>
                        <Link to={'#'}>job3</Link>
                        <br/>
                        <Link to={'#'}>job4</Link>
                    </div>
                </div>
            </div>

        </>
    )
}