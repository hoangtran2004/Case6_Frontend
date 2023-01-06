import '../style/Side-bar.css'
import {useLocation, useNavigate, useParams, useSearchParams,} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editJob, getJob, searchJob} from "../service/Job-service";
import {getCity} from "../service/City-service";
import {getCategory} from "../service/Category-service";

export default function SideBar() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let search = useLocation().search.replace('?', '')
    const queryParams = new URLSearchParams(search)
    let cityQuery = []
    let categoryQuery = []
    useEffect(() => {
        dispatch(searchJob(search))
    }, [search])

    useEffect(() => {
        dispatch(getCity());
        dispatch(getCategory());
    }, [])
    let getArrParams = () => {
        let map = [];
        for (const [key, value] of queryParams) {
            map.push({key, value})
        }
        return map
    }
    let cities = useSelector((state) => {
        return state.city.city
    })
    let categories = useSelector(state => {
        return state.category.category
    })
    let checkQuery = (key) => {
        return getArrParams().filter((item) => {
            return item.key === `${key}`
        })
    }
    if (checkQuery('addressWork').length !== 0) {
        cityQuery = checkQuery('addressWork')[0].value.split(',')
    }
    if (checkQuery("categoryId").length !== 0) {
        categoryQuery = checkQuery("categoryId")[0].value.split(',')
    }

    let handleSearch = async (e) => {
        const checked = e.target.checked;
        const key = e.target.name;
        const value = e.target.value;
        let newArrQuery = search.split('&')
        let index = -1
        let newQuery
        newArrQuery.map((item, i) => {
            if (item.includes(key)) {
                index = i
            }
        }) // ktra nếu url có key thì thêm %
        if (checked) {
            if (index === -1) {  //chưa có key
                newQuery = `${key}=${value}`
                newArrQuery.unshift(newQuery)
            } else {   // đã có key
                newQuery = `${newArrQuery[index]}%2C${value}`
                newArrQuery.splice(index, 1, newQuery)
            }
        } else {
            newQuery = `${value}%2C`
            if (newArrQuery[index].includes(newQuery)) {
                newArrQuery[index] = newArrQuery[index].replace(newQuery, '')
            } else if (newArrQuery[index].includes(`%2C${value}`)) {
                newArrQuery[index] = newArrQuery[index].replace(`%2C${value}`, '')
            } else {
                newArrQuery.splice(index, 1)
            }
        }
        dispatch(searchJob(newArrQuery.join('&')))
        if (newArrQuery.join('&') !== '') {
            navigate(`/search?${newArrQuery.join('&')}`)
        } else {
            navigate("/")
        }
    };

    let printCheckbox = (name, value, nameCB, check, id) => {
        return (<>
            <input checked={check} id={id} type={"checkbox"} name={name} value={value}
                   onChange={(values) => handleSearch(values)}/>
            <label htmlFor={id}>
                {nameCB}
            </label>
            <br/>
        </>)
    }

    return (<>
        <div className="container-sideBar" style={{marginTop : 90}}>
            {/*search category start*/}
            <div className="row" style={{padding: '12px'}}>
                <div className="col-12">
                    <p>Lọc tìm kiếm của bạn</p>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 type-job">
                    <p style={{marginLeft: "14px", fontSize: "14px"}}>Ngành</p>
                    {categories.map((item) => (categoryQuery.includes(`${item.categoryId}`) ? printCheckbox('categoryId', `${item.categoryId}`, `${item.nameCategory}`, true, `${item.categoryId}${item.nameCategory}`) : printCheckbox('categoryId', `${item.categoryId}`, `${item.nameCategory}`, false, `${item.categoryId}${item.nameCategory}`)))}
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
                    <input type={"checkbox"} name="addressWork" value={'1'}
                           onChange={(values) => handleSearch(values)}/>
                    <label htmlFor="vehicle1">Hà Nội</label>
                    <br/>
                    <input type={"checkbox"} name="addressWork" value={'2'}
                           onChange={(values) => handleSearch(values)}/>
                    <label htmlFor="vehicle1">TP.Hồ Chí Minh</label>
                    <br/>
                    <input type={"checkbox"} name="addressWork" value={'3'}
                           onChange={(values) => handleSearch(values)}/>
                    <label htmlFor="vehicle1">Đà Nẵng</label>
                    <br/>
                </div>
            </div>
            {/*search address end*/}
        </div>
    </>)
}