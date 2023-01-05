import React from "react";
import "../../style/Auth-job-detail.css"

export default function AuthJobDetail() {
    function myFunction(dot, more, btn) {
        let dots = document.getElementById(dot);
        let moreText = document.getElementById(more);
        let btnText = document.getElementById(btn);

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Xem thêm";

            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Ẩn bớt";
            moreText.style.display = "inline";
        }
    }

    return (
        <div>
            <div className='row'>
                <div className="col-1">
                    <img id='img' src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-56.jpg" style={{float: 'right'}} alt={''}/>
                </div>
                <div className="col-7">
                    <h6>PROJECT COORDINATOR - FRENCH</h6>
                    <a href='#'><h6>Hiventy Asia</h6></a>
                    <div style={{margin: 10}}>
                        <p style={{height: 10}}><img
                            src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                            alt=""
                            className="icon-description-work"/> IDR100 - 200/Tháng</p>
                        <p style={{height: 10}}><img
                            src="https://cdn-icons-png.flaticon.com/128/2942/2942842.png"
                            alt=""
                            className="icon-description-work"/> Management</p>
                        <p style={{height: 10}}><img
                            src="https://cdn-icons-png.flaticon.com/128/439/439398.png"
                            alt=""
                            className="icon-description-work"/>Full time</p>
                        <div style={{marginTop: 50}}>
                            <button id='btn1' data-toggle="modal"
                                    data-target="#staticBackdrop"
                                    style={{backgroundColor: '#017eb7', color: "white"}}>Gửi hồ sơ
                            </button>
                        </div>

                        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
                             tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content" style={{width: "90%", height: 600}}>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-label="Close" style={{marginLeft: 410, marginTop: 10}}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="modal-header mt-2">
                                        <h5 className="modal-title" id="staticBackdropLabel"
                                            style={{textAlign: "center"}}>Bạn hiện đang ứng tuyển cho Company với vị trí
                                            Job</h5>
                                    </div>
                                    <div className="modal-body">
                                        <h6>Hồ sơ xin việc*</h6>
                                        <button type="button" id='btn12'>Đăng tải hồ sơ của tôi</button>
                                        <div id='style1'>
                                            <h6>Lưu ý : đảm bảo hồ sơ xin việc của bạn sử dụng ngôn ngữ trùng khớp với
                                                mô tả
                                                công việc (Ví dụ: viết CV bằng tiếng Anh nếu mô tả công việc bằng tiếng
                                                Anh)
                                                và đăng tải dưới dạng PDF dưới 5MB.</h6>
                                            <h6>Hồ sơ đã đăng tải sẽ được lưu lại cho lần nộp đơn sau.</h6>
                                        </div>
                                        <input id='input' className='form-control' placeholder='Nhập số điện thoại'/>
                                        <div id='style1'>
                                            <h6>Ví dụ: +84912345678.</h6>
                                            <h6> Nhà tuyển dụng cần thông tin này để liên lạc với bạn nhanh chóng.</h6>
                                        </div>
                                        <button id='btn13'>Ứng tuyển ngay</button>
                                        <div id='style'>
                                            <h6>Bạn chưa chuẩn bị hồ sơ?</h6>
                                            <h6>Hãy trở lại việc làm để ứng tuyển sau.</h6>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 style={{marginTop: 30}}>Chi tiết công việc PROJECT COORDINATOR - FRENCH tại Hiventy
                            Asia</h6>
                        <br/>
                        <h6>Mô tả công việc</h6>
                        <p>- Plan the work schedule and the workflow.
                            - Negotiate freelancers’ fees, when necessary.
                            - Assign tasks to resources and follow-up.
                            - Prepare all the necessar<span id="dots">...</span>
                            <btn id="more">y documents: project briefing, guidelines, etc.
                                - Ensure that each production step is properly implemented.
                                - Ensure that all deadlines are met.
                                - Check the quality of the files produced.
                                - Keep a record of each project and each client’s details.
                                - Other assistance-related tasks as assigned by the management.
                                Ms. Vy DINH
                                M : +84 28.62.81.87.35
                                215/F9 Nguyen Van Huong - Thao Dien – HCMC - Việt Nam
                            </btn>
                        </p>
                        <button onClick={() => {
                            myFunction('dots', 'more', 'myBtn')
                        }} id="myBtn" style={{backgroundColor: 'white', border: 'none', color: 'blue'}}>Xem thêm
                        </button>
                    </div>
                    <div className="card" style={{}}>
                        <h6 style={{textAlign: "center", marginTop: '2%'}}>Giới thiệu về công ty</h6>
                        <div className="card-body">
                            <img id='img' src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-56.jpg" alt={''}/>
                            <h5 className="card-title">Sex company</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{marginRight: 10}}>Media Production ||
                                51-200 nhân viên</h6>
                            <p>Hiventy Asia, created in 2009, is the Asian branch of Hiventy Group, which was founded in
                                1984 in Paris, France. Hiventy Group provides audiovisual technical services in 4 main
                                areas:
                                Localization
                                Post-production
                                Content delivery
                                Film restoration
                                Hiventy Asia handles the coordi<span id="change">...</span>
                                <btn id="mText">nation of high-end dubbing and subtitling works into more than 25
                                    languages, while the group manages more than 75. For our content localization
                                    services, we rely on our in-house dubbing studios and offices in France, Poland,
                                    Vietnam, Singapore, Kenya ad Nigeria, highly selected partner dubbing studios all
                                    over the world, and a large network of skilled and in-house trained translators and
                                    linguist specialists. Among our recognitions: Official partner of the Cannes Film
                                    Festival, Netflix Preferred Partner, and iTunes Preferred Encoding House.
                                </btn>
                            </p>
                            <button onClick={() => {
                                myFunction('change', 'mText', 'btnText')
                            }} id="btnText" style={{backgroundColor: 'white', border: 'none', color: 'blue'}}>Xem thêm
                            </button>
                            <h6>Địa chỉ văn phòng</h6>
                            <p>215/F9 Nguyen Van Huong - Thao Dien, District 2 Ho Chi Minh City</p>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <h6>Các công việc khác của công ty</h6>
                    <div className="card" id='card'>
                        <div className="card-body">
                            <img id='img'
                                 src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-56.jpg" alt={''}/>
                            <h5 className="card-title">Sex company</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Hcm city,Vietnam</h6>

                            <p className="card-text"><img
                                src="https://cdn-icons-png.flaticon.com/128/4300/4300058.png"
                                alt=""
                                className="icon-description-work"/> Công ty</p>
                            <p className="card-text"><img
                                src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                                alt=""
                                className="icon-description-work"/>
                                <a href="#" className="card-link"> 1 vị trí đang tuyển</a></p>
                            <p className="card-text" id='word'><img
                                src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                                alt=""
                                className="icon-description-work"/> Hoạt động 20
                                phút
                                trước</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}