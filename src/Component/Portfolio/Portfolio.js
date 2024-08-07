import React from "react";
import "./Portfolio.css";
import Header from "./Header";
import FooterIcons from "./FooterIcons";
import ProfileImg from "./Images/pro-cercle.png";
import ProfileBor from "./Images/pro-cercle-order.png";
import ProfileCer from "./Images/pro-cer-up.png";
import MainImg from "./Images/profile-img.png";
import SideLine from "./Images/line.png";
import DownloadLogo from "./Images/download-logo.png";
import ResumePdf from "./Resume/sawan.pdf";
import About_img from "./Images/about_img.png"
import About_img_up from "./Images/about-up.png"
import RightArow from "./Images/right.png"
import Bg_brus1 from "./Images/bg-brus-1.png"
import Bg_brus2 from "./Images/bg-brus-2.png"
import Bg_brus3 from "./Images/bg-brus-3.png"
import Dot_1 from "./Images/dot-1.png"
import LeftArow from './Images/left.png'
import JointCurv from './Images/join-cruv.png'


const ProgressBar = (progressData) => {
  let progressHtml = []
  for (let i = 1; i <= 12; i++) {
    if (i <= progressData.progressData) {
      progressHtml.push(<div className="skill-width" style={{ backgroundColor: '#b11ab1' }}></div>)
    } else {
      progressHtml.push(<div className="skill-width"></div>)
    }
  }
  return (
    <>
      {progressHtml}
    </>
  )
}


function Portfolio() {

  const Images = [
    ProfileImg
  ];

  const FooterIconss = [{
    anchor_class: "fa-brands fa-facebook-f",
    href: "http://3idiotdiary.free.nf/employee/attendence?i=1"
  },
  {
    anchor_class: "fa-brands fa-instagram",
    href: "http://instagram.com/_rao_savan"
  },
  {
    anchor_class: "fa-brands fa-twitter",
    href: "http://3idiotdiary.free.nf/employee/attendence?i=1"
  },
  {
    anchor_class: "fa-brands fa-youtube", href: "http://3idiotdiary.free.nf/employee/attendence?i=1"
  }
  ]

  return (
    <>
      <div className="portfolio-sec">
        <section className="home-sec" id="home-sec">
          <div className="side_line">
            <img src={SideLine} alt="" />
          </div>
          <div className="side_socil_btn">
            <a href="/">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          <div className="home-sec-bg-main d-flex w-100 h-100">
            <div className="home-sec-bg-blank"></div>
            <div className="home-sec-bg"></div>
          </div>
          <div className="container p-0 pt-md-4">
            <Header />
            
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="profile-sec">
                  <h4>FRONT - END WEB DEVELOPER</h4>
                  <h1 className="mt-2 mt-md-4">SAWAN KUMAR</h1>
                  <h1>YADAV</h1>

                  <div className="profile-sec-bio">
                    <p>I’m a front-end</p>
                    <p>web developer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 position-relative img-center-user">
                <div className="profile-img-sec">
                  <img
                    className="profile-img-1 rotate"
                    src={Images}
                    alt=""
                  />
                  <img className="profile-img-2" src={ProfileBor} alt="" />
                  <img
                    className="profile-img-3 rotate"
                    src={ProfileCer}
                    alt=""
                  />
                  <img className="profile-img-4" src={MainImg} alt="" />
                </div>
                <div className="cv-btn-sec">
                  <a className="cv-btn" download={ResumePdf} href={ResumePdf}>
                    <img src={DownloadLogo} alt="" />
                    <div>CV</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about_me" className="about_me position-relative">

          <img className="bg-imgs-1" src={Bg_brus1} alt="" />
          <img className="bg-imgs-2" src={Bg_brus2} alt="" />
          <img className="bg-imgs-3" src={Bg_brus3} alt="" />
          <img className="bg-imgs-4" src={Dot_1} alt="" />

          <div className="container position-relative z-2">
            <div className="row">
              <div className="col-md-6 order-2 order-md-">
                <div className="about-img-sec m-md-0 mt-4 d-flex justify-content-center align-items-center">
                  <img src={About_img} alt="" />
                  <img className="rotate" src={About_img_up} alt="" />
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="about-details position-relative">
                  <img src={RightArow} alt="" className="right-arow" />
                  <h1 className="m-0 mt-md-5 about-hedding">About</h1>
                  <h1 className="mb-3">me</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas tenetur id repudiandae, soluta error ipsum, quidem velit ducimus dolore eaque rerum. Praesentium ipsum eveniet amet odit eos beatae quaerat mollitia?</p>
                  <a href="/">Contact me</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-sec" id="skills-sec">
          <div className="container">
            <div className="skill-hedding position-relative">
              <img src={LeftArow} alt="" />
              <h1>My Skills</h1>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-3 skils">
                    <div className="skill-name">
                      <h6>HTML</h6>
                    </div>
                  </div>

                  <div className="col-9 skils">
                    <ProgressBar progressData="7" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 skils">
                    <div className="skill-name">
                      <h6>CSS</h6>
                    </div>
                  </div>

                  <div className="col-9 skils">
                    <ProgressBar progressData="8" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 skils">
                    <div className="skill-name">
                      <h6>React js</h6>
                    </div>
                  </div>

                  <div className="col-9 skils">
                    <ProgressBar progressData="4" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 skils">
                    <div className="skill-name">
                      <h6>Jquery</h6>
                    </div>
                  </div>

                  <div className="col-9 skils">
                    <ProgressBar progressData="5" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="row ">
                  <div className="col-3 skils">
                    <div className="skill-name">
                      <h6>bootstrap</h6>
                    </div>
                  </div>

                  <div className="col-9 skils">
                    <ProgressBar progressData="7" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 skils">
                    <div className="skill-name">
                      <h6>Javascript</h6>
                    </div>
                  </div>

                  <div className="col-9 skils">
                    <ProgressBar progressData="3" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 skils">
                    <div className="skill-name">
                      <h6>Figma</h6>
                    </div>
                  </div>

                  <div className="col-9 skils">
                    <ProgressBar progressData="7" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 skils">
                    <div className="skill-name">
                      <h6>Photoshop</h6>
                    </div>
                  </div>

                  <div className="col-9 skils">
                    <ProgressBar progressData="9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact_me position-relative" id="contact_me" >
          <img className="bg-imgs-5" src={Bg_brus1} alt="" />
          <img className="bg-imgs-6" src={Bg_brus2} alt="" />
          <img className="bg-imgs-7" src={Bg_brus3} alt="" />
          <img className="bg-imgs-8" src={JointCurv} alt="" />
          <img className="bg-imgs-9" src={Dot_1} alt="" />
          <div className="container position-relative z-1">
            <h1 className="contact_me_hadding">Contact Me</h1>

            <div className="contact_form mt-4 mx-auto position-relative z-0">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Full Name<span>*</span></label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Email<span>*</span></label>
                  <input type="email" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message<span>*</span></label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" className="btn submit_btn">Submit</button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="footer_hadding">Follow me</h1>
              </div>
              <div className="col-md-6">
                <div className="footer_icons mt-3 d-flex justify-content-around gap-4">
                  {FooterIconss.map((item) => (
                    <FooterIcons anchorClass={item.anchor_class} href={item.href} />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Portfolio;
