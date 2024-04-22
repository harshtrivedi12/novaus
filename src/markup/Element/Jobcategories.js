import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaAccessibleIcon,
  FaAppleAlt,
  FaCarSide,
  FaChartBar,
  FaChartLine,
  FaHatCowboy,
  FaStar,
} from "react-icons/fa";
import { FaAppStore, FaBriefcase } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Jobcategories() {
  const navigate = useNavigate();
  const handleSelectedTitle = (category) => {
    localStorage.setItem("jobCategory", category);
    navigate("/user/job-application");
  };
  const token = localStorage.getItem("jobSeekerLoginToken");
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: "",
    },
  ]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://93.188.167.106:3001/api/jobseeker/job-categories",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data);
        setCategories(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const iconMap = {
    1: FaStar,
    2: FaHatCowboy,
    3: FaChartBar,
    4: FaCarSide,
    5: FaAccessibleIcon,
    6: FaAppStore,
    7: FaChartLine,
    8: FaBriefcase,
  };

  return (
    <div className="row sp20">
      {categories.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleSelectedTitle(item.id)}
            className="col-lg-3 col-md-6 col-sm-6"
            style={{ cursor: "pointer" }}
          >
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div
                  className="icon-md text-primary"
                  style={{ marginBottom: "50px" }}
                >
                  {React.createElement(iconMap[item.id] || FaCarSide)}
                </div>
                <Link to={"#"} className="dez-tilte">
                  {item.name}
                </Link>
                {/* <p className="m-a0">198 Open Positions</p> */}
                <div className="rotate-icon">
                  <i className="ti-location-pin"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div
        onClick={() => handleSelectedTitle("education training")}
        className="col-lg-3 col-md-6 col-sm-6"
        style={{ cursor: "pointer" }}
      >
        <div className="icon-bx-wraper">
          <div className="icon-content">
            <div className="icon-md text-primary m-b20">
              <i className="ti-wand"></i>
            </div>
            <Link to={"#"} className="dez-tilte">
              Education Training
            </Link>
            <p className="m-a0">198 Open Positions</p>
            <div className="rotate-icon">
              <i className="ti-wand"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleSelectedTitle("accounting & finance")}
        className="col-lg-3 col-md-6 col-sm-6"
        style={{ cursor: "pointer" }}
      >
        <div className="icon-bx-wraper">
          <div className="icon-content">
            <div className="icon-md text-primary m-b20">
              <i className="ti-wallet"></i>
            </div>
            <Link to={"#"} className="dez-tilte">
              Accounting / Finance
            </Link>
            <p className="m-a0">198 Open Positions</p>
            <div className="rotate-icon">
              <i className="ti-wallet"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleSelectedTitle("human resource")}
        className="col-lg-3 col-md-6 col-sm-6"
        style={{ cursor: "pointer" }}
      >
        <div className="icon-bx-wraper">
          <div className="icon-content">
            <div className="icon-md text-primary m-b20">
              <i className="ti-cloud-up"></i>
            </div>
            <Link to={"#"} className="dez-tilte">
              Human Resource
            </Link>
            <p className="m-a0">198 Open Positions</p>
            <div className="rotate-icon">
              <i className="ti-cloud-up"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleSelectedTitle("telecommunications")}
        className="col-lg-3 col-md-6 col-sm-6"
        style={{ cursor: "pointer" }}
      >
        <div className="icon-bx-wraper">
          <div className="icon-content">
            <div className="icon-md text-primary m-b20">
              <i className="ti-bar-chart"></i>
            </div>
            <Link to={"#"} className="dez-tilte">
              Telecommunications
            </Link>
            <p className="m-a0">198 Open Positions</p>
            <div className="rotate-icon">
              <i className="ti-bar-chart"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleSelectedTitle("restaurant")}
        className="col-lg-3 col-md-6 col-sm-6"
        style={{ cursor: "pointer" }}
      >
        <div className="icon-bx-wraper">
          <div className="icon-content">
            <div className="icon-md text-primary m-b20">
              <i className="ti-tablet"></i>
            </div>
            <Link to={"#"} className="dez-tilte">
              Restaurant / Food Service
            </Link>
            <p className="m-a0">198 Open Positions</p>
            <div className="rotate-icon">
              <i className="ti-tablet"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleSelectedTitle("construction")}
        className="col-lg-3 col-md-6 col-sm-6"
        style={{ cursor: "pointer" }}
      >
        <div className="icon-bx-wraper">
          <div className="icon-content">
            <div className="icon-md text-primary m-b20">
              <i className="ti-camera"></i>
            </div>
            <Link to={"#"} className="dez-tilte">
              Construction / Facilities
            </Link>
            <p className="m-a0">198 Open Positions</p>
            <div className="rotate-icon">
              <i className="ti-camera"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleSelectedTitle("health")}
        className="col-lg-3 col-md-6 col-sm-6"
        style={{ cursor: "pointer" }}
      >
        <div className="icon-bx-wraper">
          <div className="icon-content">
            <div className="icon-md text-primary m-b20">
              <i className="ti-panel"></i>
            </div>
            <Link to={"#"} className="dez-tilte">
              Health
            </Link>
            <p className="m-a0">198 Open Positions</p>
            <div className="rotate-icon">
              <i className="ti-panel"></i>
            </div>
          </div>
        </div>
      </div> */}
      <div className="col-lg-12 text-center m-t30">
        <button className="site-button radius-xl">All Categories</button>
      </div>
    </div>
  );
}

export default Jobcategories;
