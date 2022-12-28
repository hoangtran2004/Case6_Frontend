import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../style/Auth-login.css'
import * as Yup from "yup";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function AuthLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch ();

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(5, 'Tối thiểu 5 ký tự')
            .max(30, 'Tối đa 30 ký tự')
            .required("Vui lòng nhập"),
        password: Yup.string()
            .min(5, 'Tối thiểu 5 ký tự')
            .max(30, 'Tối đa 30 ký tự')
            .required('Vui lòng nhập')
    })

    const handleChange = async (value) => {

    }
    return (
        <>
            <div className="container-Login">
                <div className="container-FormLogin">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="container-input display">
                                <Formik initialValues={{
                                    username: '',
                                    password: ''
                                }}
                                        validationSchema={SignupSchema}
                                        onSubmit={(values) => {

                                        }}>
                                    <Form>
                                        <h3>Đăng nhập với người dùng</h3>
                                        <div className="form-group">
                                            <label>Tài khoản</label>
                                            <Field type="text" className="form-control size" name={'username'}
                                                   placeholder="Tài khoản"/>
                                            <ErrorMessage name={'username'}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Mật khẩu</label>
                                            <Field type="password" className="form-control size" name={'password'}
                                                   placeholder="Mật khẩu"/>
                                            <ErrorMessage name={'password'}/>
                                        </div>
                                        <button className="btn btn-primary size">Đăng nhập</button>
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
