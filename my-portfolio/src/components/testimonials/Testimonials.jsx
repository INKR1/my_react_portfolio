import "./testimonials.scss";

export default function Testimonials() {
  return (
  <div className="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div className="container">
      <div className="card">
        <div className="top">This is top and here wil be img</div>
        <div className="center">This is Center and here wil be reviews</div>
        <div className="bottom">This is bottom and here will be 
          <h3>name</h3>
          <h4>position</h4>
        </div>
      </div>
    </div>
  </div>
  )
}
