import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import axios from "axios";
import FixedHeader from "../Layout/fixedHeader";
import moment from "moment";
import JobPageSkeleton from "../skeleton/jobPage";

const postBlog = [
  { title: "PHP Web Developer" },
  { title: "Software Developer" },
  { title: "Branch Credit Manager" },
];
function Jobsappliedjob() {
  const [skeleton, setSkeleton] = useState(true);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("jobSeekerLoginToken");
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jobsbooklet.in/api/jobseeker/jobs-applied",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setSkeleton(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header2 />
      <FixedHeader />

      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 m-b30">
                  <div className="sticky-top">
                    <div className="candidate-info">
                      <ul>
                        <li>
                          <Link to={"/user/jobs-profile"}>
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <span>Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-my-resume"}>
                            <i
                              className="fa fa-file-text-o"
                              aria-hidden="true"
                            ></i>
                            <span>My Resume</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-saved-jobs"}>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <span>Saved Jobs</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/user/jobs-applied-job"}
                            className="active"
                          >
                            <i
                              className="fa fa-briefcase"
                              aria-hidden="true"
                            ></i>
                            <span>Applied Jobs</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-alerts"}>
                            <i className="fa fa-bell-o" aria-hidden="true"></i>
                            <span>Job Alerts</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-cv-manager"}>
                            <i
                              className="fa fa-id-card-o"
                              aria-hidden="true"
                            ></i>
                            <span>CV Manager</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/skill-test"}>
                            <i
                              className="fa fa-id-card-o"
                              aria-hidden="true"
                            ></i>
                            <span>Skill Test</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-change-password"}>
                            <i className="fa fa-key" aria-hidden="true"></i>
                            <span>Change Password</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"./"}>
                            <i
                              className="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 m-b30 browse-job">
                  <div className="job-bx-title  clearfix">
                    <h5 className="font-weight-700 pull-left text-uppercase">
                      2269 Jobs Found
                    </h5>
                    <div className="float-right">
                      <span className="select-title">Sort by freshness</span>
                      <select className="custom-btn">
                        <option>Last 2 Months</option>
                        <option>Last Months</option>
                        <option>Last Weeks</option>
                        <option>Last 3 Days</option>
                      </select>
                    </div>
                  </div>
                  {skeleton === true ? (
                    <JobPageSkeleton />
                  ) : (
                    <ul className="post-job-bx browse-job">
                      {data.map((item, index) => {
                        const formattedCreatedDate = moment(
                          item.job_detail.created_at
                        ).fromNow();

                        return (
                          <li key={index}>
                            <div className="post-bx">
                              <div className="job-post-info m-a0">
                                <h4>
                                  <Link to={"/user/job-detail"}>
                                    {item.job_detail.job_title}
                                  </Link>
                                </h4>
                                <ul>
                                  {item.countries.name ||
                                  item.states.name ||
                                  item.cities.name ? (
                                    <li>
                                      <i className="fa fa-map-marker"></i>{" "}
                                      {item.countries.name}, {item.states.name},
                                      {item.cities.name}
                                    </li>
                                  ) : null}
                                  {item.job_category.name ? (
                                    <li>
                                      <i className="fa fa-bookmark-o"></i>{" "}
                                      {item.job_category.name}
                                    </li>
                                  ) : null}
                                  {item.job_type.name ? (
                                    <li>{item.job_type.name}</li>
                                  ) : null}
                                  {item.job_workplace_types.name ? (
                                    <li>{item.job_workplace_types.name}</li>
                                  ) : null}
                                </ul>
                                {/* <p>{item.job_detail.job_description}</p> */}
                                {/* <ul>
      <li>
        <Link to={"/user/company-profile"}>
          @company-name
        </Link>
      </li>
      <li>
        <i className="fa fa-map-marker"></i> Sacramento,
        California
      </li>
      <li>
        <i className="fa fa-money"></i> 25,000
      </li>
    </ul> */}
                                <div className="job-time m-t15 m-b10">
                                  {item.job_detail.skills_arr ? (
                                    <div>
                                      {item.job_detail.skills_arr.map(
                                        (item, index) => {
                                          return (
                                            <span key={index}>{item}</span>
                                          );
                                        }
                                      )}
                                    </div>
                                  ) : null}
                                </div>
                                <div className="posted-info clearfix">
                                  <p className="m-tb0 text-primary float-left">
                                    <span className="text-black m-r10">
                                      Posted:
                                    </span>{" "}
                                    {formattedCreatedDate}
                                  </p>
                                  <Link
                                    to={"/jobs-my-resume"}
                                    className="site-button button-sm float-right"
                                  >
                                    Job Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  <div className="pagination-bx m-t30">
                    <ul className="pagination">
                      <li className="previous">
                        <Link to={"#"}>
                          <i className="ti-arrow-left"></i> Prev
                        </Link>
                      </li>
                      <li className="active">
                        <Link to={"#"}>1</Link>
                      </li>
                      <li>
                        <Link to={"#"}>2</Link>
                      </li>
                      <li>
                        <Link to={"#"}>3</Link>
                      </li>
                      <li className="next">
                        <Link to={"#"}>
                          Next <i className="ti-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Jobsappliedjob;
