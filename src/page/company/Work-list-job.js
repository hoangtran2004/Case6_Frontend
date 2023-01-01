import React, {useEffect} from 'react';
import '../../style/Work-list-job.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteJob, getJob, lockJob} from "../../service/Job-service";
import Banner from "../../component/Banner";

function WorkListJob() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getJob())
    }, [])

    const work = JSON.parse(localStorage.getItem('work'))
    const job = useSelector(state => {
        return state.job.job
    }) || []

    return (
        <>
            <Banner></Banner>
            <div className="row container-listJobWork">
                <div className="col-12 main">
                    <div className="row">
                        {
                            job?.map((item, index) => {
                                if (item && item?.companyId === work.company.companyId) {
                                    return (
                                        <div className="col-4 card-job-work">
                                            <div className="row">
                                                <div className="col-1">
                                                    <img
                                                        src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(2068).png"
                                                        alt="logo" className="card-logo-work"/>
                                                </div>
                                                <div className="col-9">
                                                    <p className="job-description-work">{item?.title}</p>
                                                    <p className="companyName-work">{item?.name}</p>
                                                </div>
                                                <div className="col-2" style={{marginLeft: '-1em'}}>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
                                                         alt="" style={{
                                                        height: '20px',
                                                        width: '20px',
                                                        objectFit: "cover",
                                                        marginLeft: '25px',
                                                        marginTop: '21px',
                                                        cursor: 'pointer'
                                                    }} data-toggle="dropdown" aria-expanded="false"/>

                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <button className="dropdown-item" type="submit" onClick={() => {
                                                            dispatch(deleteJob({id: item?.jobId}))
                                                            dispatch(getJob())
                                                        }}>Xóa
                                                        </button>
                                                        <button className="dropdown-item" type="submit">Sửa

                                                        </button>
                                                        <button className="dropdown-item" type="submit" onClick={() => {
                                                            dispatch(lockJob({id: item?.jobId}))
                                                            dispatch(getJob())
                                                        }}>Đóng/mở
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="card-description">
                                                        <div className="work-description"><img
                                                            src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                                                            alt=""
                                                            className="icon-description-work"/>{item?.addressWork}
                                                        </div>
                                                        <div className="work-description"><img
                                                            src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                                                            alt=""
                                                            className="icon-description-work"/>{item?.wageStart} - {item?.wageEnd}
                                                        </div>
                                                        <div className="work-description"><img
                                                            src="https://cdn-icons-png.flaticon.com/128/639/639394.png"
                                                            alt=""
                                                            className="icon-description-work"/>{item?.experience}
                                                        </div>
                                                        <div className="work-description"><img
                                                            src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                                                            alt=""
                                                            className="icon-description-work"/>Số lượng ứng tuyển
                                                            : {item?.applicants}
                                                        </div>
                                                        <div className="work-description"><img
                                                            src="https://cdn-icons-png.flaticon.com/128/535/535245.png"
                                                            alt=""
                                                            className="icon-description-work"/>{item?.status === 0 ? "Đang mở" : "Đã đóng"}
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
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkListJob;
