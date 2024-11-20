 
    import "../Styles/portfolio.css"; // Import your CSS file
    import "animate.css"; // Import animate.css for animations
    import { Link } from "react-router-dom";
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
           <Link to="https://adebayo114.github.io/Flame-game/">
            <div
                className="show-kids"
                style={{ backgroundImage: `url(${bckground1})` }}
                >
                <div className="show-kids1">Flames Games</div>
                </div>
           </Link>


            <Link to="https://hng2-eta.vercel.app/">
                <div
                className="show-kids"
                style={{ backgroundImage: `url(${bckground2})` }}
                >
                <div className="show-kids1">Pc Zone</div>
                </div>
            </Link>

            <Link to="https://adebayo114.github.io/L-Site/">
                <div className="show-kids"
                style={{ backgroundImage: `url(${bckground3})` }}
                >
                <div className="show-kids1">Auto mobile Homepage</div>
                </div>
            </Link>
{/* 
            <div className="show-kids">
            <div className="show-kids1"></div>
            </div>

            <div className="show-kids">
            <div className="show-kids1"></div>
            </div>

            <div className="show-kids">
            <div className="show-kids1"></div>
            </div> */}
        </div>
        </div>
    );
    };

    export default Projects;
