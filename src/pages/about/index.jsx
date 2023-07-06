import "./style.scss";

import cssLogo from "../../assets/css-logo.svg";
import htmlLogo from "../../assets/html-logo.svg";
import jsLogo from "../../assets/javascript-logo.svg";
import mongodbLogo from "../../assets/mongodb-logo.svg";
import nodejsLogo from "../../assets/nodejs-logo.svg";
import reactLogo from "../../assets/react-logo.svg";
import vueLogo from "../../assets/vue-logo.svg";

const About = () => {
  return (
    <div className="about">
      <div className="bio">
        <h1>nome: joao</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laborum laboriosam. Itaque eos commodi laudantium.
      </div>
      <div className="hard-skill">
        <h1>Hard Skills</h1>
        <div className="logos">
          <img src={cssLogo} alt="css" />
          <img src={htmlLogo} alt="html" />
          <img src={jsLogo} alt="js" />
          <img src={mongodbLogo} alt="mongodb" />
          <img src={nodejsLogo} alt="nodejs" />
          <img src={reactLogo} alt="react" />
          <img src={vueLogo} alt="vue" />
        </div>
      </div>
      <div className="soft-skill"></div>
    </div>
  );
};

export default About;
