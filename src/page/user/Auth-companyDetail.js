import '../../style/Auth-detail-company.css'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {workById} from "../../service/Work-service";

export default function AuthCompanyDetail() {
    const dispatch=useDispatch();
    const idCompany=useParams().id
     useEffect(()=>{
         dispatch(workById(idCompany))
     },[])
    let company=useSelector(state => {
        console.log('state',state)
        return state.work.workFind
    })
    return (
        <div>
            <div className="row" style={{marginBottom: -100}}>
                <div className="col-1"></div>
                <div className="col-10">
                    <img className="card-img-top"
                         src="https://cdn.pixabay.com/photo/2015/10/29/14/32/business-1012449_1280.jpghttps://cdn.pixabay.com/photo/2015/10/29/14/32/business-1012449_1280.jpg"
                         alt="Card image cap" style={{width: '100%', height: 400,objectFit:"cover"}}/>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row" style={{marginBottom: 60}}>
                <div className="col-1"></div>
                <div className="col-9" style={{marginLeft: 62}}>
                    <div className="card mb-3"
                         style={{height: 340, width: '100%', boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.1)'}}>
                        <div className="row">
                            <div className="col-2" style={{marginTop: 5}}><img
                                src={company?.image}
                                style={{width: '140%', padding: 21}}/>
                            </div>
                            <div className="col-10">
                                <div className="card-body">
                                    <h4><strong>{company?.name}</strong></h4>
                                    <p>This is a wider card with supporting text below as a
                                        natural
                                        lead-in to
                                        additional content. This content is a little bit longer.
                                    </p>
                                </div>
                                <div className="card-body" style={{marginTop: -20}}>
                                    <div className="row">
                                        <div className="col-2">
                                            <p>Địa điểm : </p>

                                        </div>
                                        <div className="col-3">
                                            <p><strong>{company.nameCity}</strong></p>

                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-2">
                                            <p>Gmail: </p>
                                            <p>Quy mô công ty</p>
                                        </div>
                                        <div className="col-4">
                                            <p style={{color: '#017eb7'}}>{company.email}</p>
                                            <p><strong>{company.numberStaff} nhân viên</strong></p>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="row">
                                    <div className="col-6"></div>
                                    <div className="col-6">

                                        <button className="button-50" role="button"><strong>XEM VIỆC LÀM ĐANG
                                            TUYỂN</strong></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="card" style={{height: 350, boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.1)'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{marginBottom: 30}}><strong>Thông tin công
                                        ty</strong></h5>
                                    <h6 className="card-title"><strong>Giới thiệu</strong></h6>
                                    <hr/>
                                    <p>{company.description}</p>
                                    <h6><strong>Văn hóa doanh nghiệp</strong></h6>
                                    <hr/>
                                    <h6 style={{marginTop: 10}}><strong>Địa chỉ văn phòng</strong></h6>
                                    <hr/>
                                    <p>{company.nameCity}, Việt Nam</p>

                                </div>
                            </div>
                            <div className="card"
                                 style={{marginTop: 17, height: '33%', boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.1)'}}>
                                <div className="col-5">
                                    <button className="button-50" role="button"><strong>XEM TẤT CẢ VIỆC
                                        LÀM</strong></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body" style={{boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.1)'}}>
                                    <h5 className="card-title"><strong>Thư viện ảnh công ty</strong></h5>
                                    <p className="card-text">Công ty chưa thêm bất kỳ hình ảnh nào.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}