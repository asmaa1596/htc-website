/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import SectionCarousel from "views/index-sections/SectionCarousel.js";


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div id="about-section" className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title" style={{ color: "#f5593d", fontWeight: "bold" }}>About Us</h2>
                <h5 className="description" style={{ color: "black" }}>
                  We are a group of young and pasionate students who are on a journey to change the way we learn and how we learn it.
                  The HELP TECH Club enables students to connect with the local tech community, and at the same time offers competitive advantage for internships and job opportunities by inviting speakers and trainers from the industry.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div name ="test2" className="info" style={{ color: "#f5593d" }}>
                  <div className="icon icon-info" style={{ color: "#f5593d" }}>
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Mission</h4>
                    <p className="description">
                      Bridge the gap between education and industry.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info" style={{ color: "#f5593d" }}>
                    <i className="nc-icon nc-vector" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Connect</h4>
                    <p className="description">
                      Find and connect the most active tech communities in Malaysia.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info" style={{ color: "#f5593d" }}>
                    <i className="nc-icon nc-zoom-split" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Discover</h4>
                    <p className="description">
                      Discover your passion in the vast IT industry.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info" style={{ color: "#f5593d" }}>
                    <i className="nc-icon nc-glasses-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Learn</h4>
                    <p className="description">
                      Explore and learn on how to be an pro by learning from industry experts.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="events-section" className="section text-center">
          <Container>
            <h2 className="title" style={{ color: "#f5593d", fontWeight: "bold"}}>Our Events</h2>
            <SectionCarousel />


          </Container>
        </div>

        <div id="projects-section" className="section section-dark text-center">
          <Container>
            <h2 className="title" style={{ color: "#f5593d", fontWeight: "bold", paddingBottom: "50px"}}>Our Projects</h2>
            <Row>
              <Col md="4" style={{ marginRight:"25px"}}>
                <div class="card text-left" style={{ width: "20rem" }}>
                  <div class="card-body">
                    <h4 class="card-title" style={{ fontWeight: "bold", color: "#443737", padding: "15px" }}>Code With Us: REST API</h4>
                    <p class="card-text">First CodeWithUs session where we explained REST API with a simple example in PHP.</p>
                    <a href="https://github.com/HELP-Tech-Club/Code-With-Us-REST-API">
                      <button class="btn btn-just-icon btn-github" >
                        <i class="fa fa-github-alt" aria-hidden="true"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div class="card text-left" style={{ width: "20rem" }}>
                  <div class="card-body">
                    <h4 class="card-title" style={{ fontWeight: "bold", color: "#443737", padding: "15px" }}>Customizable URL Shrinker</h4>
                    <p class="card-text">URL shortener for HELP Tech Club's events and social media posts use cases.Developed using NodeJs and MongoDB</p>
                    
                    <a href="https://github.com/HELP-Tech-Club/HTC-URL-Shrinker">
                      <button class="btn btn-just-icon btn-github" style={{margin:"5px"}}>
                        <i class="fa fa-github-alt" aria-hidden="true"></i>
                      </button>
                    </a>
                    <a href="http://helptech.club/url">
                      <button class="btn btn-danger btn-round">Try it here!</button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="contact-section" className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
