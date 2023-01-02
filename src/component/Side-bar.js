import '../style/Side-bar.css'
import {useLocation, useNavigate, } from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editJob, searchJob} from "../service/Job-service";

export default function SideBar() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const [query, setQuery] = useState('/search?');
    let handleSearch = (e) => {
        const checked = e.target.checked;
        const checkedValue = e.target.value;
        const checkedName = e.target.name;
        if (checked) {
            let newQuery = `${query}${checkedName}=${checkedValue}&`
            setQuery(newQuery)
            navigate(newQuery.substring(0, newQuery.length - 1))
            console.log(newQuery.substring(0, newQuery.length - 1), 'new')
            dispatch(searchJob(newQuery.substring(0, newQuery.length - 1)))
        } else {
            let str = `${checkedName}=${checkedValue}&`
            let newQuery = query.replace(str, '')
            setQuery(newQuery)
            navigate(newQuery.substring(0, newQuery.length - 1))
            dispatch(searchJob(newQuery.substring(0, newQuery.length - 1)))
            if (!newQuery.includes('&')) {
                navigate('/')
            }
        }
    };
    return (
        <>
            <div className="container-sideBar">
                <div className="row" style={{padding: '12px'}}>
                    <div className="col-12">
                        <p>Lọc tìm kiếm của bạn</p>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 type-job">
                        <p style={{marginLeft: "14px", fontSize: "14px"}}>Loại công việc</p>
                        <input type={"checkbox"} name="categoryId" value={'1'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label for="vehicle1">Ngành Công nghệ Thông tin.</label>
                        <br/>
                        <input type={"checkbox"} name="categoryId" value={'2'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1">Ngành Khoa học Máy tính.</label>
                        <br/>
                        <input type={"checkbox"} name="categoryId" value={'3'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1">Ngành Kỹ thuật Phần mềm.</label>
                        <br/>
                        <input type={"checkbox"} name="categoryId" value={'4'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1">Ngành Kỹ thuật Máy tính.</label>
                        <br/>
                        <input type={"checkbox"} name="categoryId" value={'4'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1">Ngành An toàn Thông tin.</label>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    )
}