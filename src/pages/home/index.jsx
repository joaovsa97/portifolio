import "./style.scss";
import myPhoto from "../../assets/myphoto.svg";

const Home = () => {
  return (
    <div className="home" id="home">
        <div className="my-photo">
          <img src={myPhoto} alt="" />
        </div>
        <div className="content">
          <span>
            Bem Vindo ao meu <b>Portifólio</b>!
          </span>
        </div>
      </div>
  );
};

export default Home;
