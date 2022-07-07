import "./works.scss";
import { worksData } from "../../data";

export default function Works() {
  return (
 <div className="works" id="works">
  <div className="slider">
    {worksData.map((d) => (
    <div className="container">
      <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={d.icon} alt="" />
            </div>
            <h2>{d.title}</h2>
            <p>
             {d.description}
             </p>
             <span>Projects</span>
          </div>
        </div>
        <div className="right">
          <img src={d.imgFile} alt="" />
        </div>
      </div>
    </div>
    ))}
  </div>
  <img src="assets/arrow.png" className="arrow left" alt="" />
  <img src="assets/arrow.png" className="arrow right" alt="" />
 </div>
  )
}
