import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../style/Auth-login.css'
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {workLogin} from "../../service/Work-service";

function WorkLogin() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(5, 'Tối thiểu 5 ký tự')
            .max(30, 'Tối đa 30 ký tự')
            .required('Vui lòng nhập')
    })

    const handleWorkLogin = async (values) =>{
        let checkWorkLogin = await dispatch(workLogin(values))
        console.log(checkWorkLogin)
        try {
            if(checkWorkLogin.payload.token){
                navigate('/work/')
                console.log("anh Linh ")
            }else {
                alert(" Tài khoản hoặc mật khẩu doanh nghiệp không chính xác")
            }
        }catch (e){
            console.log(e)
        }
    }


    return (
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
                                    onSubmit={(values) => {
                                        console.log(values)
                                        handleWorkLogin(values).then()
                                    }}>
                                <Form>
                                    <h3>Đăng nhập với doanh nghiệp</h3>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <Field type="email" required className="form-control size" name={'email'}
                                               placeholder="Tài khoản email"/>
                                        <ErrorMessage name={'email'}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <Field type="password" required className="form-control size" name={'password'}
                                               placeholder="Mật khẩu"/>
                                        <ErrorMessage name={'password'}/>
                                    </div>
                                    <button type={'submit'} style={{maxWidth:"25rem"}} className="btn btn-primary size">Đăng nhập</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="container-imgWork"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkLogin;
