import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../style/Auth-login.css'
import * as Yup from "yup";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authLogin} from "../../service/Auth-service";
import Swal from "sweetalert2";

export default function AuthLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch ();

    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(5, 'Tối thiểu 5 ký tự')
            .max(30, 'Tối đa 30 ký tự')
            .required('Vui lòng nhập')
    });
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    })

    const handleAuthLogin = async (value) => {
        let checkAuthLogin = await dispatch(authLogin(value))
        if(checkAuthLogin.payload.checkLogin === false){
           await Toast.fire({
                icon: 'error',
                title: 'Tài khoản hoặc mật khẩu không chính xác.'
            })
        }else {
           await navigate('/')
        }
    }
    return (
        <>
            <div className="container-Login">
                <div className="container-FormLogin">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="container-input display">
                                <Formik initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                        validationSchema={SignupSchema}
                                        onSubmit={(values,{resetForm}) => {
                                            handleAuthLogin(values).then()
                                            resetForm()
                                        }}>
                                    <Form>
                                        <h3>Đăng nhập với người dùng</h3>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <Field type="email" className="form-control size" name={'email'}
                                                   placeholder="Tài khoản email"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Mật khẩu</label>
                                            <Field type="password" className="form-control size" name={'password'}
                                                   placeholder="Mật khẩu"/>
                                            <ErrorMessage name={'password'}/>
                                        </div>
                                        <button type={'submit'} className="btn btn-primary size" style={{width:'25rem'}}>Đăng nhập</button>
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
    )
}
