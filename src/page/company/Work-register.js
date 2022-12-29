import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../../style/Auth-login.css'
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {workRegister} from "../../service/Work-service";
function WorkRegister() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .min(5, "Email không hợp lệ!")
            .max(50, "Email không hợp lệ!"),
        nameCompany: Yup.string()
            .min(5, "Tên không hợp lệ!")
            .max(40, "Tên không hợp lệ!"),
        phoneNumber: Yup.string()
            .min(6, "Số điện thoại không hợp lệ!")
            .max(30, "Số điện thoại không hợp lệ!"),
        address: Yup.string()
            .min(6, "Địa chỉ không hợp lệ!!")
            .max(70, "Địa chỉ không hợp lệ!")

    })
     const handleWorkRegister=async (values)=>{
        let checkRegister= await dispatch(workRegister(values))
         if (checkRegister.payload.checkRegister===true){
             navigate('/work/login')
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
                                nameCompany: '',
                                phoneNumber: '',
                                address: ''
                            }}
                                    validationSchema={SignupSchema}
                                    onSubmit={(values,{resetForm}) => {
                                        handleWorkRegister(values)
                                        resetForm()
                                        console.log(values)
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
                                        <Field type="text" required className="form-control size" name={'nameCompany'}
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
                                        <Field type="text" required className="form-control size" name={'address'}
                                               placeholder="Địa chỉ"/>
                                        <ErrorMessage name={'address'}/>
                                    </div>
                                    <button type={'submit'} className="btn btn-primary size">Đăng kí</button>
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

export default WorkRegister;
