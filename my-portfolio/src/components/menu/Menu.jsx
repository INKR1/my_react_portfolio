import "./menu.scss";

export default function Menu({ menuActive, setMenuActive }) {
  return (
  <div className={"menu " +(menuActive && "active")}>
    <ul>
        <li onClick={()=>setMenuActive(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuActive(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuActive(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuActive(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuActive(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
  </div>
  )
}
