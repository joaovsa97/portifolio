import Linkedin from "../../assets/linkedin-logo-sharp.svg";
import Github from "../../assets/github-logo.svg";
import Gmail from "../../assets/gmail-logo.svg";
import Whatsapp from "../../assets/whatsapp-logo.svg";

import "./style.scss";

const Contact = () => {
  return (
    <div className="contact" id="contacts">
      <div className="divider"></div>
      <div className="infos">
      <div className="contacts">
        <p>
          <span>Você pode me encontrar nas seguintes plataformas</span>
        </p>
        <a href="https://www.linkedin.com/in/joaoazevedo97/" target="_blank">
          <img src={Linkedin} alt="" />
        </a>
        <a href="https://github.com/joaovsa97" target="_blank">
          <img src={Github} alt="" />
        </a>
        <a href="mailto:joaos.azevedo10@gmail.com" target="_blank">
          <img src={Gmail} alt="" />
        </a>
        <a href="https://wa.me/+55021979294084" target="_blank">
          <img src={Whatsapp} alt="" />
        </a>
      </div>
      <div className="contacts">
        <p>
          <span>Ou por onde preferir, utilizando os seguintes contatos:</span>
        </p>
        <p>
          <span>E-mail: joaos.azevedo10@gmail.com</span>
        </p>
        <p>
          <span>Telefone: (021)97929-4084</span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Contact;
