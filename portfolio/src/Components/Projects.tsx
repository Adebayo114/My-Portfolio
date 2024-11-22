    import "../Styles/portfolio.css"; // Import your CSS file
    import "animate.css"; // Import animate.css for animations
    import bckground2 from "../assets/images1/pce.jpeg";
    import githubLogo from "../assets/Socials/gh.png"; // Add your GitHub logo image path here

    const Projects: React.FC = () => {
    return (
        <div className="start">
        <div className="heading2">
            <div>
            Latest <span className="cd">Project</span>
            </div>
        </div>

        <div className="show-room">
            {/* Project Link */}
            <a
            href="https://hng2-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div
                className="show-kids"
                style={{ backgroundImage: `url(${bckground2})` }}
            >
                <div className="show-kids1">Pc Zone</div>
            </div>
            </a>

            {/* GitHub Repository Link */}
            <a
                    href="https://github.com/Adebayo114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    aria-label="Visit my GitHub profile"
                    >
                    <div className="github-logo">
                        <img src={githubLogo} alt="GitHub Logo" />
                    </div>
            </a>
<div className="text">Head for GitHub pages when attempting to view Hosted live pages</div>

        </div>
        </div>
    );
    };

    export default Projects;
