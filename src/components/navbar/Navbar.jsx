import "./style.scss";
import logoLight from "../../assets/logo-light.svg";
import patternLight from "../../assets/navbar-pattern-light.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logoLight} alt="logo" />
      <div className="navigation">
        <button>About Me</button>
        <button>My Projects</button>
        <button>Contact Me</button>
      </div>
      <img className="pattern" src={patternLight} alt="" />
    </div>
  );
};

export default Navbar;
