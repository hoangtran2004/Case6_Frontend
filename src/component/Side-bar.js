import '../style/Side-bar.css'
import {useLocation, useNavigate, useParams, useSearchParams,} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {editJob, getJob, searchJob} from "../service/Job-service";

export default function SideBar() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let search = useLocation().search.replace('?', '')
    const queryParams = new URLSearchParams(search)
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
        setTimeout(() => {
            navigate(`/search?${newArrQuery.join('&')}`)
        }, 1300)
    };
    useEffect(() => {
        dispatch(searchJob(search))
        for (const [key, value] of queryParams) {
            console.log({key, value}) // {key: 'term', value: 'pizza'} {key: 'location', value: 'Bangalore'}
        }
    }, [])
    return (<>
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
                    <input type={"checkbox"} name="categoryId" value={'1'}
                           onChange={(values) => handleSearch(values)}/>
                    <label for="vehicle1">
                        Ngành Công nghệ Thông tin
                    </label>
                    <br/>
                    <input type={"checkbox"} name="categoryId" value={'2'}
                           onChange={(values) => handleSearch(values)}/>
                    <label htmlFor="vehicle1">Ngành Khoa học Máy tính.</label>
                    <br/>
                    <input type={"checkbox"} name="categoryId" value={'3'}
                           onChange={(values) => handleSearch(values)}/>
                    <label htmlFor="vehicle1">Ngành Kỹ thuật Phần mềm.</label>
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
                    <input type={"checkbox"} name="addressWork" value={'hanoi'}
                           onChange={(values) => handleSearch(values)}/>
                    <label htmlFor="vehicle1">Hà Nội</label>
                    <br/>
                    <input type={"checkbox"} name="addressWork" value={'HCM'}
                           onChange={(values) => handleSearch(values)}/>
                    <label htmlFor="vehicle1">TP.Hồ Chí Minh</label>
                    <br/>
                    <input type={"checkbox"} name="addressWork" value={'dangnang'}
                           onChange={(values) => handleSearch(values)}/>
                    <label htmlFor="vehicle1">Đà Nẵng</label>
                    <br/>
                </div>
            </div>
            {/*search address end*/}
        </div>
    </>)
}