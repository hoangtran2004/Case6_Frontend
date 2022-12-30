import '../style/Side-bar.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../service/Category-service";

export default function SideBar() {

    const dispatch = useDispatch()
    const [query, setQuery] = useState('');
    const search = useLocation().search.replace('?', '')
    let navigate = useNavigate()

    const category = useSelector(state => {
        console.log(state.category.category)
        return state.category.category
    })


    useEffect(() => {
        dispatch(getCategory())
    }, [])

    // let handleSearch = async (e) => {
    //     const checked = await e.target.checked;
    //     const checkedValue = await e.target.value;
    //     const checkedName = await e.target.name;
    //     let newQuery = ''
    //     if (checked) {
    //         newQuery = `${query}${checkedName}=${checkedValue}&`
    //         await setQuery(newQuery)
    //         await navigate(newQuery.substring(0, newQuery.length - 1))
    //         await dispatch(searchJob(newQuery.substring(0, newQuery.length - 1)))
    //     } else {
    //         newQuery = query.replace(`${checkedName}=${checkedValue}&`, '')
    //         await setQuery(newQuery)
    //         await navigate(newQuery.substring(0, newQuery.length - 1))
    //         await dispatch(searchJob(newQuery.substring(0, newQuery.length - 1)))
    //         if (!newQuery.includes('&')) {
    //             navigate('/')
    //         }
    //     }
    // };
    return (
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
                        <p style={{marginLeft: "14px", fontSize: "14px"}}>Loại công việc</p>
                        {category.map((item, index) => (
                            <div>
                                <input type={"checkbox"} name="categoryId" value={item.categoryId} onChange={(values) => {
                                    // handleSearch(values)
                                }}/>
                                <label >{item.name}</label>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}