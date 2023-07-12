import "./style.scss";

const Card = (props) => {
    const { title, desc, image } = props;

  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <div className="title">
          <span>
            <h3>
              title
              </h3>
            {/* {title} */}
          </span>
        </div>
        <div className="desc">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, facere?
            {/* {desc} */}
          </span>
        </div>
      </div>
      <div className="card-footer">
        <button>Ver Mais</button>
      </div>
    </div>
  );
};

export default Card;
