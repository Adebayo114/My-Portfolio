    import React from "react";
import "../Styles/both.css"
    // Importing assets
    import HtmlLogo from "../assets/s-img/html-5.png";
    import CssLogo from "../assets/s-img/css-3.png";
    import JavaScriptLogo from "../assets/s-img/js.png";
    import PhpLogo from "../assets/s-img/php.png";

    const WebDev: React.FC = () => {
    return (
        <div className="start">


        {/* Header Section */}
        <header className="border-line">
            <h1 className="heading">Portfolio.</h1>
        </header>

        {/* Skills Section */}
        <main>
            <div className="text1">Here Are My Obtained Skills</div>
            <div className="skills-img">
            {/* Skill 1: HTML */}
            <div className="skills-img-kids">
                <img src={HtmlLogo} width="300px" alt="HTML Logo" />
                <div className="text-kid1">
                <span className="head-text">Language</span>: Hypertext-Markup-Language
                </div>
                <div className="text-kid1">
                <span className="head-text">Mastered For</span>: 2 years
                </div>
            </div>

            {/* Skill 2: CSS */}
            <div className="skills-img-kids">
                <img
                id="css"
                src={CssLogo}
                width="220px"
                alt="CSS Logo"
                />
                <div className="text-kid1">
                <span className="head-text">Language</span>: Cascading-Style-Sheet
                </div>
                <div className="text-kid1">
                <span className="head-text">Mastered For</span>: 2 years
                </div>
            </div>

            {/* Skill 3: JavaScript */}
            <div className="skills-img-kids">
                <img src={JavaScriptLogo} width="300px" alt="JavaScript Logo" />
                <div className="text-kid1">
                <span className="head-text">Language</span>: JavaScript
                </div>
                <div className="text-kid1">
                <span className="head-text">Mastered For</span>: 2 years
                </div>
            </div>



            <div className="skills-img-kids">
            <img src={PhpLogo} width="300px" alt="React Logo" />
            <div className="text-kid1">
                <span className="head-text">Language</span>: Php
            </div>
            <div className="text-kid1">
                <span className="head-text">Mastered For</span>: 3 months
            </div>
            </div>
            </div>

        
        </main>


        </div>
    );
    };

    export default WebDev;
