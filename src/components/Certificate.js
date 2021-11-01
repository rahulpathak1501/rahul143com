import React from "react";
import { Row } from "react-bootstrap";
import Card from "../UI/Card";
import classes from "./Certificate.module.css";

function Certificate() {
  return (
    <React.Fragment>
      <div id="certificate">
        <Card className={classes.certificate}>
          <h2 className={classes.h2}>Certificates</h2>
          <hr></hr>
          <Row>
            <Row className={classes.timeline}>
              <div className={`${classes.container} ${classes.left}`}>
                <div className={classes.date}>20th Nov 2021</div>
                {/* <i className={`${classes.icon} ${classes.fa}`}></i> */}
                <div className={classes.content}>
                  <h2 className={classes.h}>React-Complete guide - Udemy</h2>
                  <p>Completed React-Complete guide from Udemy.</p>
                </div>
              </div>
            </Row>
            <Row className={classes.timeline}>
              <div className={`${classes.container} ${classes.right}`}>
                <div className={classes.date}>15 December</div>
                {/* <i className={`${classes.icon} ${classes.fa}`}></i> */}
                <div className={classes.content}>
                  <h2>Data Analytics Professional Certificate - Google</h2>
                  <p className={classes.p}>
                    Completed this 6 month course from Coursera
                  </p>
                </div>
              </div>
            </Row>
            <Row className={classes.timeline}>
              <div className={`${classes.container} ${classes.left}`}>
                <div className={classes.date}>10th May 2018</div>
                {/* <i className={`${classes.icon} ${classes.fa}`}></i> */}
                <div className={classes.content}>
                  <h2 className={classes.h}>Web Devlopment - Internshala</h2>
                  <p>
                    Completed web devlopment tranning from Internshala. This is
                    included HTML, CSS, Bootstrap.
                  </p>
                </div>
              </div>
            </Row>
          </Row>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Certificate;
