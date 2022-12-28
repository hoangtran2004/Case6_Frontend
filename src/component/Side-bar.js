import '../style/Side-bar.css'
import {Link} from "react-router-dom";
export default function SideBar() {
    return(
        <>
            <div className="container-sideBar">
                <div className="row">
                    <div className="col-12">
                        <h4>Lọc tìm kiếm của bạn</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5>Loại công việc</h5>
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