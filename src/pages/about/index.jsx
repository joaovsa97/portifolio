import "./style.scss";

import cssLogo from "../../assets/css-logo.svg";
import htmlLogo from "../../assets/html-logo.svg";
import jsLogo from "../../assets/javascript-logo.svg";
import mongodbLogo from "../../assets/mongodb-logo.svg";
import nodejsLogo from "../../assets/nodejs-logo.svg";
import reactLogo from "../../assets/react-logo.svg";
import vueLogo from "../../assets/vue-logo.svg";
import photo from "../../assets/myphoto.svg";

const About = () => {
  return (
    <div className="about">
      <div className="my-photo">
        <img src={photo} alt="" />
      </div>
      <div className="infos">
        <div className="bio">
          <span>
            <p>
              Olá, muito prazer! Me Chamo <b>João Vitor Silva de Azevedo</b>,
              atualmente resido na cidade do Rio de Janeiro, capital. Sou
              estudante de desenvolvimento de sistemas e apaixonado pela área de
              tecnologia em geral.
            </p>
            <br />
            <p>
              Meus primeiros passos na área foram voltados para os hardwares,
              onde aprendi sobre manutenção, montagem e limpeza de componentes
              desktop. Pouco depois descobri a incrível aréa que é a
              programação, onde iniciei meus estudos e nela descobri o que
              queria seguir no meu futuro. Em 2016 comecei meus estudos na
              instituição de ensino superior Unicarioca, na área de Análise e
              Desenvolvimento de Sistemas. Porém por motivos de saúde e da
              pandemia, precisei interromper minha formação. Não me deixando
              abalar, continuei meus estudos em casa voltados a web.
            </p>
            <br />
            <p>
              Em 2022, consegui uma vaga para formação técnica em
              Desenvolvimento de Sistema pela Escola Fundação Bradesco, onde
              sigo me aprimorando. Neste tempo, aprendi além da programação,
              fazer uso de ferramentas como Figma, Git e Github, Trello e
              Bootstrap.
            </p>
          </span>
        </div>
        <div className="skill">
          <h1>Meus principais conhecimentos são:</h1>
          <div className="logos">
            <img src={cssLogo} alt="css" />
            <img src={htmlLogo} alt="html" />
            <img src={jsLogo} alt="js" />
            <img src={mongodbLogo} alt="mongodb" />
            <img src={nodejsLogo} alt="nodejs" />
            <img src={reactLogo} alt="react" />
            <img src={vueLogo} alt="vue" />
          </div>
          <div className="holder"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
