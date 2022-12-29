import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../style/Auth-register.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authRegister} from "../../service/Auth-service";

function AuthRegister() {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleRegister = async (values) => {
        if (values.name.length < 8) {
            alert("Tên người dùng phải từ 8 ký tự")

        } else if (values.password.length < 8) {
            alert(" Mật khẩu của bạn quá ngắn hãy nhập lại")

        } else if (values.password !== values.repeatPassword) {
            alert('Mật khẩu không hợp lệ')
        } else {
            let checkRegister = await dispatch(authRegister(values))
            console.log(checkRegister)
            if (checkRegister.payload.checkRegister === true) {
                navigate('/auth/login')
            } else {
                alert("Email đã được sử dụng")
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
                                        <button type={'submit'} className="btn btn-primary size">Đăng Ký</button>
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