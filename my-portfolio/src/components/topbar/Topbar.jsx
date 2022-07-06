import "./topbar.scss";
import {PersonOutline, AlternateEmail} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">I.K.</a>
          <div className="itemContainer">
            <PersonOutline className="icon"/>
            <span>+370602019**</span>
          </div>
          <div className="itemContainer">
            <AlternateEmail className="icon"/>
            <span>ineta.kreiviene@icloud.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}
