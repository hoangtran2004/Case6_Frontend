import React, {useEffect} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../style/Auth-login.css'
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {workRegister} from "../../service/Work-service";
import Swal from "sweetalert2";
import {getCity} from "../../service/City-service";

function WorkRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .min(5, "Email không hợp lệ!")
            .max(50, "Email không hợp lệ!"), nameCompany: Yup.string()
            .min(5, "Tên không hợp lệ!")
            .max(40, "Tên không hợp lệ!"), phoneNumber: Yup.string()
            .min(6, "Số điện thoại không hợp lệ!")
            .max(30, "Số điện thoại không hợp lệ!"),

    });

    useEffect(() => {
        dispatch(getCity())
    }, [])

    const city = useSelector(state => {
        console.log(state.city.city)
        return state.city.city
    })
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    })


    const handleWorkRegister = async (values) => {
        Toast.fire({
            icon: 'success', title: 'Đăng kí thành công.',
            timer: 1900,
        })
        let checkRegister = await dispatch(workRegister(values));
        if (checkRegister.payload.checkRegister === true) {
           await navigate('/work/login')
        } else {
            await Toast.fire({
                icon: 'error', title: 'Tài khoản gmail đã tồn tại.',
                timer: 2300
            })
        }

    }

    return (<div className="container-Login">
        <div className="container-FormLogin">
            <div className="row">
                <div className="col-6 ">
                    <div className="container-input display">
                        <Formik initialValues={{
                            email: '',
                            name: '',
                            phoneNumber: '',
                            address: 0,
                            image: 'https://www.palmkvistmaleri.se/wp-content/uploads/2018/02/default.jpg',
                        }}
                                validationSchema={SignupSchema}
                                onSubmit={(values, {resetForm}) => {
                                    handleWorkRegister(values)
                                    setTimeout(() => {
                                        resetForm()
                                    }, 2300)
                                }}>
                            <Form className="form-company">
                                <h3>Đăng kí tài khoản doanh nghiệp</h3>
                                <div className="form-group">
                                    <label>Email</label>
                                    <Field type="email" required className="form-control size" name={'email'}
                                           placeholder="Tài khoản email"/>
                                    <ErrorMessage name={'email'}/>
                                </div>
                                <div className="form-group">
                                    <label>Tên doanh nghiệp</label>
                                    <Field type="text" required className="form-control size" name={'name'}
                                           placeholder="Tên doanh nghiệp"/>
                                    <ErrorMessage name={'nameCompany'}/>
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <Field type="text" required className="form-control size" name={'phoneNumber'}
                                           placeholder="Số điện thoại"/>
                                    <ErrorMessage name={'phoneNumber'}/>
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>

                                    <Field as="select" name="address"
                                           className="form-select sel select-city"
                                           style={{height: '53% !important'}}
                                           aria-label="Default select example">

                                        {city?.map((item, index) => (<option value={item.cityId}
                                                                             name={'cityID'}>{item?.nameCity}</option>))}
                                    </Field>
                                </div>
                                <button type={'submit'} className="btn btn-primary size" style={{width:'25rem'}}>Đăng kí</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container-imgWork"></div>
                </div>
            </div>
        </div>
    </div>);
}

export default WorkRegister;
