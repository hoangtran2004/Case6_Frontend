import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../style/Auth-register.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authRegister} from "../../service/Auth-service";
import Swal from "sweetalert2";

function AuthRegister() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    })
    const handleRegister = async (values) => {
        if (values.name.length < 8) {
            await Toast.fire({
                icon: 'error',
                title: 'Tên người dùng phải từ 8 ký tự!'
            })

        } else if (values.password.length < 8) {
            await Toast.fire({
                icon: 'error',
                title: 'Mật khẩu của bạn phải trên 8 kí tự!'
            })

        } else if (values.password !== values.repeatPassword) {
            await Toast.fire({
                icon: 'error',
                title: 'Mật khẩu không chính xác!'
            })
        } else {
            let checkRegister = await dispatch(authRegister(values))
            Toast.fire({
                icon: 'success',
                title: 'Đăng kí tài khoản thành công!'
            })
            if (checkRegister.payload.checkRegister === true) {
                navigate('/auth/login')
            } else {
                await Toast.fire({
                    icon: 'warning',
                    title: 'Tài khoản gmail đã được sử dụng!'
                })
            }
        }
    }

    return (
        <>
            <div className="container-Register">
                <div className="container-FormRegister">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="container-input display-register">
                                <Formik initialValues={{
                                    name: '',
                                    email: '',
                                    password: '',
                                    repeatPassword: '',
                                    phone: ''
                                }}
                                        onSubmit={(values, {resetForm}) => {
                                            handleRegister(values)
                                            resetForm()

                                        }}>
                                    <Form className={'form'}>
                                        <h3>Đăng ký với người dùng</h3>
                                        <div className="form-group">
                                            <label>Tài khoản</label>
                                            <Field type="text" className="form-control size" name={'name'}
                                                   placeholder="Tài khoản"/>
                                            <ErrorMessage name={'name'}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Email</label>
                                            <Field type="email" className="form-control size" name={'email'}
                                                   placeholder="Email"/>
                                        </div>

                                        <div className="form-group">
                                            <label>Mật khẩu</label>
                                            <Field type="password" className="form-control size" name={'password'}
                                                   placeholder="Mật khẩu"/>
                                            <ErrorMessage name={'password'}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Xác thực mật khẩu</label>
                                            <Field type="password" className="form-control size" name={'repeatPassword'}
                                                   placeholder="Xác thực tài khoản"/>
                                        </div>

                                        <div className="form-group">
                                            <label>Số điện thoại</label>
                                            <Field type="text" className="form-control size" name={'phone'}
                                                   placeholder="Số điện thoại"/>
                                        </div>
                                        <button type={'submit'} className="btn btn-primary size" style={{width:'22rem'}}>Đăng Ký</button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="container-img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthRegister;