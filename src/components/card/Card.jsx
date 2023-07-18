import "./style.scss";

const Card = ({ project, onButtonClick }) => {

  return (
    <div className="card">
      <div className="card-header">
        <img src={project.image} alt="" />
      </div>
      <div className="card-body">
        <div className="title">
          <span>
            <h3>{project.title}</h3>
          </span>
        </div>
        <div className="desc">
          <span>{project.desc}</span>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={onButtonClick}>Ver Mais</button>
      </div>
    </div>
  );
};

export default Card;
