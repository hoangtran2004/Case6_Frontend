import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {workById, workEditInformation} from "../../service/Work-service";
import {storage} from "../../firebase";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import Swal from "sweetalert2";
import {getCity} from "../../service/City-service";

export default function WorkEditInformation() {
    let item = JSON.parse(localStorage.getItem('work'));
    const [companyId, setCompanyId] = useState(item.company.companyId);
    const [companyInfo, setCompanyInfo] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);
    const idCompany = useParams().id
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
        setIs_disable(true)
        let formData = {};
        for (const key in values) {
            if (key !== 'cityId' && key !== 'nameCity') formData[key] = values[key];
        }
        formData.image = img;
        let params = {
            companyId: idCompany,
            formData: formData
        }
        dispatch(workEditInformation(params)).then(() => {
            setIs_disable(false)
            Toast.fire({
                icon: 'success',
                title: 'Chỉnh sửa thông tin thành công!',
            })
            navigate('/work')
        }).catch(() => {
            Toast.fire({
                icon: "error",
                title: 'Chỉnh sửa thông tin thất bại!',

            })
        })

    };
    useEffect(() => {
        dispatch(workById(idCompany))
    }, [])
    useEffect(() => {
        dispatch(getCity())
    }, [])

    const city = useSelector(state => {
        return state.city.city
    })
    const [imageUrls, setImageUrls] = useState([]);

    const [is_disable, setIs_disable] = useState(false)
    const [img, setImg] = useState("");


    const imagesListRef = ref(storage, "images/");

    let companyFind = useSelector((state) => {
        return state.work.workFind
    })


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

                                        handleEdit(values)
                                    }} enableReinitialize={true}>
                                        <Form className="input-job">
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Tên công ty</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"name"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Tên viết tắt</label>
                                                <Field required type="text" className="form-control input-info-job"
                                                       name={"abbreviatedName"}/>
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

                                                <Field as="select" name="address"
                                                       className="form-control input-info-job"
                                                       style={{height: '53% !important'}}
                                                       aria-label="Default select example">
                                                    {city?.map((item, index) => (<option value={item.cityId}
                                                                                         >{item?.nameCity}</option>))}
                                                </Field>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Mô tả</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"description"} required/>
                                            </div>

                                            <div className="form-group group-input" style={{marginBottom: '1rem'}}>
                                            </div>
                                            <button type={'submit'} className="btn btn-primary" disabled={is_disable}>Xác nhận</button>
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