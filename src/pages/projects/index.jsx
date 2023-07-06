import Card from "../../components/card/Card.jsx";
import "./style.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Meus projetos</h1>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
