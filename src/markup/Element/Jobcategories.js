import axios from "axios";
import { showToastError } from "../../utils/toastify";
import React, { useEffect, useState } from "react";
import {
  FaAccessibleIcon,
  FaAddressCard,
  FaAppleAlt,
  FaArtstation,
  FaBuilding,
  FaCarSide,
  FaChartBar,
  FaChartLine,
  FaHatCowboy,
  FaHotel,
  FaPhone,
  FaStar,
  FaTable,
  FaWarehouse,
} from "react-icons/fa";
import { FaAppStore, FaBriefcase, FaHeartPulse } from "react-icons/fa6";
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
      url: "https://novajobs.us/api/jobseeker/job-categories",
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
    1: FaArtstation,
    2: FaAddressCard,
    3: FaChartBar,
    4: FaTable,
    5: FaPhone,
    6: FaHotel,
    7: FaWarehouse,
    8: FaHeartPulse,
    9: FaBuilding,
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
              <div className="icon-content ">
                <div
                  className="icon-20px text-primary"
                  style={{ marginBottom: "50px", fontSize: "40px" }}
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
        <button className="site-button radius-xl">
          <Link to={"/user/job-application"} className="site-button">
            All Categories
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Jobcategories;
