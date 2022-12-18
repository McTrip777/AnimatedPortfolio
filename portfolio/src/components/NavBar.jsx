import Nav from "react-bootstrap/Nav";
import '../styles/navbar.css';
import {Outlet} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {

    const navEffect = () => {
        const navComponent = document.querySelector(".cNavContainer")
        const navArrow = document.querySelector(".arrow")
        const navTags = document.querySelectorAll(".hoverStyles")
        if(navComponent.classList.contains("visible")){
            navComponent.classList.remove("visible")
            navArrow.classList.remove("right")
            navTags.forEach(item => item.classList.remove("clickAnimation"))
        }else{
            navComponent.classList.add("visible")
            navArrow.classList.add("right")
            navTags.forEach(item => item.classList.add("clickAnimation"))
        }
    }

  return (
    <div className="d-flex">
        <svg className="svg-icon__arrow--right arrow position-fixed" onClick={navEffect} viewBox="0 0 7 12"  preserveAspectRatio="MinYMin" xmlns="http://www.w3.org/2000/svg">
            <path className="arrowSvg" fill="#84a98c" d="M6.893 5.967c0-.268-.107-.524-.295-.713L1.724.37C1.33-.024.692-.024.3.37c-.394.394-.394 1.033 0 1.427l4.162 4.17L.3 10.137c-.394.394-.394 1.033 0 1.427.392.394 1.03.394 1.424 0L6.598 6.68c.188-.19.295-.445.295-.713z"/>
        </svg>
      <Nav
        defaultActiveKey="/home"
        className="cNavContainer h2 d-flex flex-column"
      >
        <Link to="/home#title" onClick={navEffect} eventKey="link-1" className="hoverStyles">
          <h2>Home</h2>
        </Link>
        <Link onClick={navEffect} eventKey="link-2" className="hoverStyles">
          <h2>About</h2>
        </Link>
        <Link to="/projects" onClick={navEffect} eventKey="link-3" className="hoverStyles">
          <h2>Projects</h2>
        </Link>
        <Link to="/home#contact" onClick={navEffect} eventKey="link-4" className="hoverStyles">
          <h2>Contact</h2>
        </Link>
        {/* <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link> */}
      </Nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
