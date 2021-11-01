import "bootstrap/dist/css/bootstrap.css";
import Card from "../UI/Card";
import classes from "./WelComeHeader.module.css";
import { Link } from "react-scroll";

function WelComeHeader() {
  return (
    <div id="wellcome">
      <Card className={classes.welcomeheader}>
        <h1 className={classes.h1}>RAHUL PATHAK</h1>
        <hr></hr>
        <h1 className={classes.h1}>Software Engineer</h1>

        <Link to="summary" className={classes.arrow}>
          <span className={classes.span}></span>
          <span className={classes.span}></span>
          <span className={classes.span}></span>
        </Link>
        {/* <div className="row">
        <div className="col-sm-4">
          <h1>LOGO</h1>
        </div>
        <div className="col-sm-4">
          <h1 className= "text-center">WELCOME TO THE RAHUL'S PAGE</h1>
        </div>
      </div> */}
      </Card>
    </div>
  );
}

export default WelComeHeader;
