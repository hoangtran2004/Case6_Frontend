import '../../style/Auth-home.css'
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {searchCompany} from "../../service/Work-service";
export default function AuthSearchCompany() {
    const dispatch = useDispatch()
    return (
        <>
            <div className="contain-search">
                <Formik initialValues={{
                    name: ''
                }} onSubmit={(values)=>{
                    console.log(values)
                    dispatch(searchCompany(values))
                }}>
                    <Form>
                        <div className="row">
                            <div className="col-9 offset-2">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="form-group">
                                            <Field type={'text'} name={'name'}
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
