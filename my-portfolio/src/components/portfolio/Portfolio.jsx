import "./portfolio.scss";


export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
       <li className="active">Web Development</li>
       
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