import React, {useEffect, useRef, useState} from "react";
import "../../style/Auth-job-detail.css"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {detailJob, findAllJobOfCompany, getJob} from "../../service/Job-service";

export default function AuthJobDetail() {
    const dispatch = useDispatch();
    const jobId = useParams().id;
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency', currency: 'VND',
    });

    function myFunction(dot, more, btn) {
        let dots = document.getElementById(dot);
        let moreText = document.getElementById(more);
        let btnText = document.getElementById(btn);

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Xem thêm";

            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Ẩn bớt";
            moreText.style.display = "inline";
        }
    }

    useEffect(() => {
        dispatch(detailJob(jobId))
        dispatch(getJob())
    }, []);


    let job = useSelector(state => {
        console.log('state job', state)
        return state.job.jobCurrent
    });


    let otherJob = useSelector(state => {
        return state.job.job
    });
    const tokenUser = localStorage.getItem('token');
    return (
        <div>
            <div className='row' style={{marginTop: '10%'}}>
                <div className="col-1">
                    <img id='img' src={job?.image}
                         style={{float: 'right'}} alt={''}/>
                </div>
                <div className="col-7">
                    <h6>{job?.title}</h6>
                    <a href='#'><h6>{job?.nameCity}</h6></a>
                    <div style={{margin: 10}}>
                        {tokenUser ? <p style={{height: 10}}><img
                            src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                            alt=""
                            className="icon-description-work"/> {formatter.format(job.wageStart)} - {formatter.format(job.wageEnd)}/Tháng
                        </p> : <></>}

                        <p style={{height: 10}}><img
                            src="https://cdn-icons-png.flaticon.com/128/2942/2942842.png"
                            alt=""
                            className="icon-description-work"/> {job?.vacancies}</p>
                        <p style={{height: 10}}><img
                            src="https://cdn-icons-png.flaticon.com/128/439/439398.png"
                            alt=""
                            className="icon-description-work"/>{job?.vacancies === 0 ? "Full time" : "Part time"}</p>
                        <div style={{marginTop: 50}}>
                            <button id='btn1' data-toggle="modal"
                                    data-target="#staticBackdrop"
                                    style={{backgroundColor: '#017eb7', color: "white"}}>Gửi hồ sơ
                            </button>
                        </div>

                        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
                             tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{width: "90%", height: 600}}>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-label="Close" style={{marginLeft: 410, marginTop: 10}}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="modal-header mt-2">
                                        <h5 className="modal-title" id="staticBackdropLabel"
                                            style={{textAlign: "center"}}>Bạn hiện đang ứng tuyển cho Company với vị trí
                                            Job</h5>
                                    </div>
                                    <div className="modal-body">
                                        <h6>Hồ sơ xin việc</h6>
                                        <button type="button" id='btn12'>Đăng tải hồ sơ của tôi</button>
                                        <div id='style1'>
                                            <h6>Lưu ý : đảm bảo hồ sơ xin việc của bạn sử dụng ngôn ngữ trùng khớp với
                                                mô tả
                                                công việc (Ví dụ: viết CV bằng tiếng Anh nếu mô tả công việc bằng tiếng
                                                Anh)
                                                và đăng tải dưới dạng PDF dưới 5MB.</h6>
                                            <h6>Hồ sơ đã đăng tải sẽ được lưu lại cho lần nộp đơn sau.</h6>
                                        </div>
                                        <input id='input' className='form-control' placeholder='Nhập số điện thoại'/>
                                        <div id='style1'>
                                            <h6>Ví dụ: +84912345678.</h6>
                                            <h6> Nhà tuyển dụng cần thông tin này để liên lạc với bạn nhanh chóng.</h6>
                                        </div>
                                        <button id='btn13'>Ứng tuyển ngay</button>
                                        <div id='style'>
                                            <h6>Bạn chưa chuẩn bị hồ sơ?</h6>
                                            <h6>Hãy trở lại việc làm để ứng tuyển sau.</h6>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 style={{marginTop: 30}}>Chi tiết công việc {job?.title} tại {job?.name}
                            Asia</h6>
                        <br/>
                        <h6>Mô tả công việc</h6>
                        <p>{job.jobDescription}</p>
                        <button onClick={() => {
                            myFunction('dots', 'more', 'myBtn')
                        }} id="myBtn" style={{backgroundColor: 'white', border: 'none', color: 'blue'}}>Xem thêm
                        </button>
                    </div>
                    <div className="card" style={{}}>
                        <h6 style={{textAlign: "center", marginTop: '2%'}}>Giới thiệu về công ty</h6>
                        <div className="card-body">
                            <img id='img' src={job?.image}
                                 alt={''}/>
                            <h5 className="card-title">{job?.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{marginRight: 10}}>{job?.name} ||
                                {job?.staffNumber} nhân viên</h6>
                            <p>
                                {job?.description}
                            </p>
                            <button onClick={() => {
                                myFunction('change', 'mText', 'btnText')
                            }} id="btnText" style={{backgroundColor: 'white', border: 'none', color: 'blue'}}>Xem thêm
                            </button>
                            <h6>Địa chỉ văn phòng</h6>
                            <p>{job?.addressWork}</p>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <h6>Các công việc khác của công ty</h6>
                    {otherJob && otherJob.map((item, index) => {
                        for (let i = 0; i < otherJob.length; i++) {
                            if (job.companyId === item.companyId) {
                                return (
                                    <div className="card" id='card'>
                                        <div className="card-body">
                                            <img id='img'
                                                 src={job?.image}
                                                 alt={''}/>
                                            <h5 className="card-title">{item?.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{item?.nameCity},Việt Nam</h6>

                                            <p className="card-text"><img
                                                src="https://cdn-icons-png.flaticon.com/128/439/439398.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.statusTime === 0 ? "Full time" : "Part time"}
                                            </p>
                                            <p className="card-text"><img
                                                src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                                                alt=""
                                                className="icon-description-work"/>
                                                <a href="#" className="card-link">Số lượng ứng tuyển
                                                    :{item?.applicants}</a>
                                            </p>

                                        </div>
                                    </div>

                                )
                            }
                        }


                    })}
                </div>

            </div>
        </div>
    )
}