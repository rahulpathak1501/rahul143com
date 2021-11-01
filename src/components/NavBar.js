import React from "react";
import classes from "./NavBar.module.css";
import Card from "../UI/Card";
//import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../AllFiles/logo/RahulPathak.jpg.png"
//import Contact from "./Contact";

function NavBar() {
  return (
    <Card className={classes.navbar}>
      <li style={{ float: "left" }}>
          <Link to="wellcome" className={classes.a} >
            <img src={logo} alt="Rahul Pathak" />
            {/* <p className={classes.logo}>Rahul</p> */}
          </Link>
        </li>
      {/* <ul className={classes.ul}> */}
      <li className={classes.li}>
        <Link to="contact" className={classes.a}>
          Contact
        </Link>
      </li>
      {/* <li className={classes.li}>
        <Link to="test1" spy={true} smooth={true} offset={50} duration={500}>
          Test
        </Link>
      </li> */}
      <li className={classes.li}>
          <Link to="skills" className={classes.a} >
            Skills
          </Link>
        </li>
        <li className={classes.li}>
          <Link to="certificate" className={classes.a} >
            Certificates
          </Link>
        </li>
        <li className={classes.li}>
          <Link to="experience" className={classes.a} >
            Experience
          </Link>
        </li>
        <li className={classes.li}>
          <Link to="summary"className={classes.a} >
            Summary
          </Link>
        </li>
      {/* </ul> */}
    </Card>
  );
}

export default NavBar;
