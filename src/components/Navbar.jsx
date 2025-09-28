
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const base = import.meta.env.BASE_URL; 

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand" aria-label="Home">
          <img
            src={`${base}assets/logo.svg`}   
            alt=""
            className="logo"
            width="28"
            height="28"
          />
          <span className="brand-text">Tamana Majedi</span>
        </NavLink>

        <div className="spacer" />
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
}
