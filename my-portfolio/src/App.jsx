import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import "./app.scss";
import { useState } from 'react';

function App() {

    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className="app">
           <Topbar menuActive={menuActive} setMenuActive={setMenuActive}/>
           <div className="sections">
            <Intro/>
            <Portfolio/>
            <Works/>
            <Testimonials/>
            <Contact/>
           </div>
        </div>
    )
}

export default App;
