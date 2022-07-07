import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";


export default function Portfolio() {
  const [selected, setSelected] = useState("web dev");
  const list = [
    {
      id: "web dev",
      title: "Web Development"
    }, 
    {
      id:"web app",
      title: "Web Applications"
    }
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
       {list.map((item)=>(
        <PortfolioList key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected}/>
       ))}
      </ul>
      <div className="container">
       <div className="item">
        <img src="assets/book-store.png" alt="" />
        <h3>Book Store</h3>
       </div>
      </div>
    </div>
  );
}