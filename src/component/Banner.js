import '../style/Banner.css'
import React from "react";
export default function Banner() {
    return(
        <>
            <div className='container-fluid' style={{marginTop:'67px'}}>
                <div className='row'>
                    <div className='col-7 left-banner display-left-banner'>
                        <div className={''}>
                            <h2 className={'title-banner'}></h2>
                            <p className={'content-text-banner'}>Tìm kiếm những nhà phát triển tiềm năng phù hợp với nhu cầu doanh nghiệp.</p>
                        </div>
                    </div>

                    <div className='col-5 right-banner display-right-banner'>
                        <img src="https://media.istockphoto.com/id/1407354641/photo/group-of-diverse-executive-managers-doing-paperwork-at-meeting.jpg?b=1&s=170667a&w=0&k=20&c=68_dYMgVILLmUprxyZTsi2giEmgbeBOfmqsf8x4cD6w=" alt="" className={'banner-img'}/>
                    </div>
                </div>
            </div>

        </>
    )
}