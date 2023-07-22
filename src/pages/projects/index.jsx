import { useState, useEffect } from "react";
import Card from "../../components/card/Card.jsx";
import Modal from "../../components/modal/Modal.jsx";
import axios from "axios";
import "./style.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
    toggleModal();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://portifolio-77973-default-rtdb.firebaseio.com/portifolio/.json"
        );
        setProjects(Object.values(res.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Add or remove the CSS class to the body element based on modal visibility
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  return (
    <div className="projects" id="projects">
      {isModalOpen && (
        <div className="overlay">
          <Modal
            modalVisibility={isModalOpen}
            onClose={toggleModal}
            project={selectedProject}
          />
        </div>
      )}
      <h1>Meus projetos</h1>

      <div className="card-container">
        {projects.map((project) => (
          <>
            <Card
              onButtonClick={() => handleCardClick(project)}
              project={project}
              key={project.name}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
