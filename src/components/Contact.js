import { Col, Row } from "react-bootstrap";
import Card from "../UI/Card";
import classes from "./Contact.module.css";
//import { Router, Route } from "react-router-dom";

function Contact() {
  return (
    <footer id="contact">
      <Card className={classes.contact}>
        <h2 className={classes.h2}>Contact</h2>
        <hr className={classes.hr}></hr>
        <Row className={classes.text}>
          <Col md={6}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/rahulpathak1501"
            >
              <Row>
                <p className={classes.p}>
                  <i className="fa fa-github" /> 
                  {" "} github.com/rahulpathak1501
                </p>
              </Row>
            </a>
          </Col>
          <Col md={6}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rahul-pathak-00ab2010a/"
            >
              <Row>
                <p className={classes.p}>
                  <i className="fa fa-linkedin-square" />{" "}
                  Linkedin.com/in/rahulpathak
                </p>
              </Row>
            </a>
          </Col>
          <Col md={12}>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:rahul2.pathak3297@gmail.com"
            >
              <Row>
                <p className={classes.p}>
                  <i className="fa fa-envelope" />
                  {" "} rahul2.pathak3297@gmail.com
                </p>
              </Row>
            </a>
          </Col>
        </Row>
        <br />
        <p className={classes.update}>Last updated: 21th Oct 2021</p>
        <br />
      </Card>
    </footer>
  );
}

export default Contact;
