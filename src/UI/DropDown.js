//import classes from "./DropDown.module.css";
import { Dropdown } from "react-bootstrap";
const DropDown = (props) => {
  return (
    // <div className={classes.dropdown}>
    //     <button className={classes.dropbtn}>Dropdown</button>
    //     <div className={classes.dropdowncontent}>
    //       <a href="#/action-1">Link 1</a>
    //       <a href="#/action-2">Link 2</a>
    //       <a href="#/action-3">Link 3</a>
    //     </div>
    //   </div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Hi
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Hello</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Last company details</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Old Data</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Personal Blog</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
