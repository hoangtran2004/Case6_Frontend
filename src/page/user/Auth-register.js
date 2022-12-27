import React from 'react';
import {Field, Form, Formik} from "formik";
import '../../style/Auth-register.css'
function AuthRegister() {
    return (
        <>
            <div className="container-Register">
                <div className="container-FormRegister">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="container-input display-register">
                                <Formik initialValues={{}} onSubmit={() => {
                                }}>
                                    <Form>
                                        <h3>Đăng ký với người dùng</h3>
                                        <div className="form-group">
                                            <label>Tài khoản</label>
                                            <Field type="text" value={''} className="form-control size"
                                                   placeholder="Tài khoản"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <Field type="email" value={''} className="form-control size"
                                                   placeholder="Email"/>
                                        </div>

                                        <div className="form-group">
                                            <label>Mật khẩu</label>
                                            <Field type="password" value={''} className="form-control size"
                                                   placeholder="Mật khẩu"/>
                                        </div>

                                        <div className="form-group">
                                            <label>Xác thực mật khẩu</label>
                                            <Field type="password" value={''} className="form-control size"
                                                   placeholder="Xác thực tài khoản"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Số điện thoại</label>
                                            <Field type="text" value={''} className="form-control size"
                                                   placeholder="Số điện thoại"/>
                                        </div>
                                        <button className="btn btn-primary size">Đăng Ký</button>
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