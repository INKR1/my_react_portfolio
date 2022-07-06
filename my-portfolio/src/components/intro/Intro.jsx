import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./intro.scss";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 500,
      backSpeed: 80,
      strings: ["Front-End Developer", "Front-End Designer", "Content Creator"]
    })
  }, []);
  return (
    <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="assets/ProfilePic.jpg" alt="profile" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Ineta Kreiviene</h1>
        <h3>Junior <span ref={textRef}></span></h3>
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt="arrow down" />
      </a>
    </div>
  </div>
  )
}
