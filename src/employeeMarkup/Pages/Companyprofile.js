import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";
import { fetchCompanyInfo } from "../../store/thunkFunctions/companyFunction";
import { useDispatch, useSelector } from "react-redux";
import CompanySideBar from "../Layout/companySideBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function EmployeeCompanyprofile() {
  const companyData = useSelector(
    (state) => state.companyDataSlice.companyData
  );
  let companyDetail = companyData?.company_detail;
  console.log(companyDetail, "lavi");
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
    getCities();
  }, [selectedStates]);

  const token = localStorage.getItem("employeeLoginToken");

  const getCountry = async () => {
    axios({
      method: "get",
      url: "https://novajobs.us/api/employeer/countries",
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
      url: `https://novajobs.us/api/employeer/stats/${selectedCountry}`,
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
      url: `https://novajobs.us/api/employeer/cities/${selectedStates}`,
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
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  }, []);

  const updateCompanyData = async (e) => {
    if (
      !companyName ||
      !email ||
      !industry ||
      !selectedCountry ||
      !selectedStates ||
      !selectedCities
    ) {
      showToastError("Please fill out all required fields.");
      return;
    }

    axios({
      method: "put",
      url: `https://novajobs.us/api/employeer/company`,
      headers: {
        Authorization: token,
      },
      data: {
        company_name: companyName,
        about: description,
        email: email,
        tagline: tagline,
        user_id: 1,
        website_link: website,
        founded_date: foundedYear,
        phone: number,
        country_id: Number(selectedCountry),
        state_id: Number(selectedStates),
        city_id: Number(selectedCities),
        address: address,
        facebook_link: glassdoor,
        twitter_link: twitter,
        google_link: googleBusiness,
        linkedin_link: linkdin,
        company_industry_id: Number(industry),
      },
    })
      .then((res) => {
        console.log(res, "data updated");
        showToastSuccess("Company data updated successfully.");
      })
      .catch((error) => {
        console.log(error);
        showToastError("Failed to update company data.");
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
                            <label htmlFor="companyName">Company Name</label>
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              className="form-control"
                              placeholder="Enter Company Name"
                              onChange={(e) => {
                                setCompanyName(e.target.value);
                              }}
                              value={companyName}
                              required
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
                              required
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
                              required
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
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Founded Year</label>
                            <input
                              type="date"
                              className="form-control"
                              onChange={(e) => {
                                setDate(e.target.value);
                              }}
                              value={foundedYear}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Industry</label>
                            <Form.Control
                              as="select"
                              custom
                              className="custom-select"
                              value={industry}
                              onChange={(e) => setIndustry(e.target.value)}
                              required
                            >
                              <option value="">Select Industry</option>
                              {industries.map((industry) => (
                                <option
                                  value={industry.id}
                                  key={industry.id}
                                >
                                  {industry.industry}
                                </option>
                              ))}
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Description</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Write About Company"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                              value={description}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Phone</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Contact Number"
                              onChange={(e) => {
                                setNumber(e.target.value);
                              }}
                              value={number}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <Form.Control
                              as="select"
                              custom
                              className="custom-select"
                              value={selectedCountry}
                              onChange={(e) => {
                                setSelectedCountry(e.target.value);
                              }}
                              required
                            >
                              <option value="">Select Country</option>
                              {countries.map((country) => (
                                <option
                                  value={country.id}
                                  key={country.id}
                                >
                                  {country.name}
                                </option>
                              ))}
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            <Form.Control
                              as="select"
                              custom
                              className="custom-select"
                              value={selectedStates}
                              onChange={(e) => {
                                setSelectedState(e.target.value);
                              }}
                              required
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option
                                  value={state.id}
                                  key={state.id}
                                >
                                  {state.name}
                                </option>
                              ))}
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <Form.Control
                              as="select"
                              custom
                              className="custom-select"
                              value={selectedCities}
                              onChange={(e) => {
                                setSelectedCities(e.target.value);
                              }}
                              required
                            >
                              <option value="">Select City</option>
                              {cities.map((city) => (
                                <option
                                  value={city.id}
                                  key={city.id}
                                >
                                  {city.name}
                                </option>
                              ))}
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address"
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                              value={address}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Linkdin</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Linkdin URL"
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
                              placeholder="Enter Twitter URL"
                              onChange={(e) => {
                                setTwitter(e.target.value);
                              }}
                              value={twitter}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Google Business</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Google Business URL"
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
                              placeholder="Enter Glassdoor URL"
                              onChange={(e) => {
                                setGlassdor(e.target.value);
                              }}
                              value={glassdoor}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="site-button m-b30"
                        onClick={updateCompanyData}
                      >
                        Upadte Setting
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default EmployeeCompanyprofile;
