import {Formik, Form, Field} from "formik";
import '../style/Auth-login.css'
import {Link} from "react-router-dom";

export default function AuthLogin() {
    return (
        <>

            <div className="container-Login">
                <div className="container-FormLogin">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="container-input display">
                                <Formik initialValues={{}} onSubmit={() => {
                                }}>
                                    <Form>
                                        <h3>Đăng nhập với người dùng</h3>
                                        <div className="form-group">
                                            <label>Tài khoản</label>
                                            <Field type="text" value={''} className="form-control size"
                                                   placeholder="Tài khoản"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Mật khẩu</label>
                                            <Field type="password" value={''} className="form-control size"
                                                   placeholder="Mật khẩu"/>
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
