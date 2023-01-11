import React, {useEffect, useState} from "react";
import "../../style/Auth-job-detail.css"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {detailJob, getJob} from "../../service/Job-service";
import AuthOtherJob from "./Auth-other-job";
import '../../style/inputfile.css'
import {Field, Form, Formik} from "formik";
import {addCv, getCvByIdJob} from "../../service/Cv-service";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";

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
    const imagesListRef = ref(storage, "images/");
    const tokenUser = localStorage.getItem('token');
    const userIdCurren = localStorage.getItem('id');
    useEffect(() => {
        dispatch(detailJob(jobId))
        dispatch(getJob())
        dispatch(getCvByIdJob(jobId))
    }, []);
    let listCv = useSelector((state) => {
        console.log(state.cv.cvFind)
        return state.cv.cvFind
    })
    let job = useSelector(state => {
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

    const handleFile = async (e, jobId) => {
        if (e.sdt !== '' && e.imgCv !== 0) {
            let newCv = {
                image: img, userId: userIdCurren, jobId: jobId, sdt: e.sdt
            }
            await dispatch(addCv(newCv))
        } else {
            alert("thiếu trường")
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
                        {tokenUser ? listCv.length === 0 ? <button id='btn1' data-toggle="modal"
                                                                   data-target="#staticBackdrop"
                                                                   style={{
                                                                       backgroundColor: '#017eb7', color: "white"
                                                                   }}>Gửi hồ sơ
                        </button> : <button disabled id='btn111' data-toggle="modal"
                                            style={{backgroundColor: '#017eb7', color: "white"}}>Đã gửi hồ sơ
                        </button> : <button id='btn1' data-toggle="modal"
                                            style={{backgroundColor: '#017eb7', color: "white"}}>Gửi hồ sơ
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
                                        style={{textAlign: "center"}}>Bạn hiện đang ứng tuyển cho Company với vị trí
                                        Job</h5>
                                </div>
                                <Formik initialValues={{
                                    imgCv: '', sdt: ''
                                }} onSubmit={(values, {resetForm}) => {
                                    console.log(1111111, values)
                                    handleFile(values, job?.jobId).then()
                                    resetForm();
                                }}>
                                    <Form>
                                        <div className="modal-body">
                                            <h6>Hồ sơ xin việc</h6>
                                            <button type="button" id='btn12'><Field onChange={(event) => {
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
                                                    và đăng tải dưới dạng PDF dưới 5MB.</h6>
                                                <h6>Hồ sơ đã đăng tải sẽ được lưu lại cho lần nộp đơn sau.</h6>
                                            </div>
                                            <Field id='input' name={"sdt"} className='form-control'
                                                   placeholder='Nhập số điện thoại'/>
                                            <div id='style1'>
                                                <h6>Ví dụ: +84912345678.</h6>
                                                <h6> Nhà tuyển dụng cần thông tin này để liên lạc với bạn nhanh
                                                    chóng.</h6>
                                            </div>
                                            <a href="" data-dismiss="modal"
                                               aria-label="Close">
                                                <button id='btn13' onClick={() => {
                                                    console.log(1111)
                                                }} type={"submit"}>Ứng tuyển ngay
                                                </button>
                                                <label htmlFor='btn13' >aaaa</label>
                                            </a>
                                            <div id='style'>
                                                <h6>Bạn chưa chuẩn bị hồ sơ?</h6>
                                                <h6>Thêm hồ sơ <a target="_blank" href="https://cv.fullstack.edu.vn/">tại
                                                    đây.</a></h6>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                    {/*modal đăng nhập rồi*/}
                </div>
                <div>
                    <h6 style={{marginTop: 30}}>Chi tiết công việc {job?.title} tại {job?.name}
                        Asia</h6>
                    <br/>
                    <h6>Mô tả công việc</h6>
                    <p>{job.jobDescription}</p>
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
                        <h6>Địa chỉ văn phòng</h6>
                        <p>{job?.addressWork}</p>

                    </div>
                </div>
            </div>
            <AuthOtherJob></AuthOtherJob>

        </div>
    </div>)
}