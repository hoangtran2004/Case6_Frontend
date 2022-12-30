import React, {useEffect} from 'react';
import '../../style/Work-list-job.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteJob, getJob} from "../../service/Job-service";

function WorkListJob() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getJob())
    }, [])

    const work = JSON.parse(localStorage.getItem('work'))
    // console.log('work',work)
    const job = useSelector(state => {
        return state.job.job
    }) || []


    return (
        <>
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
                                                <div className="col-7">
                                                    <p className="job-description-work">{item?.title}</p>
                                                    <p className="companyName-work">{item?.name}</p>
                                                </div>
                                                <div className="col-1">
                                                    <button onClick={()=>{
                                                        dispatch(deleteJob({id:item.jobId}))
                                                        dispatch(getJob())
                                                    }} className={'btn btn-danger'} type={'submit'}>delete</button>
                                                    {/*<img src="https://cdn-icons-png.flaticon.com/128/5028/5028066.png"*/}
                                                    {/*     alt=""*/}
                                                    {/*     style={{*/}
                                                    {/*         height: '30px',*/}
                                                    {/*         width: '30px',*/}
                                                    {/*         objectFit: "cover",*/}
                                                    {/*         marginLeft: '5px',*/}
                                                    {/*         marginTop: '21px',*/}
                                                    {/*         cursor:'pointer'*/}
                                                    {/*     }} />*/}

                                                </div>
                                                {/*<div className="col-1">*/}
                                                {/*    <img src="https://cdn-icons-png.flaticon.com/128/2990/2990019.png"*/}
                                                {/*         alt=""*/}
                                                {/*         style={{*/}
                                                {/*             height: '30px',*/}
                                                {/*             width: '30px',*/}
                                                {/*             objectFit: "cover",*/}
                                                {/*             marginLeft: '25px',*/}
                                                {/*             marginTop: '21px',*/}
                                                {/*             cursor:'pointer'*/}
                                                {/*         }} onClick={()=>{}}/>*/}

                                                {/*</div>*/}

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
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12" style={{marginTop: '23px'}}>
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
