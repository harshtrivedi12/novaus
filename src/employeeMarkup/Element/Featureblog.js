import React from "react";
import { Link, useNavigate } from "react-router-dom";
var img1 = require("./../../images/city/pic1.jpg");
var img2 = require("./../../images/city/pic2.jpg");
var img3 = require("./../../images/city/pic3.jpg");
var img4 = require("./../../images/city/pic4.jpg");
var img5 = require("./../../images/city/pic5.jpg");
var img6 = require("./../../images/city/pic6.jpg");
var img7 = require("./../../images/city/pic7.jpg");
var img8 = require("./../../images/city/pic8.jpg");

function Featureblog() {
  const navigate = useNavigate();
  const handleLocationSelect = (location) => {
    localStorage.setItem("location", location);
    navigate("/employee/browse-candidates");
  };

  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 section-head text-center">
            <h2 className="m-b5">Featured Cities</h2>
            <h6 className="fw4 m-b0">20+ Featured Cities Added Jobs</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-6 m-b30">
            <div onClick={() => handleLocationSelect("alabama")}>
              <div
                className="city-bx align-items-end d-flex"
                style={{
                  backgroundImage: "url(" + img1 + ")",
                  cursor: "pointer",
                }}
              >
                <div className="city-info">
                  <h5>Alabama</h5>
                  <span>765 Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 m-b30">
            <div onClick={() => handleLocationSelect("california")}>
              <div
                className="city-bx align-items-end  d-flex"
                style={{
                  backgroundImage: "url(" + img2 + ")",
                  cursor: "pointer",
                }}
              >
                <div className="city-info">
                  <h5>California</h5>
                  <span>352 Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 m-b30">
            <div onClick={() => handleLocationSelect("hawali")}>
              <div
                className="city-bx align-items-end  d-flex"
                style={{
                  backgroundImage: "url(" + img3 + ")",
                  cursor: "pointer",
                }}
              >
                <div className="city-info">
                  <h5>Hawali</h5>
                  <span>893 Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 m-b30">
            <div onClick={() => handleLocationSelect("ohio")}>
              <div
                className="city-bx align-items-end  d-flex"
                style={{
                  backgroundImage: "url(" + img4 + ")",
                  cursor: "pointer",
                }}
              >
                <div className="city-info">
                  <h5>Ohio</h5>
                  <span>502 Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 m-b30">
            <div onClick={() => handleLocationSelect("virginia")}>
              <div
                className="city-bx align-items-end  d-flex"
                style={{
                  backgroundImage: "url(" + img5 + ")",
                  cursor: "pointer",
                }}
              >
                <div className="city-info">
                  <h5>Virginia</h5>
                  <span>765 Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 m-b30">
            <div onClick={() => handleLocationSelect("indiana")}>
              <div
                className="city-bx align-items-end  d-flex"
                style={{
                  backgroundImage: "url(" + img6 + ")",
                  cursor: "pointer",
                }}
              >
                <div className="city-info">
                  <h5>Indiana</h5>
                  <span>352 Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 m-b30">
            <div onClick={() => handleLocationSelect("georgia")}>
              <div
                className="city-bx align-items-end  d-flex"
                style={{
                  backgroundImage: "url(" + img7 + ")",
                  cursor: "pointer",
                }}
              >
                <div className="city-info">
                  <h5>Georgia</h5>
                  <span>893 Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 m-b30">
            <div onClick={() => handleLocationSelect("colorado")}>
              <div
                className="city-bx align-items-end  d-flex"
                style={{
                  backgroundImage: "url(" + img8 + ")",
                  cursor: "pointer",
                }}
              >
                <div className="city-info">
                  <h5>Colorado</h5>
                  <span>502 Jobs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featureblog;
