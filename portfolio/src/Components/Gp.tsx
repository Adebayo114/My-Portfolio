
    import FigmaLogo from "../assets/s-img/Figma.png";
    import CorelDrawLogo from "../assets/s-img/corel.png";
    import '../Styles/both.css'


        function Gp() {
        return (
            <div className="start">
            {/* Header Section */}
            <header className="border-line">
            <div className="heading">Portfolio.</div>
            </header>
    
            {/* Skills Section */}
            <main>
            <div className="text1">Here Are My Obtained Skills</div>
            <div className="skills-img">
                {/* Skill 1 */}
                <div className="skills-img-kids">
                <img
                    src={FigmaLogo}
                    width="300px"
                    alt="Figma Logo"
                />
                <div className="text-kid1">
                    <span className="head-text">Software</span>: Figma
                </div>
                <div className="text-kid1">
                    <span className="head-text">Mastered For</span>: 2 years
                </div>
                </div>
    
                {/* Skill 2 */}
                <div className="skills-img-kids">
                <img
                    id="css1"
                    src={CorelDrawLogo}
                    width="350px"
                    alt="Corel Draw Logo"
                />
                <div className="text-kid1">
                    <span className="head-text">Software</span>: Corel Draw
                </div>
                <div className="text-kid1">
                    <span className="head-text">Mastered For</span>: 2 years
                </div>
                </div>
            </div>
            </main>
    

        </div>
        )
        }

        export default Gp