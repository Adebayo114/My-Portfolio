    import "../Styles/portfolio.css"; // Import your CSS file
    import "animate.css"; // Import animate.css for animations
    import bckground1 from "../assets/images1/fg.png";
    import bckground2 from "../assets/images1/pce.jpeg";
    import bckground3 from "../assets/images1/cec.jpg";

    const Projects: React.FC = () => {
    return (
        <div className="start">
        <div className="heading2">
            <div>
            Latest <span className="cd">Project</span>
            </div>
        </div>

        <div className="show-room">
            {/* External links should use <a> instead of <Link> */}
            <a
            href="https://adebayo114.github.io/Flame-game/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div
                className="show-kids"
                style={{ backgroundImage: `url(${bckground1})` }}
            >
                <div className="show-kids1">Flames Games</div>
            </div>
            </a>

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

            <a
            href="https://adebayo114.github.io/L-Site/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div
                className="show-kids"
                style={{ backgroundImage: `url(${bckground3})` }}
            >
                <div className="show-kids1">Auto mobile Homepage</div>
            </div>
            </a>
        </div>
        </div>
    );
    };

    export default Projects;
