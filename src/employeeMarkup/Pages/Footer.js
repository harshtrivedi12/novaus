import React from "react";
import { Link } from "react-router-dom";
import india from "../../images/WhatsApp_Image_2024-05-11_at_19.51.05-removebg-preview.png";
import SBELogo from "../../assests/SBE-Logo.png";
import NewDBELogo from '../../assests/New-dbe-logo.png';

function EmployeeFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry has been the industry's standard dummy
                  text ever since the.
                </p>
                <div className="subscribe-form m-b20">
                  <form
                    className="dzSubscribe"
                    action="script/mailchamp.php"
                    method="post">
                    <div className="dzSubscribeMsg"></div>
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        className="form-control"
                        placeholder="Your Email Address"
                        type="email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button radius-xl">
                          Subscribe
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <ul className="list-inline m-a0">
                  <li>
                    <Link
                      to={"https://www.facebook.com/Novausjobs"}
                      className="site-button white facebook circle ">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    {/*<Link
                      to={""}
                      className="site-button white google-plus circle ">
                      <i className="fa fa-google-plus"></i>
                    </Link>*/}
                  </li>
                  <li>
                    <Link
                      to={"https://www.linkedin.com/company/nova-us-jobs/"}
                      className="site-button white linkedin circle ">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  {/*<li>
                    <Link
                      to={""}
                      className="site-button white instagram circle ">
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
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8 col-12">
              <div className="widget border-0">
                <h5 className="m-b30 text-white">Frequently Asked Questions</h5>
                {/* <ul className="list-2 list-line">
                  <li>
                    <Link to={""}>Privacy & Seurty</Link>
                  </li>
                  <li>
                    <Link to={""}>Terms of Serice</Link>
                  </li>
                  <li>
                    <Link to={""}>Communications</Link>
                  </li>
                  <li>
                    <Link to={""}>Referral Terms</Link>
                  </li>
                  <li>
                    <Link to={""}>Lending Licnses</Link>
                  </li>
                  <li>
                    <Link to={""}>Support</Link>
                  </li>
                  <li>
                    <Link to={""}>How It Works</Link>
                  </li>
                  <li>
                    <Link to={""}>For Employers</Link>
                  </li>
                  <li>
                    <Link to={""}>Underwriting</Link>
                  </li>
                  <li>
                    <Link to={""}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={""}>Lending Licnses</Link>
                  </li>
                  <li>
                    <Link to={""}>Support</Link>
                  </li>
                </ul> */}
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
                          }>
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
                          to={"/employee/retention-period-resume-visibility"}>
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
                          to={"/employee/security-center-account-management"}>
                          Security Center Account Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <ul className="list-2 list-line">
									<li><Link to={'/employee/privacy-rights'}>Privacy Rights</Link></li>
									<li><Link to={'/employee/term-of-use-nova-jobs'}>Terms of Use</Link></li>
									<li><Link to={'/employee/accessibility-center'}>Accessibility Center</Link></li>
									<li><Link to={'/employee/cookies-digital-advertising'}>Cookies & Digital Advertising</Link></li>
									<li><Link to={'/employee/cooking-advertising-overview'}>Cookies & Advertising</Link></li>
									<li><Link to={'/employee/data-privacy-framework'}>Data Privacy Framework</Link></li>
									<li><Link to={'/employee/data-sharing-helps-you'}>Data Sharing Helps</Link></li>
									<li><Link to={'/employee/safeguard-from-email-scams'}>Email Scams</Link></li>
									<li><Link to={'/employee/general-contact-information'}>General Contact Information</Link></li>
									<li><Link to={'/employee/howitworks-for-candidates'}>How It Works For Candidates</Link></li>
									<li><Link to={'/employee/howitworks-for-employee'}>How It Works For Employee</Link></li>
									<li><Link to={'/employee/information-novaus-jobs'}>Information of NovaUs Jobs</Link></li>
									<li><Link to={'/employee/international-transfer-of-personal-information'}>International Transfer</Link></li>
									<li><Link to={'/employee/online-interview-scams'}>Online Interview Scams</Link></li>
									<li><Link to={'/employee/resume-security'}>Resume Security</Link></li>
									<li><Link to={'/employee/retention-period-resume-visibility'}>Retention Period</Link></li>
									<li><Link to={'/employee/scope-privacy-notice'}>Scope Privacy Notice</Link></li>
									<li><Link to={'/employee/security-bug-reporting'}>Security Bug Reporting</Link></li>
									<li><Link to={'/employee/security-center-account-management'}>Security Center Account Management</Link></li>

								</ul> */}
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
              <div className="widget border-0">
                <h5 className="m-b30 text-white">Find Jobs</h5>
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
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <span>
                {" "}
                © Copyright by{" "}
                <img
                  src={india}
                  alt=""
                  style={{
                    width: "40px",
                  }}
                />
                <Link to={""}>Nova Jobs </Link> | All Rights Reserved
              </span>
              <span className="float-right">
              <span className="m-2"><img src={SBELogo} alt="SBE Logo" style={{height:'50px'}}/></span>
              <span className="m-2"><img src={NewDBELogo} alt="SBE Logo" style={{height:'50px'}}/></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default EmployeeFooter;
