import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrowseCandidateData,
  setBrowseCandidateValues,
} from "../../store/reducers/browseCandidateSlice";
import axios from "axios";

const Jobfindbox = () => {
  const [experienceValue, setExperienceValue] = useState([
    {
      id: 0,
      name: "",
    },
  ]);
  const [salaryValue, setSalaryValue] = useState([
    {
      id: 0,
      name: "",
    },
  ]);

  const token = localStorage.getItem("employeeLoginToken");

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jobsbooklet.in/api/employeer/experience-level",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data, "experience");
        setExperienceValue(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jobsbooklet.in/api/employeer/salary-range",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res.data.data, "salary");
        setSalaryValue(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   useEffect(() => {
  //     var inputSelector = document.querySelectorAll("select, textarea");
  //     for (let i = 0; i < inputSelector.length; i++) {
  //       inputSelector[i].addEventListener("focus", function (event) {
  //         return this.parentElement.parentElement.classList.add("focused");
  //       });
  //     }

  //     for (let i = 0; i < inputSelector.length; i++) {
  //       inputSelector[i].addEventListener("blur", function (event) {
  //         var inputValue = this.value;
  //         if (inputValue === "") {
  //           this.parentElement.parentElement.classList.remove("filled");
  //           this.parentElement.parentElement.classList.remove("focused");
  //         } else {
  //           this.parentElement.parentElement.classList.add("filled");
  //         }
  //       });
  //     }
  //   }, []);
  const dispatch = useDispatch();
  const browseCandidateValues = useSelector(
    (state) => state.browseCandidateSlice.browseCandidateValues
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setBrowseCandidateValues({ ...browseCandidateValues, [name]: value })
    );
  };
  const baseUrl = "https://jobsbooklet.in/api/employeer/job-seekers";

  const params = new URLSearchParams();

  if (browseCandidateValues.experience) {
    params.append("experience_in_month", browseCandidateValues.experience);
  }

  if (browseCandidateValues.salary) {
    params.append("salary_range", browseCandidateValues.salary);
  }

  // if (browseCandidateValues.education) {
  //   params.append("education", browseCandidateValues.education);
  // }

  const url = `${baseUrl}?${params.toString()}`;
  console.log(url, "this is the url");

  const handleGetReq = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      url: url,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(setBrowseCandidateData(response.data.data));
        // setShowSkeleton(false);
        console.log(response, "custom data");
      })
      .catch((err) => {
        console.log(err, "custom err");
      });
  };
  return (
    <div className="section-full browse-job-find">
      <div className="container">
        <div className="find-job-bx">
          <form className="dezPlaceAni">
            <div className="d-flex">
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label htmlFor="education"></label>
                  <div className="input-group">
                    <select
                      type="text"
                      className="form-control"
                      id="education"
                      name="education"
                      onChange={handleChange}
                      value={browseCandidateValues.education}
                      autoComplete="false"
                    >
                      <option value="">Choose Education</option>
                    </select>
                    {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-search"></i>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="form-group">
                  <label htmlFor="experience"></label>
                  <div className="input-group">
                    <select
                      type="text"
                      className="form-control"
                      id="experience"
                      name="experience"
                      onChange={handleChange}
                      value={browseCandidateValues.experience}
                      autoComplete="false"
                    >
                      <option value="">Choose Experience</option>
                      {experienceValue.map((item, index) => {
                        return (
                          <option
                            className="form-control"
                            key={index}
                            value={item.id}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-map-marker"></i>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label htmlFor="salary"></label>
                  <div className="input-group">
                    <select
                      type="text"
                      className="form-control"
                      id="salary"
                      name="salary"
                      onChange={handleChange}
                      value={browseCandidateValues.salary}
                      autoComplete="false"
                    >
                      <option value="">Choose Your Salary</option>
                      {salaryValue.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-dollar"></i>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <button
                  onClick={handleGetReq}
                  className="site-button btn-block"
                >
                  Find Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Jobfindbox;
