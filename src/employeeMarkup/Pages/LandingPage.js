import React, { useState } from "react";
import "../../css/landingPage.css";
import img from "../../images/360_F_309586333_FU8eARHr7QnC1TSPmvrIdqWp0qoRGMDM-removebg-preview.png";
// import img2 from "../../images/WhatsApp_Image_2024-05-08_at_11.14.27-removebg-preview.png";
// import img3 from "../../images/WhatsApp_Image_2024-05-08_at_11.14.26-removebg-preview.png";
// import img4 from "../../images/WhatsApp_Image_2024-05-08_at_11.14.27__1_-removebg-preview.png";
// import img5 from "../../images/WhatsApp_Image_2024-05-08_at_11.14.27__2_-removebg-preview.png";
// import img6 from "../../images/WhatsApp_Image_2024-05-08_at_11.14.26__1_-removebg-preview.png";
import img7 from "../../images/services/1.jpeg"
import img2 from "../../images/services/2.jpeg";
import img3 from "../../images/services/3.jpeg";
import img4 from "../../images/services/4.jpeg";
import img5 from "../../images/services/5.jpeg";
import img6 from "../../images/services/6.jpeg";
import { Tab, Nav, Form, Modal } from "react-bootstrap";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";

const LandingPage = () => {
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [show, setShow] = useState(false);

  return (
    <div>
      <Header />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#ffff" }}
          className="mt-4">
          <Modal.Title style={{ color: "#000" }}>
            <p>Contact Form</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="row">
            <div class="col">
              <div data-mdb-input-init class="form-outline">
                <input type="text" id="form8Example3" class="form-control" />
                <label class="form-label" for="form8Example3">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div data-mdb-input-init class="form-outline">
                <input type="text" id="form8Example4" class="form-control" />
                <label class="form-label" for="form8Example4">
                  Last name
                </label>
              </div>
            </div>
            <div class="col-12">
              <div data-mdb-input-init class="form-outline">
                <input type="email" id="form8Example5" class="form-control" />
                <label class="form-label" for="form8Example5">
                  Email address
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div data-mdb-input-init class="form-outline">
                <input type="number" id="form8Example1" class="form-control" />
                <label class="form-label" for="form8Example1">
                  Phone No.
                </label>
              </div>
            </div>
            <div class="col">
              <div data-mdb-input-init class="form-outline">
                <input type="email" id="form8Example2" class="form-control" />
                <label class="form-label" for="form8Example2">
                  Company Name{" "}
                </label>
              </div>
            </div>
            <div class="col-12">
              <div data-mdb-input-init class="form-outline">
                <input type="email" id="form8Example2" class="form-control" />
                <label class="form-label" for="form8Example2">
                  Designation{" "}
                </label>
              </div>
            </div>
          </div>
          <div class="">
            <div data-mdb-input-init class="form-outline mb-4">
              <textarea
                class="form-control"
                id="form6Example7"
                rows="4"></textarea>
              <label class="form-label" for="form6Example7">
                Remark
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          We will reach you back on when we get your response
        </Modal.Footer>
      </Modal>
      <div className="banner">
        <div className="banner-text">
          <h2>
            Nova Jobs us <br /> Ai based job Portal
          </h2>
        </div>
        <div className="banner-img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="services">
        <div className="services-row">
          <div className="service-div">
            <img src={img2} alt="" />
            <p>Ai-Based Job Portal:</p>
            <ul>
              <li>Jobseeker Login</li>
              <li>Employer Login</li>
              <li>Vendor Login</li>
            </ul>
            <button className="site-button" onClick={handleShow}>
              Interested ?
            </button>
          </div>
          <div className="service-div">
            <img src={img3} alt="" className="img-3" />
            <p>Ai-Based Skill Test:</p>
            <ul>
              <li>Timer Based</li>
              <li>Immediate Result</li>
              <li>Skill Badge Option</li>
            </ul>
            <button className="site-button" onClick={handleShow}>
              Interested ?
            </button>
          </div>
        </div>
        <div className="services-row">
          <div className="service-div">
            <img src={img4} alt="" />
            <p>Ai-Based Functionality:</p>
            <ul>
              <li>Auto Job Match</li>
              <li>Skill Based Match</li>
              <li>Auto JD Writing ..</li>
            </ul>
            <button className="site-button" onClick={handleShow}>
              Interested ?
            </button>
          </div>
          <div className="service-div">
            <img src={img5} alt="" />
            <p>Ai-Based CV Services:</p>
            <ul>
              <li>Live CV Score</li>
              <li>Live CV Builder</li>
              <li>Multiple Templates</li>
            </ul>
            <button className="site-button" onClick={handleShow}>
              Interested ?
            </button>
          </div>
        </div>{" "}
        <div className="services-row">
          <div className="service-div">
            <img src={img6} alt="" />
            <p>Robust Vendor Panel:</p>
            <ul>
              <li>Bulk CV upload</li>
              <li>Bulk Opening upload</li>
              <li>Use Nova Services</li>
            </ul>
            <button className="site-button" onClick={handleShow}>
              Interested ?
            </button>
          </div>
          <div className="service-div">
            <img src={img7} alt="" />
            <p>Ai-Based Add-ONS:</p>
            <ul>
              <li>Robust Wallet</li>
              <li>Secure Chats</li>
              <li>Vendor Login</li>
            </ul>
            <button className="site-button" onClick={handleShow}>
              Interested ?
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
