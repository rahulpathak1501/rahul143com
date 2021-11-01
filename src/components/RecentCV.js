import "bootstrap/dist/css/bootstrap.css"
//import { Dropdown } from "react-bootstrap";
import CV1stpage from "../AllFiles/CV1stpage.jpg"
import CV2ndpage from "../AllFiles/CV2ndpage.jpg"

function RecentCV() {
    return(
        <div>
            <img src ={CV1stpage} height={1000} width={1000} alt={CV1stpage}></img>
            <img src ={CV2ndpage} height={1000} width={1000} alt={CV2ndpage}></img>
        </div>

    )
}

export default RecentCV;