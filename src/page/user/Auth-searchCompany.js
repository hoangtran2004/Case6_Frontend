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
                    dispatch(searchCompany(values))
                }}>
                    <Form>
                        <div className="row">
                            <div className="col-9 offset-2">
                                <div className="row">
                                    <div className="col-11">
                                        <div className="input-group mb-3">

                                            <Field style={{backgroundColor:'white',borderRadius:'5px'}} name={'key'} type="text" className="form-control" placeholder="Nhập từ khóa"/>
                                            <button id={'search'} style={{border:"none",backgroundColor:'#016999',marginLeft:20,color:'white',borderRadius:'5px'}}>Tìm kiếm</button>
                                        </div>


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
