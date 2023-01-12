import React, {useEffect, useState} from "react";
import "../../style/Auth-job-detail.css"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {detailJob, getJob} from "../../service/Job-service";
import AuthOtherJob from "./Auth-other-job";
import '../../style/inputfile.css'
import {Field, Form, Formik} from "formik";
import {addCv, checkCv} from "../../service/Cv-service";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";
import Swal from "sweetalert2";

export default function AuthJobDetail() {
    const dispatch = useDispatch();
    const jobId = useParams().id;
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency', currency: 'VND',
    });
    let navigate = useNavigate()
    const [imageUrls, setImageUrls] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [is_disable, setIs_disable] = useState(false)
    const [img, setImg] = useState("");
    const [phone, setPhone] = useState("");
    const [cv_des, setCv_des] = useState("");
    const imagesListRef = ref(storage, "images/");
    const tokenUser = localStorage.getItem('token');
    const userIdCurren = localStorage.getItem('id');
    useEffect(() => {
        dispatch(detailJob(jobId))
        dispatch(getJob())
        dispatch(checkCv(jobId))
    }, []);
    let listCv = useSelector((state) => {
        return state.cv.cvFind
    })
    let job = useSelector(state => {
        console.log(state)
        return state.job.jobCurrent
    });


    const uploadFile = (imageUpload) => {
        setIs_disable(true)
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setIs_disable(false)
                setImg(url)
                setSubmitting(false)
            });
        })
    };
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    });

    const handleFile = async (img, phone, userId, jobId, cv_des) => {
        if (phone !== '' && img !== '' && cv_des !== '') {
            let newCv = {
                image: img, userId: userId, jobId: jobId, sdt: phone, cv_des: cv_des
            }
            await dispatch(addCv(newCv))
            await dispatch(checkCv(jobId))
        } else {
            Toast.fire({
                icon: 'warning',
                title: 'SĐT và mô tả không được để trống!'
            })
        }
    }
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        })
    }, []);

    return (<div>
        <div className='row' style={{marginTop: '7%', marginBottom: "40px"}}>
            <div className="col-1">

            </div>
            <div className="col-7">
                <h4>{job?.title}</h4>
                <h5 style={{color:'rgb(1, 126, 183)'}}>{job?.name}</h5>
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
                        {tokenUser ? listCv.length === 0 ? <button id='btn1' data-toggle="modal"
                                                                   data-target="#staticBackdrop"
                                                                   style={{
                                                                       backgroundColor: '#017eb7', color: "white"
                                                                   }}>Gửi hồ sơ
                        </button> : <button disabled id='btn111' data-toggle="modal"
                                            style={{backgroundColor: 'white', color: "#017eb7",border:"none"}}>Đã gửi hồ sơ
                        </button> : <button id='btn1' data-toggle="modal"
                                            style={{backgroundColor: '#017eb7', color: "white"}} onClick={()=>{
                            Toast.fire({
                                icon: 'warning',
                                title: 'Đăng nhập để gửi hồ sơ công việc!'
                            })
                        }}>Gửi hồ sơ
                        </button>}
                    </div>

                    {/*modal đăng nhập rồi*/}
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
                                        style={{textAlign: "center",marginLeft:'8%'}}>Nhập thông tin ứng tuyển cho công ty {<h5
                                        style={{color: '#017eb7'}}>{job?.vacancies}</h5>}</h5>
                                </div>
                                <div className="modal-body">
                                    <h6>Hồ sơ xin việc</h6>
                                    <button type="button" id='btn12'>
                                        <input onChange={(event) => {
                                            setSubmitting(true)
                                            uploadFile(event.target.files[0])
                                        }} type="file" name="imgCv" className={'inputfile'} id="fileCv"/>
                                        <label style={{padding: 17}}
                                               htmlFor="fileCv">Đăng tải hồ sơ của tôi</label></button>
                                    <div id='style1'>
                                        <h6>Lưu ý : đảm bảo hồ sơ xin việc của bạn sử dụng ngôn ngữ trùng khớp
                                            với
                                            mô tả
                                            công việc (Ví dụ: viết CV bằng tiếng Anh nếu mô tả công việc bằng
                                            tiếng
                                            Anh)
                                        </h6>
                                    </div>
                                    <input id='input' onChange={(event) => {
                                        setPhone(event.target.value)
                                    }} name={"sdt"} value={phone} className='form-control'
                                           placeholder='Nhập số điện thoại'/>
                                    <div id='style1'>
                                        <h6>Ví dụ: +84912345678.</h6>
                                        <h6> Nhà tuyển dụng cần thông tin này để liên lạc với bạn nhanh
                                            chóng.</h6>
                                    </div>
                                    <input id='input' onChange={(event) => {
                                        setCv_des(event.target.value)
                                    }} name={"cv_des"} value={cv_des} className='form-control'
                                           placeholder='Tóm tắt sơ yếu lí lịch'/>
                                    <a href="" data-dismiss="modal"
                                       aria-label="Close">
                                        <button id='btn13'
                                                onClick={() => handleFile(img, phone, userIdCurren, jobId, cv_des)}
                                                type={"submit"}>Ứng tuyển ngay
                                        </button>
                                    </a>
                                    <div id='style'>
                                        <h6>Bạn chưa chuẩn bị hồ sơ?</h6>
                                        <h6>Thêm hồ sơ <a target="_blank" href="https://cv.fullstack.edu.vn/">tại
                                            đây.</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*modal đăng nhập rồi*/}
                </div>
                <div className="col-12"></div>
                <div>
                    <h5 style={{marginTop: 30}}>Chi tiết công việc {job?.title} tại {job?.name}
                        Asia</h5>
                    <br/>
                    <h6>Mô tả công việc</h6>
                    <i>{job.jobDescription}</i>
                </div>
                <div className="card" style={{padding:'3%'}}>
                    <h5> <strong>Giới thiệu về công ty</strong></h5>
                    <div className="row">
                        <div className="col-1">
                            <img id='img' src={job?.image}
                                 alt={''}/>
                        </div>
                        <div className="col-5">
                    <div className="card-body">

                        <h5 className="card-title">{job?.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted" style={{marginRight: 10}}>{job?.name} ||
                            {job?.staffNumber} nhân viên</h6>
                        <p>
                            {job?.description}
                        </p>
                        <h6>Địa chỉ văn phòng</h6>
                        <p>{job?.addressWork}</p>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <AuthOtherJob></AuthOtherJob>

        </div>
    </div>)
}