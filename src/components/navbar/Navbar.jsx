import "./style.scss";
import logoLight from "../../assets/logo-light.svg";
import patternLight from "../../assets/navbar-pattern-light.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">
        <img className="logo" src={logoLight} alt="logo" />
      </a>
      <div className="navigation">
        <a href="#about">Sobre</a>
        <a href="#projects">Meus Projetos</a>
        <a href="#contacts">Contatos</a>
      </div>
      <img className="pattern" src={patternLight} alt="" />
    </div>
  );
};

export default Navbar;
