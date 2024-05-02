import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
// import GoogleMaps from "simple-react-google-maps";
import axios from "axios";
import { fetchCompanyInfo } from "../../store/thunkFunctions/companyFunction";
import { useDispatch, useSelector } from "react-redux";
import { get } from "react-scroll/modules/mixins/scroller";
import { useState } from "react";
import CompanySideBar from "../Layout/companySideBar";

function EmployeeCompanyprofile() {
  const companyData = useSelector(
    (state) => state.companyDataSlice.companyData
  );
  let companyDetail = companyData?.company_detail;
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedStates, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [tagline, setTagline] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [foundedYear, setDate] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [linkdin, setlinkdin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [googleBusiness, setGoogleBusiness] = useState("");
  const [glassdoor, setGlassdor] = useState("");

  useEffect(() => {
    console.log(selectedCountry);
    setSelectedState("");
    getState();
  }, [selectedCountry]);

  useEffect(() => {
    console.log(selectedStates);
    // setSelectedCities("");
    getCities();
  }, [selectedStates]);

  const token = localStorage.getItem("employeeLoginToken");

  const getCountry = async () => {
    axios({
      method: "get",
      url: "https://jobsbooklet.in/api/employeer/countries",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setCountries(res.data.data);
        console.log(res.data.data, "country");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getState = async () => {
    axios({
      method: "get",
      url: `https://jobsbooklet.in/api/employeer/stats/${selectedCountry}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setStates(res.data.data);
        console.log(res.data.data, "state");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCities = async () => {
    axios({
      method: "get",
      url: `https://jobsbooklet.in/api/employeer/cities/${selectedStates}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(selectedStates);
        setCities(res.data.data);
        console.log(res.data.data, "cities");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/employeer/company-industry",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res.data.data, "industry");
        setIndustries(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateCompanyData = async (e) => {
    axios({
      method: "put",
      url: `https://jobsbooklet.in/api/employeer/company`,
      headers: {
        Authorization: token,
      },
      data: {
        company_name: companyName,
        // summery: "summery",
        about: description,
        // company_size_id: 1,
        email: email,
        // company_type_id: 1,
        tagline: tagline,
        user_id: 1,
        website_link: website,
        founded_date: foundedYear,
        phone: number,
        country_id: Number(selectedCountry),
        state_id: Number(selectedStates),
        city_id: Number(selectedCities),
        // zip_code: "434",
        address: address,
        facebook_link: glassdoor,
        twitter_link: twitter,
        google_link: googleBusiness,
        linkedin_link: linkdin,
        company_industry_id: industry,
      },
    })
      .then((res) => {
        console.log(res, "data updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getCountry();
    dispatch(fetchCompanyInfo());
  }, [dispatch]);

  useEffect(() => {
    setCompanyName(companyDetail?.company_name);
    setTagline(companyDetail?.tagline);
    setEmail(companyDetail?.email);
    setWebsite(companyDetail?.website_link);
    setDate(companyDetail?.founded_date);
    setDescription(companyDetail?.about);
    setSelectedCountry(companyDetail?.country?.name);
    setSelectedCities(companyDetail?.city?.name);
    setSelectedState(companyDetail?.state?.name);
    // setIndustry(companyData.country.id)
    setNumber(companyDetail?.phone);
    setAddress(companyDetail?.address);
    setlinkdin(companyDetail?.linkedin_link);
    setTwitter(companyDetail?.twitter_link);
    setGoogleBusiness(companyDetail?.google_link);
    setGlassdor(companyDetail?.facebook_link);
  }, [companyData]);

  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <CompanySideBar active="company" />
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx submit-resume">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Company Profile
                      </h5>
                      <Link
                        to={"/employee/company-profile"}
                        className="site-button right-arrow button-sm float-right"
                      >
                        Back
                      </Link>
                    </div>
                    <form>
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Company Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Company Name"
                              onChange={(e) => {
                                setCompanyName(e.target.value);
                              }}
                              value={companyName}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Tagline</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Company Tagline"
                              onChange={(e) => {
                                setTagline(e.target.value);
                              }}
                              value={tagline}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Email ID</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="info@gmail.com"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Website</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Website Link"
                              onChange={(e) => {
                                setWebsite(e.target.value);
                              }}
                              value={website}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Founded Year </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="17/12/2018"
                              onChange={(e) => {
                                setDate(e.target.value);
                              }}
                              value={foundedYear}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Industry</label>
                            {industries ? (
                              <Form.Control
                                as="select"
                                custom
                                className="custom-select"
                                onChange={(e) => {
                                  setIndustry(e.target.value);
                                }}
                                value={industry}
                              >
                                {industries.map((item, index) => {
                                  return (
                                    <option key={index} value={item.id}>
                                      {item.name}
                                    </option>
                                  );
                                })}
                              </Form.Control>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Description:</label>
                            <textarea
                              className="form-control"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                              value={description}
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          Contact Information
                        </h5>
                      </div>
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Contact Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="+1 123 456 7890"
                              onChange={(e) => {
                                setNumber(e.target.value);
                              }}
                              value={number}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <select
                              className="form-control"
                              value={selectedCountry}
                              onChange={(e) =>
                                setSelectedCountry(e.target.value)
                              }
                            >
                              <option value="">{selectedCountry}</option>
                              {countries.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            {states ? (
                              <select
                                className="form-control"
                                value={selectedStates}
                                onChange={(e) =>
                                  setSelectedState(e.target.value)
                                }
                              >
                                <option value="">{selectedStates}</option>
                                {states.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            {cities ? (
                              <select
                                className="form-control"
                                value={selectedCities}
                                onChange={(e) => {
                                  setSelectedCities(e.target.value);
                                }}
                              >
                                <option value="">{selectedCities}</option>

                                {cities.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            ) : null}
                          </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Contry</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="India"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Delhi"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Zip</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="504030"
                            />
                          </div>
                        </div> */}
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="New york city"
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                              value={address}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          {/* <GoogleMaps
                            apiKey={"AIzaSyBPDjB2qkV4Yxn9h0tGSk2X5uH6NKmssXw"}
                            style={{
                              height: "300px",
                              width: "100%",
                              border: "0",
                            }}
                            zoom={6}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                          /> */}
                        </div>
                      </div>

                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          Social link
                        </h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Connect Linkedin</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.facebook.com/"
                              onChange={(e) => {
                                setlinkdin(e.target.value);
                              }}
                              value={linkdin}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Twitter</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.twitter.com/"
                              onChange={(e) => {
                                setTwitter(e.target.value);
                              }}
                              value={twitter}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Google Business Link</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.google.com/"
                              onChange={(e) => {
                                setGoogleBusiness(e.target.value);
                              }}
                              value={googleBusiness}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Glassdoor</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.linkedin.com/"
                              onChange={(e) => {
                                setGlassdor(e.target.value);
                              }}
                              value={glassdoor}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="site-button m-b30"
                        onClick={(e) => {
                          e.preventDefault();

                          updateCompanyData();
                        }}
                      >
                        Update Setting
                      </button>
                    </form>
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
export default EmployeeCompanyprofile;
