import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setJobApplicationData } from "../../store/reducers/jobApplicationSlice";
import moment from "moment";

const postBlog = [
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
];

function Jobsection() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jobSeekerLoginToken");
  const jobApplicationData = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationData
  );
  const fetchJobApplicationData = async () => {
    try {
      const response = await axios.get(
        "https://jobsbooklet.in/api/jobseeker/job-lists",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      dispatch(setJobApplicationData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobApplicationData();
  }, []);

  const toggleFabJobs = async (id) => {
    try {
      await axios({
        url: "http://93.188.167.106:3001/api/jobseeker/job-favorites",
        method: "POST",
        headers: { Authorization: token },
        data: {
          job_id: id,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section-full bg-white content-inner-2">
      <div className="container">
        <div className="d-flex job-title-bx section-head">
          <div className="mr-auto">
            <h2 className="m-b5">Recent Jobs</h2>
            <h6 className="fw4 m-b0">20+ Recently Added Jobs</h6>
          </div>
          <div className="align-self-end">
            <Link to={"/browse-job-list"} className="site-button button-sm">
              Browse All Jobs <i className="fa fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <ul className="post-job-bx browse-job">
              {jobApplicationData.map((item, index) => (
                <li key={index}>
                  <div className="post-bx">
                    <div className="d-flex m-b30">
                      <div className="job-post-company">
                        <span>
                          <img alt="" src={postBlog[0].image} />
                        </span>
                      </div>
                      <div className="job-post-info">
                        <h4>
                          <Link to={`/user/job-detail/${item.job_detail.id}`}>
                            {item.job_detail.job_title}
                          </Link>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-map-marker"></i>{" "}
                            {item.countries.name}, {item.states.name},
                            {item.cities.name}
                          </li>
                          {item.job_category.name ? (
                            <li>
                              <i className="fa fa-bookmark-o"></i>{" "}
                              {item.job_category.name}
                            </li>
                          ) : null}
                          <li>
                            <i className="fa fa-clock-o"></i>{" "}
                            {moment(item.job_detail.created_at).fromNow()}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="job-time mr-auto">
                        <Link to={"#"}>
                          <span>{item.job_type.name}</span>
                        </Link>
                      </div>
                      <div className="salary-bx">
                        <span> {item.job_workplace_types.name}</span>
                      </div>
                    </div>
                    <label className="like-btn" labl>
                      <input
                        type="checkbox"
                        defaultChecked={item.job_detail.is_job_favorite}
                        name={item.job_detail.id}
                        onClick={() => {
                          toggleFabJobs(item.job_detail.id);
                        }}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
            <div className="m-t30">
              <div className="d-flex">
                <Link className="site-button button-sm mr-auto" to={""}>
                  <i className="ti-arrow-left"></i> Prev
                </Link>
                <Link className="site-button button-sm" to={""}>
                  Next <i className="ti-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="sticky-top">
              <div className="candidates-are-sys m-b30">
                <div className="candidates-bx">
                  <div className="testimonial-pic radius">
                    <img
                      src={require("./../../images/testimonials/pic3.jpg")}
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p>
                      I just got a job that I applied for via careerfy! I used
                      the site all the time during my job hunt.
                    </p>
                  </div>
                  <div className="testimonial-detail">
                    {" "}
                    <strong className="testimonial-name">
                      Richard Anderson
                    </strong>{" "}
                    <span className="testimonial-position">Nevada, USA</span>{" "}
                  </div>
                </div>
              </div>
              <div className="quote-bx">
                <div className="quote-info">
                  <h4>Make a Difference with Your Online Resume!</h4>
                  <p>
                    Your resume in minutes with JobBoard resume assistant is
                    ready!
                  </p>
                  <Link to={"/register"} className="site-button">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Jobsection;
