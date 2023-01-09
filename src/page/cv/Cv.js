import '../../style/cv.css'

export function Cv() {
    return (<div className="container">
        <div className="cv">
            <div className="sizebar">
                <div className="page">
                    <div className="profile pro__info__skill__lang">
                        <i className="bi bi-person-fill"></i> PROFILE
                        <div className="under"></div>
                        <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                    <div className="information pro__info__skill__lang">
                        <i className="bi bi-phone-vibrate-fill"></i> INFORMATION
                        <div className="under"></div>
                        <div className="row">
                            <div className="col-1">
                                <div>
                                    <div className="icon"><i className="bi bi-person"></i></div>
                                    <div className="icon"><i className="bi bi-envelope"></i></div>
                                    <div className="icon"><i className="bi bi-phone"></i></div>
                                    <div className="icon"><i className="bi bi-geo-alt"></i></div>
                                    <div className="icon"><i className="bi bi-github"></i></div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="infor">
                                    <div className="birthday"> 19/2/2002</div>
                                    <div className="email"> Minhanh190202@gmai.com</div>
                                    <div className="phone"> 0978363413</div>
                                    <div className="address"> Văn Đức, Gia Lâm, Hà Nội</div>
                                    <div className="github"> github.com/tminh1902</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skill pro__info__skill__lang">
                        <i className="bi bi-person-lines-fill"></i> SKILL
                        <div className="under"></div>
                        <div className="row">
                            <div className="col-1">
                                <div className="talent">
                                    <p className="css">CSS</p>
                                    <p className="HTML">HTML</p>
                                    <p className="Javascript">Javascript</p>
                                    <p className="React">React</p>
                                    <p className="Nodejs">Nodejs</p>
                                    <p className="MySQL">MySQL</p>
                                    <p className="PHP">PHP</p>
                                    <p className="git">Git</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="rectangle">
                                    <div className="CSS rectangles">
                                        <div className="rectangle1"></div>
                                        <div className="rectangle1"></div>
                                        <div className="rectangle1"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                    <div className="HTML rectangles">
                                        <div className="rectangle1"></div>
                                        <div className="rectangle1"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                    <div className="Javascript rectangles">
                                        <div className="rectangle1"></div>
                                        <div className="rectangle1"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                    <div className="React rectangles">
                                        <div className="rectangle1"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                    <div className="Nodejs rectangles">
                                        <div className="rectangle1"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                    <div className="MySQL rectangles">
                                        <div className="rectangle1"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                    <div className="PHP rectangles">
                                        <div className="rectangle1"></div>
                                        <div className="rectangle1"></div>
                                        <div className="rectangle2"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                    <div className="git rectangles">
                                        <div className="rectangle1"></div>
                                        <div className="rectangle1"></div>
                                        <div className="rectangle1"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="language pro__info__skill__lang">
                        <i className="bi bi-layers-fill"></i> LANGUAGE
                        <div className="under"></div>
                        <div className="lang">
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li>English :</li>
                                        <li>Vietnamese :</li>
                                        <li>Chinese :</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <p className="lang1">Toic 850</p>
                                    <p className="lang1">Native language</p>
                                    <p className="lang1">HK3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="worke_experience">
                    <div className="head">
                        <i className="bi bi-briefcase"></i> WORK EXPERIENCE
                    </div>
                    <div className="content_1">
                        <div className="circle-bricks">
                            <div className="circle"></div>
                            <div className="bricks"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="small_content_1">
                            <div className="row">
                                <div className="col">
                                    <p className="food">FOOD POT AGENCY</p>
                                    <p className="firmware">FIRMWARE ENGINEER, INTERN</p>
                                </div>
                                <div className="col">
                                    <p className="date">06/2015 - 08/2016</p>
                                </div>
                            </div>
                            <ul className="knowledge">
                                <li>Improved device's battery lifespan by 8% by integrating a fuel gauge sensor and
                                    establishing a battery saving state
                                </li>
                                <li>Utilized the 12C protocol to implement a device driver for the fuel gauge and
                                    used it to create a low power state
                                </li>
                                <li>Increased available flash memory by 66% through redesigning the flash data
                                    storage system with a circular buffer
                                </li>
                                <li>implementation that supported variable-sized records
                                    Leveraged knowledge in Git, ARM Cortex-M4 architecture, programmed in C using
                                    Keil IDE, and debugged using an
                                    Oscilloscope, Multimeter, Memory Analyzer, and JTAG/SWD debugging interface
                                </li>
                            </ul>
                            <div className="small_content_1_1">
                                <div className="row">
                                    <div className="col">
                                        <p className="food">TINKERCAD 3D COMPANY</p>
                                        <p className="firmware">SOFTWARE DEVELOPER,INTERN</p>
                                    </div>
                                    <div className="col">
                                        <p className="date">06/ 2015 - 08/2015</p>
                                    </div>
                                </div>
                                <ul className="knowledge">
                                    <li>Increased available flash memory by 66% through redesigning the flash data
                                        storage system with a circular buffer
                                        implementation that supported variable-sized records.
                                    </li>
                                    <li>Integrated multi-touch gestures for 3D workspaces by creating a
                                        deterministic finite state machine for HTML events
                                    </li>
                                    <li>IImplemented a low-pass and smoothing function to allow for a user-friendly
                                        touch experience
                                    </li>
                                    <li>Established remote testing and coding development environment using Docker
                                        and bash scripts.
                                    </li>
                                    <li>Leveraged knowledge in Full Stack Web development, JavaScript, Git, and
                                        debugged using Chrome Developer Tools.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="head">
                        <i className="bi bi-laptop"></i> PROJECT
                    </div>
                    <div className="content_2">
                        <div className="circle-bricks_2">
                            <div className="circle"></div>
                            <div className="bricks bricks_1"></div>
                            <div className="circle"></div>
                            <div className="bricks bricks_2"></div>
                            <div className="circle"></div>
                            <div className="bricks bricks_3"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="small_content_2">
                            <p className="ios"> IOS MEME APP </p>
                            <ul className="knowledge">
                                <li>Developed an iOS application using Swift and Objective-C that allows users to
                                    easily create and share memes.
                                </li>
                                <li>Integrated openCV library allowing users to effortlessly apply photo filters and
                                    effects
                                </li>
                                <li>Incorporated persistent data storage to archive memes. Leveraged caching for
                                    recently accessed memes.
                                </li>
                                <li>Designed RESTful backend server enabling memes to be stored persistently in an
                                    online database
                                </li>
                                <li>Utilized: Swift. Obi-C. Local Persistent Data, Caching, Cloud Storage, Python,
                                    Flask, SQLite, openCV
                                </li>
                            </ul>
                            <p className="autonomous ios">AUTONOMOUS RC CAR + VIRTUAL DRIVING</p>
                            <ul className="knowledge">
                                <li>Designed and implemented PID speed control for an RC car by constructing a Hall
                                    effect circuit to measure speed and a PWM motor controller circuit to control
                                    speed.
                                </li>
                                <li>Added autonomous driving by constructing an image processing circuit and
                                    implementing PID steering control.
                                </li>
                                <li>Created a 'virtual driving experience' by manufacturing a gimbal mount and
                                    creating an iOS app that wirelessly displays and operates the cameras FOV and
                                    direction. The app also remotely controls speed and steering.
                                </li>
                                <li>Utilized: C programming, PSoC, Socket (IP/TCP) Programming, O-scope, Multimeter,
                                    Arduino, Web & iOS Dev
                                </li>
                            </ul>
                            <p className="home ios">HOME AUTOMATION</p>
                            <ul className="knowledge">
                                <li>Created an Android App that bit-banged BeagleBone's 12C module to read
                                    temperature data off the DS162
                                </li>
                                <li>Utilized: C programming, BeagleBone Microcontroller, Oscilloscope, Circuit
                                    Design, Android Development.
                                </li>
                            </ul>
                            <p className="real ios">REAL-TIME INTERACTIVE 3D-GRAPHICS WEBSITE</p>
                            <ul className="knowledge">
                                <li>Developed an interactive graphics website using THREE.js to create a 3D
                                    workspace with real-time animated 3D models of crystal lattice structures and
                                    robotic parts in which animations and camera views can be manipulated.
                                </li>
                                <li>Inspired from struggling with visualizing 3D models while taking a materials
                                    science class .
                                </li>
                                <li>Utilized: Python, Flask, Heroku, JavaScript, AJAX, THREE.js, HTML/CSS, Docker,
                                    GIT
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <div className="head">
                        <i className="bi bi-award"></i> EDUCATION
                        <div className="content_3">
                            <div className="circle"></div>
                            <div className="school">
                                <p className="printceton">PRINCETON UNIVERSITY</p>
                                <p className="computer">COMPUTER SCIENCE (GPA: 3.44)</p>
                            </div>
                            <div className="year">
                                <p className="school_year"> 2013-2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="item">
            <div className='avatar'>
                <img className="avt"
                     src="https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-43.jpg"
                     alt="avatar"/>
            </div>
            <div className="nav">
                <p className="TERRENCE">TERRENCE KUO</p>
                <p className="ELECTRICAL">ELECTRICAL ENGINEER</p>
            </div>
        </div>
    </div>)

}