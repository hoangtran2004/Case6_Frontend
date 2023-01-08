import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {workEditInformation} from "../../service/Work-service";
import {storage} from "../../firebase";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import Swal from "sweetalert2";

export default function WorkEditInformation() {
    let item = JSON.parse(localStorage.getItem('work'));
    const [companyId, setCompanyId] = useState(item.company.companyId);
    const [companyInfo, setCompanyInfo] = useState(item.company);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const handleEdit = (values) => {
        let data = {
            ...values,
            companyId: companyId,
            image: img
        };
        dispatch(workEditInformation(data)).then(Toast.fire({
            icon: 'success',
            title: 'Chỉnh sửa thông tin thành công!',

        }))
        navigate('/work')
    };

    const [imageUrls, setImageUrls] = useState([]);

    const [img, setImg] = useState("");


    const imagesListRef = ref(storage, "images/");

    let companyFind = useSelector((state) => {
        console.log(state)
        return state.work.workFind
    })


    const uploadFile = (imageUpload) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImg(url)
                setSubmitting(false)
            });
        })

    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        })

    }, []);
    return (
        <>
            <div className="container-add-job">
                <div className="row" style={{width: '99%'}}>
                    <div className="col-8 offset-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-add-job">
                                    <h2 style={{color: 'yellowgreen'}}>Sửa thông tin doanh nghiệp.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-add-job">
                                    <Formik initialValues={companyFind} onSubmit={(values) => {
                                        handleEdit(values);
                                    }}>
                                        <Form className="input-job">
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Tên công ty</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"name"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Tên viết tắt</label>
                                                <Field required type="text" className="form-control input-info-job"
                                                       name={"abbreviatedName"} />
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Số điện thoại</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"phoneNumber"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Số nhân viên</label>
                                                <Field type="number" className="form-control input-info-job"
                                                       name={"numberStaff"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Ảnh</label><br/>

                                                <input
                                                    type="file" onChange={(event) => {
                                                    setSubmitting(true)
                                                    uploadFile(event.target.files[0])
                                                }}/>
                                            </div>

                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Địa chỉ</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"address"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Mô tả</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"description"} required/>
                                            </div>

                                            <div className="form-group group-input" style={{marginBottom: '1rem'}}>
                                            </div>
                                            <button type={'submit'} className="btn btn-primary">Xác nhận</button>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}