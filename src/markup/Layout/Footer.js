import React, { useState } from "react";
import { Link } from "react-router-dom";
import SBELogo from "../../assests/SBE-Logo.png";
import NewDBELogo from "../../assests/New-dbe-logo.png";
import { showToastError, showToastSuccess } from "../../utils/toastify";
import india from "../../images/WhatsApp_Image_2024-05-11_at_19.51.05-removebg-preview.png";
import axios from "axios";
function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      return;
    }

    axios({
      method: "POST",
      url: "https://novajobs.us/api/jobseeker/user-subscribe",
      data: { email },
    })
      .then((res) => {
        console.log(res?.data?.message);
        showToastSuccess(res?.data?.message);
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
        showToastError(err?.response?.data?.message);
      });
  };
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between ">
            <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
              <div className="widget">
                {/* <img src={require("./../../images/logo-white.png")} width="180" className="m-b15" alt=""/> */}
                <Link to={"https://novajobs.us/"}>
                <img
                  src={require("./../../images/logo/NovaUS.png")}
                  width="180"
                  className="m-b15"
                  alt=""
                />
                  </Link>
               
                <p className="text-capitalize m-b20">
                  NovaJobs.US is an AI-Enabled HR Technology company based at
                  North Carolina, USA
                </p>
                <div className="subscribe-form m-b20">
                  <form
                    onSubmit={handleSubmit}
                    className="dzSubscribe"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={email}
                        required
                        className="form-control"
                        placeholder="Your Email Address"
                        style={{ color: "#1c2957" }}
                      />
                      <span className="input-group-btn">
                        <button type="submit" className="site-button radius-xl">
                          Subscribe
                        </button>
                      </span>
                    </div>
                    {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                  </form>
                </div>
                <ul className="list-inline m-a0">
                  <li>
                    <Link
                      to={"https://www.facebook.com/Novausjobs"}
                      className="site-button white facebook circle "
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    {/*<Link
                      to={""}
                      className="site-button white google-plus circle "
                    >
                      <i className="fa fa-google-plus"></i>
                    </Link>*/}
                  </li>
                  <li>
                    <Link
                      to={"https://www.linkedin.com/company/nova-us-jobs/"}
                      className="site-button white linkedin circle "
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  {/*<li>
                    <Link
                      to={""}
                      className="site-button white instagram circle "
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="site-button white twitter circle ">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>*/}
                </ul>
              </div>
            </div>
            <div className="col-col-xl-7  col-lg7col-xl-7  col-md-8 col-sm-8 col-12">
              <div className="widget border-0">
                <h5 className="m-b30 F-heading">Frequently Asked Questions</h5>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-sm-4 col-12">
                    <ul className="list-2 w10 list-line">
                      <li>
                        <Link to={"/employee/privacy-rights"}>
                          Privacy Rights
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/term-of-use-nova-jobs"}>
                          Terms of Use
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/accessibility-center"}>
                          Accessibility Center
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/cookies-digital-advertising"}>
                          Cookies & Digital Advertising
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/cooking-advertising-overview"}>
                          Cookies & Advertising
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/data-privacy-framework"}>
                          Data Privacy Framework
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/data-sharing-helps-you"}>
                          Data Sharing Helps
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-4 col-12">
                    <ul className="list-2 w10 list-line">
                      <li>
                        <Link to={"/employee/safeguard-from-email-scams"}>
                          Email Scams
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/general-contact-information"}>
                          General Contact Information
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/howitworks-for-candidates"}>
                          How It Works For Candidates
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/howitworks-for-employee"}>
                          How It Works For Employee
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/information-novaus-jobs"}>
                          Information of NovaUs Jobs
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-4 col-12">
                    <ul className="list-2 w10 list-line">
                      <li>
                        <Link
                          to={
                            "/employee/international-transfer-of-personal-information"
                          }
                        >
                          International Transfer
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/online-interview-scams"}>
                          Online Interview Scams
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/resume-security"}>
                          Resume Security
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/employee/retention-period-resume-visibility"}
                        >
                          Retention Period
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/scope-privacy-notice"}>
                          Scope Privacy Notice
                        </Link>
                      </li>
                      <li>
                        <Link to={"/employee/security-bug-reporting"}>
                          Security Bug Reporting
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/employee/security-center-account-management"}
                        >
                          Security Center Account Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <ul className="list-2 w10 list-line">
                  <li>
                    <Link to={"/employee/privacy-rights"}>Privacy Rights</Link>
                  </li>
                  <li>
                    <Link to={"/employee/term-of-use-nova-jobs"}>
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/accessibility-center"}>
                      Accessibility Center
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/cookies-digital-advertising"}>
                      Cookies & Digital Advertising
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/cooking-advertising-overview"}>
                      Cookies & Advertising
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/data-privacy-framework"}>
                      Data Privacy Framework
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/data-sharing-helps-you"}>
                      Data Sharing Helps
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/safeguard-from-email-scams"}>
                      Email Scams
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/general-contact-information"}>
                      General Contact Information
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/howitworks-for-candidates"}>
                      How It Works For Candidates
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/howitworks-for-employee"}>
                      How It Works For Employee
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/information-novaus-jobs"}>
                      Information of NovaUs Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "/employee/international-transfer-of-personal-information"
                      }
                    >
                      International Transfer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/online-interview-scams"}>
                      Online Interview Scams
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/resume-security"}>
                      Resume Security
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/retention-period-resume-visibility"}>
                      Retention Period
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/scope-privacy-notice"}>
                      Scope Privacy Notice
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/security-bug-reporting"}>
                      Security Bug Reporting
                    </Link>
                  </li>
                  <li>
                    <Link to={"/employee/security-center-account-management"}>
                      Security Center Account Management
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
            {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
              <div className="widget border-0">
                <h5 className="m-b30 F-heading">Find Jobs</h5>
                <ul className="list-2 w10 list-line">
                  <li>
                    <Link to={""}>US Jobs</Link>
                  </li>
                  <li>
                    <Link to={""}>Canada Jobs</Link>
                  </li>
                  <li>
                    <Link to={""}>UK Jobs</Link>
                  </li>
                  <li>
                    <Link to={""}>Emplois en Fnce</Link>
                  </li>
                  <li>
                    <Link to={""}>Jobs in Deuts</Link>
                  </li>
                  <li>
                    <Link to={""}>Vacatures China</Link>
                  </li>
                </ul>
              </div>
            </div>  */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <span>
                {" "}
                © Copyright by{" "}
                <img
                  src={india}
                  alt=""
                  style={{
                    width: "40px",
                  }}
                />{" "}
                <strong style={{ color: "white", fontWeight: "bold" }}>Hyper V Solutions</strong> | All Rights Reserved
              </span>
              <span className="float-right">
                <span className="m-2">
                  <img
                    src={SBELogo}
                    alt="SBE Logo"
                    style={{ height: "50px" }}
                  />
                </span>
                <span className="m-2">
                  <img
                    src={NewDBELogo}
                    alt="SBE Logo"
                    style={{ height: "50px" }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
