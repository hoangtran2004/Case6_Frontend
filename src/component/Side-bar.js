import '../style/Side-bar.css'
import {useLocation, useNavigate,} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editJob, getJob, searchJob} from "../service/Job-service";

export default function SideBar() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let search = useLocation().search
    const [query, setQuery] = useState('/search?');
    let handleSearch = (e) => {
        const checked = e.target.checked;
        const checkedValue = e.target.value;
        const checkedName = e.target.name;
        if (checked) {
            if (search === '') {
                let newQuery = `/search?${checkedName}=${checkedValue}&`
                navigate(newQuery.substring(0, newQuery.length - 1))
                console.log(newQuery.substring(0, newQuery.length - 1))
                dispatch(searchJob(newQuery.substring(0, newQuery.length - 1)))
            } else {
                let newQuery = `/search${search}`
                if (newQuery.includes(`${checkedName}=${checkedValue}`)) {
                    navigate(newQuery)
                    dispatch(searchJob(newQuery))
                } else {
                    newQuery += `&${checkedName}=${checkedValue}&`
                    setQuery(newQuery)
                    navigate(newQuery.substring(0, newQuery.length - 1))
                    dispatch(searchJob(newQuery.substring(0, newQuery.length - 1)))
                }
            }
        } else {
            let str = `${checkedName}=${checkedValue}&`
            let newQuery = query.replace(str, '')
            newQuery = newQuery.replace(str, '')
            setQuery(newQuery)
            if (!newQuery.includes('&')) {
                dispatch(getJob())
                navigate('/')
            } else {
                navigate(newQuery.substring(0, newQuery.length - 1))
                dispatch(searchJob(newQuery.substring(0, newQuery.length - 1)))
            }
        }
    };
    return (
        <>
            <div className="container-sideBar">
                {/*search category start*/}
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
                        <label for="vehicle1">việc làm IT</label>
                        <br/>
                        <input type={"checkbox"} name="categoryId" value={'2'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1">Marketing</label>
                        <br/>
                        <input type={"checkbox"} name="categoryId" value={'3'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1">thương mại điện tử</label>
                        <br/>
                        <input type={"checkbox"} name="categoryId" value={'4'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1"> tester</label>
                        <br/>
                    </div>
                </div>
                {/*search category end*/}
                {/*search address start*/}
                <div className="row" style={{padding: '12px'}}>
                    <div className="col-12">
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 type-job">
                        <p style={{marginLeft: "14px", fontSize: "14px"}}>Địa điểm làm viêc</p>
                        <input type={"checkbox"} name="addressWork" value={'hanoi'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1">Hà Nội</label>
                        <br/>
                        <input type={"checkbox"} name="addressWork" value={'HCM'} onChange={(values) =>
                            handleSearch(values)
                        }/>
                        <label htmlFor="vehicle1">TP.Hồ Chí Minh</label>
                        <br/>
                    </div>
                </div>
                {/*search address end*/}
            </div>
        </>
    )
}