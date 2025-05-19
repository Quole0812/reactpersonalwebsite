import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="header-container">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </>
  );
}