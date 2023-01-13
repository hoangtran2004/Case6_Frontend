import '../../style/Side-bar.css'
import {useLocation, useNavigate, useParams, useSearchParams,} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editJob, getJob, searchJob} from "../../service/Job-service";
import {getCity} from "../../service/City-service";
import {getCategory} from "../../service/Category-service";
import '../../style/range.css'

export default function SideBar() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let search = useLocation().search.replace('?', '')
    let [experience, setExperience] = useState([{experienceId: 0, nameExperience: 'Dưới 1 năm'}, {
        experienceId: 1, nameExperience: 'Từ 1 - 3 năm'
    }, {experienceId: 2, nameExperience: 'Từ  3- 5 năm'}, {
        experienceId: 3, nameExperience: 'Trên 5 năm'
    }])
    let [statusJob, setStatusJob] = useState([{idStatusTime: 0, nameStatus: 'Full time'}, {
        idStatusTime: 1, nameStatus: 'Part time'
    }])
    let [checkRange, setCheckRange] = useState(false)
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
    if (checkQuery('address').length !== 0) {
        cityQuery = checkQuery('address')[0].value.split(',')
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
            <label htmlFor={id} style={{marginLeft: '2%'}}>
                {nameCB}
            </label>
            <br/>
        </>)
    }

    let scripRange = () => {
        clearTimeout(queryPrice)
        let rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            progress = document.querySelector('.slider .progress');
        let priceGap = 1;
        priceInput.forEach(input => {
            input.addEventListener("input", (e) => {
                // get two input value
                let minVal = parseInt(priceInput[0].value), maxVal = parseInt(priceInput[1].value);
                if ((maxVal - minVal >= priceGap) && (maxVal < 50)) {
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
        queryPrice = setTimeout(() => handleRange('wage', priceInput[0].value, priceInput[1].value), 1000)
    }
    let printRange = (checked) => {
        setCheckRange(checked)
        let newArrQuery = search.split('&')
        let index = -1
        newArrQuery.map((item, i) => {
            if (item.includes('wage')) {
                index = i
            }
        })
        if (index !== -1) {
            newArrQuery.splice(index, 1)
        }
        dispatch(searchJob(newArrQuery.join('&')))
        if (newArrQuery.join('&') === '') {
            navigate('/')
        } else {
            navigate(`/search?${newArrQuery.join('&')}`)
        }
    }
    let handleRange = (key, min, max) => {
        let newArrQuery = search.split('&')
        let index = -1
        newArrQuery.map((item, i) => {
            if (item.includes(key)) {
                index = i
            }
        })
        if (index === -1) {
            newArrQuery.unshift(`wage=${min},${max}`)
        } else {
            newArrQuery.splice(index, 1, `wage=${min},${max}`)
        }
        dispatch(searchJob(newArrQuery.join('&')))
        navigate(`/search?${newArrQuery.join('&')}`)
    }
    return (<>
        <div className="container-sideBar" style={{marginTop: 90}}>
            {/*search category start*/}
            <div className="row" style={{padding: '12px'}}>
                <div className="col-12">
                    <p><i className="fa-solid fa-magnifying-glass" style={{opacity: 0.7, marginRight: 5}}></i>Lọc tìm
                        kiếm của bạn</p>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 type-job">
                    <p style={{marginLeft: "14px", fontSize: "14px",}}><img
                        src="https://cdn-icons-png.flaticon.com/128/3850/3850259.png"
                        alt=""
                        className="icon-description"/>Ngành</p>
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
                    <p style={{marginLeft: "14px", fontSize: "14px"}}><img
                        src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                        alt=""
                        className="icon-description"/>Địa điểm làm viêc</p>
                    {cities.map((item) => (cityQuery.includes(`${item.cityId}`) ? printCheckbox('address', `${item.cityId}`, `${item.nameCity}`, true, `${item.cityId}${item.nameCity}`) : printCheckbox('address', `${item.cityId}`, `${item.nameCity}`, false, `${item.cityId}${item.nameCity}`)))}
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
                    <span style={{marginLeft: "14px", fontSize: "14px"}}><img
                        src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                        alt=""
                        className="icon-description"/>Mức lương </span>
                    <div className="switch">
                        <input id="switch-1" type="checkbox" onClick={(event) => printRange(event.target.checked)}
                               name={'price'}
                               className="switch-input"/>
                        <label htmlFor="switch-1" className="switch-label">Switch</label>
                    </div>
                    {checkRange === false ? <></> : <>
                        <div className="wrapper col-12" style={{width:'90%',marginBottom:-10}}>
                            <div className="price-input" style={{marginTop:-25,width:'90%'}}>
                                <div className="filed">
                                    <spap>Từ</spap>
                                    <input type="number" className="input-min" value=""/><span>triệu</span>
                                </div>
                                <div style={{width: 40}}></div>
                                <div className="filed">
                                    <spap>đến</spap>
                                    <input type="number" className="input-max" value=""/><span>triệu</span>
                                </div>
                            </div>
                            <div className="slider" style={{marginTop:-20}}>
                                <div className="progress"></div>
                            </div>
                            <div className="range-input" >
                                <input defaultValue={0} type="range" name={'wageStart'}
                                       className="range-min" onChange={scripRange} min="0"
                                       max="50" step="1"/>
                                <input defaultValue={0} type="range" name={'wageEnd'}
                                       className="range-max"
                                       onChange={scripRange}
                                       min="0"
                                       max="50" step="1"/>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
            <hr style={{width: '92%', marginLeft: 15}}/>
            {/*    search by money end*/}
            {/*loai cong viec*/}
            <div className="row">
                <div className="col-12 type-job">
                    <p style={{marginLeft: "14px", fontSize: "14px"}}><img
                        src="https://cdn-icons-png.flaticon.com/128/439/439398.png"
                        alt=""
                        className="icon-description-work"/>Loại công việc</p>
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
                    <p style={{marginLeft: "14px", fontSize: "14px"}}><img
                        src="https://cdn-icons-png.flaticon.com/128/639/639394.png"
                        alt=""
                        className="icon-description"/>Kinh nghiệm</p>
                    {experience.map((item) => (expQuery.includes(`${item.experienceId}`) ? printCheckbox('experience', `${item.experienceId}`, `${item.nameExperience}`, true, `${item.experienceId}${item.nameExperience}`) : printCheckbox('experience', `${item.experienceId}`, `${item.nameExperience}`, false, `${item.experienceId}${item.nameExperience}`)))}
                </div>
            </div>
            {/*    kinh nghiệm*/}
        </div>
    </>)
}