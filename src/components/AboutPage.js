import Card from "../UI/Card";
//import SocialBadge from 'react-social-badge'
import "bootstrap/dist/css/bootstrap.css";
import classes from "./AboutPage.module.css";
//import RecentCV from "./RecentCV";
import { Col, Row } from "react-bootstrap";
import Pdf from "../AllFiles/Resume/Rahul_Pathak.pdf";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import profilephoto from "../AllFiles/rahul.JPG";

function AboutPage() {
  return (
    <div id="summary">
      <Card className={classes.aboutpage}>
        <h2 className={classes.h2}>Hi, I am Rahul Pathak</h2>
        <p className={classes.p}>
          I have two years overall experience with 1.5 years of project
          experience in Wipro Technology as a Drupal Content Developer.In this
          1.5 years of I work as a Drupal developer to develop content
          management using Drupal CMS. Assist with Drupal custom module and
          content management functionality.Work with stakeholders in the
          business to look for ways to improve performance, simplify
          interactions and make sites better. I always had a curiosity to learn
          about Data Analysis and in my free time, I completed a google
          certification course on Data analysis from Coursera. From there I
          learned the basics of tableau and R. I already have prior knowledge in
          SQL it helps me to understand the course better. Although I love to
          create my career in web development as I found it very interesting.
          Recently I started building my own website using React.js. For that, I
          am learning React.js from Udemy.
        </p>
        <p className={classes.p}>
          Scroll down to view my portfolio and background, or check out{" "}
          <a target="_blank" rel="noreferrer" href={Pdf}>
            Resume
          </a>
        </p>
        <br></br>
        <Row>
          {/* PP */}
          <Col md={6} sm={6}>
            <img
              src={profilephoto}
              className={classes.pp}
              alt="Rahul Pathak"
            ></img>
          </Col>

          <Col md={6} sm={6}>
            <h3 className={classes.h3}>Education</h3>
            <ul className={classes.ul}>
              <li>
                <span className={classes.span}>
                  Centurion University of Technology and Management
                </span>
              </li>
              <li>
                <span className={classes.span}>Bachelor of Technology:</span>{" "}
                Electronics and Communication Engineering
              </li>
              <li>
                <span className={classes.span}>Graduated:</span> June 2019
              </li>
            </ul>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={4} sm={4} className={classes.i}>
            {/* <FontAwesomeIcon icon={["fab", "facebook-f"]} /> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/rahulpathak1501"
            >
              <i
                className="fa fa-github fa-2x "
                style={{ textAlign: "center" }}
              />
            </a>
          </Col>
          <Col md={4} sm={4} className={classes.i}>
            {/* <FontAwesomeIcon icon={["fab", "facebook-f"]} /> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rahul-pathak-00ab2010a/"
            >
              <i className="fa fa-linkedin-square fa-2x " />
            </a>
          </Col>
          <Col md={4} sm={4} className={classes.i}>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:rahul2.pathak3297@gmail.com"
            >
              <i className="fa fa-envelope fa-2x" />
            </a>
          </Col>
          {/* <SocialBadge url='http://github.com/mackiedrew' /> */}
        </Row>
      </Card>
    </div>
  );
}

export default AboutPage;
