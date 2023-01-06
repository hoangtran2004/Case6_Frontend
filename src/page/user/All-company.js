import React, {useEffect} from 'react';
import '../../style/Work-list-job.css'
import AuthSearchCompany from "./Auth-searchCompany";
import {useDispatch, useSelector} from "react-redux";
import {getCompany} from "../../service/Work-service";

function AllCompany() {

    const dispatch = useDispatch()

    const company = useSelector(state => {
        console.log('state',state.work.work.company)
        return state.work.work.company
    })

    useEffect(()=>{
        dispatch(getCompany())
    },[])

    return (
        <>
            <AuthSearchCompany></AuthSearchCompany>
            <div className="row container-listJobWork">
                <div className="col-12 main">
                    <div className="row">
                        {company && company.map((item,index)=>(
                            <div className="col-4 card-job-work">
                                <div className="row">
                                    <div className="col-2">
                                        <img
                                            src={item?.image}
                                            alt="logo" className="card-logo-work"/>
                                    </div>
                                    <div className="col-8">
                                        <p className="job-description-work">{item?.name}</p>
                                        <p className="companyName-work">{item?.email}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="job-description-work"></p>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card-description">
                                            <div className="work-description"><img
                                                src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.nameCity}
                                            </div>
                                            <div className="work-description"><img
                                                src="https://cdn-icons-png.flaticon.com/128/9332/9332901.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.phoneNumber}
                                            </div>
                                            <div className="work-description"><img
                                                src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.numberStaff} nhân sự

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">

                                    </div>
                                </div>
                                <div className="row" style={{marginTop: '15px'}}>
                                    <div className="col-12">
                                        <p style={{fontSize: '12px'}}><img
                                            src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png"
                                            alt=""
                                            style={{
                                                width: '12px',
                                                height: '12px',
                                                objectFit: 'cover',
                                                marginRight: '5px'
                                            }}/>Thời gian ứng tuyển : 48 giờ </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </>
    );
}

export default AllCompany;