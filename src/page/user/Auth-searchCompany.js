import '../../style/Auth-home.css'
import {Field, Form, Formik} from "formik";
export default function AuthSearchCompany() {
    return (
        <>
            <div className="contain-search">
                <Formik initialValues={{
                    key: ''
                }} onSubmit={()=>{}}>
                    <Form>
                        <div className="row">
                            <div className="col-9 offset-2">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="form-group">
                                            <Field type={'text'} name={'key'}
                                                   placeholder={'Tìm kiếm công ty...'}
                                                   className={'form-control'} style={{width:'95%',marginLeft:'6.5%',backgroundColor:'white'}}>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <button type={'submit'} className="btn btn-primary" style={{marginLeft:'6%',width:'40%'}}>Tìm kiếm</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )

}
