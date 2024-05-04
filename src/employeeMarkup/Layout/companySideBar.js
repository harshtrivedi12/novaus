import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setPostAJobData,
  setSkillsData,
} from "../../store/reducers/postAJobSlice";
import { fetchCompanyInfo } from "../../store/thunkFunctions/companyFunction";

const CompanySideBar = ({ active }) => {
  const token = localStorage.getItem("employeeLoginToken");
  //   const [res.data.data, setres.data.dataa] = useState({})
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postJob = async () => {
    await axios({
      url: "https://jobsbooklet.in/api/employeer/job-post",
      method: "POST",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res.data.data, "job");
        // setres.data.dataa(res.data.data);
        dispatch(
          setPostAJobData({
            jobTitle: res.data.data.job_title,
            company: res.data.data.country_id,
            workplaceType: res.data.data.workplace_type_id,
            // location: res.data.data.,
            jobType: res.data.data.job_type_id,
            description: res.data.data.job_description,
            // education: res.data.data.,
            // qualificationSetting: res.data.data.,
            selectedCity: res.data.data.city_id,
            selectedState: res.data.data.state_id,
            selectedCountry: res.data.data.country_id,
          })
        );
        // dispatch(setSkillsData(res.data.data.skills_arr))
        navigate(`/employee/company-post-jobs/${res.data.data.id}`);
      })
      .catch((err) => {
        console.log(err, "joy");
      });
  };

  const getLogo = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://jobsbooklet.in/api/employeer/employeer-profile",
        headers: {
          Authorization: token,
        },
      });

      setLogo(`https://novajobs.us${response.data.data.company_detail.logo}`); // This is the resolved value used as action.payload
    } catch (error) {
      // Using rejectWithValue to return a custom error payload
    }
  };

  useEffect(() => {
    getLogo();
  }, []);

  const companyData = useSelector(
    (state) => state.companyDataSlice.companyData
  );

  return (
    <div className="col-xl-3 col-lg-4 m-b30">
      <div className="sticky-top">
        <div className="candidate-info company-info">
          <div className="candidate-detail text-center">
            <div className="canditate-des">
              <Link to={"#"}>
                <img
                  alt=""
                  src={logo}
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                  }}
                />
              </Link>
              <div
                className="upload-link"
                title="update"
                data-toggle="tooltip"
                data-placement="right">
                <input type="file" className="update-flie" />
                <i className="fa fa-pencil"></i>
              </div>
            </div>
            <div className="candidate-title">
              <h4 className="m-b5">
                <Link to={"#"}>@COMPANY</Link>
              </h4>
            </div>
          </div>
          <ul>
            <li>
              <Link
                to={"/employee/company-profile"}
                className={active === "company" ? "active" : null}>
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <span>Company Profile</span>
              </Link>
            </li>
            <li>
              <Link
                className={active === "postJob" ? "active" : null}
                onClick={postJob}
                //   to={"/employee/company-post-jobs"}
              >
                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                <span>Post A Job</span>
              </Link>
            </li>
            <li>
              <Link
                className={active === "transactions" ? "active" : null}
                to={"/employee/company-transactions"}>
                <i className="fa fa-random" aria-hidden="true"></i>
                <span>Transactions</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/employee/company-manage-job/jobs"}
                className={active === "company-manage-job" ? "active" : null}>
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <span>Manage jobs</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/employee/company-resume"}
                className={active === "company-resume" ? "active" : null}>
                <i className="fa fa-id-card-o" aria-hidden="true"></i>
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/employee/jobs-change-password"}
                className={active === "jobs-change-password" ? "active" : null}>
                <i className="fa fa-key" aria-hidden="true"></i>
                <span>Change Password</span>
              </Link>
            </li>
            <li>
              <Link to={"./"}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanySideBar;
