import '../../style/Side-bar.css'
import {useLocation, useNavigate, useParams, useSearchParams,} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editJob, getJob, searchJob} from "../../service/Job-service";
import {getCity} from "../../service/City-service";
import {getCategory} from "../../service/Category-service";
import '../../style/range.css'

export default function SideBar() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let search = useLocation().search.replace('?', '')
    let [experience, setExperience] = useState([{experienceId: 0, nameExperience: '< 1 năm'}, {
        experienceId: 1, nameExperience: '1-2 năm'
    }, {experienceId: 2, nameExperience: '3- 5 năm'}, {
        experienceId: 3, nameExperience: '> 5 năm'
    }])
    let [statusJob, setStatusJob] = useState([{idStatusTime: 0, nameStatus: 'Full time'}, {
        idStatusTime: 1, nameStatus: 'Part time'
    }])
    const queryParams = new URLSearchParams(search)
    let cityQuery = []
    let categoryQuery = []
    let statusQuery = []
    let expQuery = []
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
    let queryPrice


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
    if (checkQuery("statusTime").length !== 0) {
        statusQuery = checkQuery("statusTime")[0].value.split(',')
    }
    if (checkQuery("experience").length !== 0) {
        expQuery = checkQuery("experience")[0].value.split(',')
    }

    let handleSearch = async (checked, key, value) => {
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
            <input className={'css-checkbox'} checked={check} id={id} type={"checkbox"} name={name} value={value}
                   onChange={(values) => {
                       let check = values.target.checked
                       let key = values.target.name
                       let value = values.target.value
                       return handleSearch(check, key, value)
                   }}/>
            <label htmlFor={id}>
                {nameCB}
            </label>
            <br/>
        </>)
    }

     let handleRange = () => {
        let rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            progress = document.querySelector('.slider .progress');
        let priceGap = 500000;

        priceInput.forEach(input => {
            input.addEventListener("input", (e) => {
                // get two input value
                let minVal = parseInt(priceInput[0].value),
                    maxVal = parseInt(priceInput[1].value);
                if ((maxVal - minVal >= priceGap) && (maxVal < 100000000)) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minVal
                        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                    } else {
                        rangeInput[1].value = maxVal
                        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                    }
                }
            })
        })
        rangeInput.forEach(input => {
            input.addEventListener("input", (e) => {
                // get val range
                let minVal = parseInt(rangeInput[0].value), maxVal = parseInt(rangeInput[1].value);
                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap
                    } else {
                        rangeInput[1].value = minVal + priceGap
                    }

                } else {
                    priceInput[0].value = minVal
                    priceInput[1].value = maxVal
                    progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                    progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            })
        })

    }
    return (<>
        <div className="container-sideBar" style={{marginTop: 90}}>
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
                    {cities.map((item) => (cityQuery.includes(`${item.cityId}`) ? printCheckbox('addressWork', `${item.cityId}`, `${item.nameCity}`, true, `${item.cityId}${item.nameCity}`) : printCheckbox('addressWork', `${item.cityId}`, `${item.nameCity}`, false, `${item.cityId}${item.nameCity}`)))}
                </div>
            </div>
            {/*search address end*/}
            {/*search by money start*/}
            <div className="row" style={{padding: '12px'}}>
                <div className="col-12">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 type-job">
                    <span style={{marginLeft: "14px", fontSize: "14px"}}>Mức lương</span>
                    {/*<div className="switch">*/}
                    {/*    <input id="switch-1" type="checkbox" onClick={(event) => handleRange(event.target.checked)}*/}
                    {/*           name={'price'}*/}
                    {/*           className="switch-input"/>*/}
                    {/*    <label htmlFor="switch-1" className="switch-label">Switch</label>*/}
                    {/*</div>*/}
                    <div className="wrapper col-12">
                        <div className="price-input">
                            <div className="filed">
                                <spap>Từ</spap>
                                <input type="number" className="input-min" value="0"/><span>tr</span>
                            </div>
                            <div style={{width: 40}}></div>
                            <div className="filed">
                                <spap>đến</spap>
                                <input type="number" className="input-max" value="0"/><span>tr</span>
                            </div>
                        </div>
                        <div className="slider">
                            <div className="progress"></div>
                        </div>
                        <div className="range-input">
                            <input defaultValue={0} type="range" className="range-min" onChange={ handleRange } min="0" max="100000000" step="500000"/>
                            <input defaultValue={10000} type="range" className="range-max" onChange={handleRange } min="0" max="100000000" step="500000"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*    search by money end*/}
            {/*loai cong viec*/}
            <div className="row">
                <div className="col-12 type-job">
                    <p style={{marginLeft: "14px", fontSize: "14px"}}>Loại công việc</p>
                    {statusJob.map((item) => (statusQuery.includes(`${item.idStatusTime}`) ? printCheckbox('statusTime', `${item.idStatusTime}`, `${item.nameStatus}`, true, `${item.idStatusTime}${item.nameStatus}`) : printCheckbox('statusTime', `${item.idStatusTime}`, `${item.nameStatus}`, false, `${item.idStatusTime}${item.nameStatus}`)))}
                </div>
            </div>
            {/*loai cong viec*/}
            {/*    kinh nghiệm*/}
            <div className="row" style={{padding: '12px'}}>
                <div className="col-12">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 type-job">
                    <p style={{marginLeft: "14px", fontSize: "14px"}}>Loại công việc</p>
                    {experience.map((item) => (expQuery.includes(`${item.experienceId}`) ? printCheckbox('experience', `${item.experienceId}`, `${item.nameExperience}`, true, `${item.experienceId}${item.nameExperience}`) : printCheckbox('experience', `${item.experienceId}`, `${item.nameExperience}`, false, `${item.experienceId}${item.nameExperience}`)))}
                </div>
            </div>
            {/*    kinh nghiệm*/}
        </div>
    </>)
}