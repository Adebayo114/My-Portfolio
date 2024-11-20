import React from "react";
import "../Styles/proficiency.css";

// Importing assets
import HtmlLogo from "../assets/s-img/html-5.png";
import CssLogo from "../assets/s-img/css-3.png";
import JavaScriptLogo from "../assets/s-img/js.png";
import PhpLogo from "../assets/s-img/php.png";
import ReactLogo from "../assets/s-img/react.png";
import TypeScriptLogo from "../assets/s-img/rts.png";
import FigmaLogo from "../assets/s-img/Figma.png";
import CorelDrawLogo from "../assets/s-img/corel.png";

const Proficiencies: React.FC = () => {
  return (
    <div className="start">


      {/* Skills Section */}
      <main>
        {/* Web Development Section */}
        <section>
          <h2 className="section-title">Proficiencies / Skills</h2>
          <div className="skills-grid">
            {/* Skill: HTML */}
            <div className="skill-card">
              <img src={HtmlLogo} alt="HTML Logo" />
              <div className="skill-info">
                <p><span className="highlight">Language:</span> Hypertext Markup Language</p>
                <p><span className="highlight">Mastered For:</span> 2 years</p>
              </div>
            </div>

            {/* Skill: CSS */}
            <div className="skill-card">
              <img src={CssLogo} alt="CSS Logo" />
              <div className="skill-info">
                <p><span className="highlight">Language:</span> Cascading Style Sheets</p>
                <p><span className="highlight">Mastered For:</span> 2 years</p>
              </div>
            </div>

            {/* Skill: JavaScript */}
            <div className="skill-card">
              <img src={JavaScriptLogo} alt="JavaScript Logo" />
              <div className="skill-info">
                <p><span className="highlight">Language:</span> JavaScript</p>
                <p><span className="highlight">Mastered For:</span> 2 years</p>
              </div>
            </div>

            {/* Skill: PHP */}
            <div className="skill-card">
              <img src={PhpLogo} alt="PHP Logo" />
              <div className="skill-info">
                <p><span className="highlight">Language:</span> PHP</p>
                <p><span className="highlight">Mastered For:</span> 3 months</p>
              </div>
            </div>

            {/* Skill: TypeScript */}
            <div className="skill-card">
              <img src={TypeScriptLogo} alt="TypeScript Logo" />
              <div className="skill-info">
                <p><span className="highlight">Language:</span> TypeScript</p>
                <p><span className="highlight">Mastered For:</span> 5 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section>
          <h2 className="section-title">Frameworks</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <img src={ReactLogo} alt="React Logo" />
              <div className="skill-info">
                <p><span className="highlight">Language:</span> React</p>
                <p><span className="highlight">Mastered For:</span> 6 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Graphic Design Section */}
        <section>
          <h2 className="section-title">Graphic Design Skills</h2>
          <div className="skills-grid">
            {/* Skill: Figma */}
            <div className="skill-card">
              <img src={FigmaLogo} alt="Figma Logo" />
              <div className="skill-info">
                <p><span className="highlight">Software:</span> Figma</p>
                <p><span className="highlight">Mastered For:</span> 2 years</p>
              </div>
            </div>

            {/* Skill: Corel Draw */}
            <div className="skill-card">
              <img src={CorelDrawLogo} alt="Corel Draw Logo" />
              <div className="skill-info">
                <p><span className="highlight">Software:</span> Corel Draw</p>
                <p><span className="highlight">Mastered For:</span> 2 years</p>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Proficiencies;
