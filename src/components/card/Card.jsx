import "./style.scss"

const Card = (props) => {
  //   const { title, desc, link } = props;

  return (
    <div className="card">
      <div className="card-header">
        <img src="" alt="" />
      </div>
      <div className="card-body">
        <div className="title">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            vero.
          </span>
        </div>
        <div className="desc">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, quisquam.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
