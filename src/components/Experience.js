import { Col, Row } from "react-bootstrap";
import Card from "../UI/Card";
import classes from "./Experience.module.css";

function Experience() {
  return (
    <div id="experience">
      <Card className={classes.experience}>
        <h2 className={classes.h2}> Experience</h2>
        <hr />
        <Row>
          <Row>
            <Col>
              <h4 className={classes.h3}>Wipro Technology</h4>
              <p className={classes.p}>October 2019- Present</p>
            </Col>
            <Col>
              <h4 className={classes.h3}>Project Engineer</h4>
              <p className={classes.sectionTitel}>
                Drupal Developer(August 2020 - Present)
              </p>
              <ul className={classes.bullet}>
                <li className={classes.li}>
                  Designed and implemented custom features and optimized the UI
                  for the various websites under the project.{" "}
                </li>
                <li className={classes.li}>
                  Created menus, pages, templates, blocks in Drupal.
                </li>
                <li className={classes.li}>
                  Developed module across a range of websites, including
                  media-rich content.
                </li>
                <li className={classes.li}>
                  Work as a team member on large accounts, understanding how a
                  team operates and what is expected of the various roles on the
                  project
                </li>
              </ul>
            </Col>
          </Row>
        </Row>
      </Card>
    </div>
  );
}
export default Experience;
