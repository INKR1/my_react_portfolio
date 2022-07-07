import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import { webDevPortfolio, webAppPortfolio } from "../../data";


export default function Portfolio() {
  const [selected, setSelected] = useState("web dev");
  const [data, setData] = useState([]);
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

  useEffect(() => {

    switch (selected) {
      case "web dev":
        setData(webDevPortfolio);
        break;
      case "web app":
        setData(webAppPortfolio);
        break;
      default:
        setData(webDevPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
       {list.map((item)=>(
          <PortfolioList 
            key={item.id}
            id={item.id} 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img 
              src={d.imgFile} 
              alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}