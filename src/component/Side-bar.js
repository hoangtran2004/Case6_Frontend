import '../style/Side-bar.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../service/Category-service";
export default function SideBar() {

    const dispatch = useDispatch()


    const category = useSelector(state =>{
        console.log(state)
      return state
    })


    useEffect(()=>{
        dispatch(getCategory())
    },[])

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
                    </div>
                </div>
            </div>

        </>
    )
}