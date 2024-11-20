    import React from "react";
    import "../Styles/my service.css";
    import { Link } from "react-router-dom";
    const Services: React.FC = () => {
    return (
        <div className="start">
        <div className="border-line">
            <div className="heading">Portfolio.</div>
        </div>

        {/* Services Section */}
        <div className="head-sub">
            <div>
            My <span className="cd">Service</span>
            </div>
        </div>

        <div className="service-board">
            {/* Web Development Service */}
            <div className="service-board-kids">
            <div className="service-text1">Web Development</div>
            <div className="service-text">
                As a Web developer i tend to create websites <br />
                and web applications. which involves designing, coding, and <br />
                <div className="text3">
                maintaining the various elements that make up a website.
                </div>
            </div>
                <Link to="/wd">
                    <div className="btn1">Read More</div>
                </Link>
            
            </div>

            {/* Graphic Designing Service */}
            <div className="service-board-kids">
            <div className="service-text2">Graphic Designing</div>
            <div className="service-text">
                As a Graphic designer,creating <br />
                visual content using elements like colors, typography,<br />
                and images to communicate messages effectively. It involves designing logos,
                <br />
                and layouts for various mediums such as{" "}
                <div className="text3">
                websites, advertisements, and print materials.
                </div>
            </div>
                <Link to="/grph">
                    <div className="btn1">Read More</div>
                </Link>
                
            
            </div>

                                    {/* frontend Service */}
                                    <div className="service-board-kids">
            <div className="service-text2">Front-End Developer</div>
            <div className="service-text">
            As a front-end developer, I create the visual and interactive parts of a website <br />
            the parts people see and use.I use tools like HTML for structure, CSS for styling, and <br />
            JavaScript for functionality. I bring designs to life, ensuring the website is
                <br />
                responsive, user-friendly, and matches the intended vision.{" "}
            </div>
                <Link to="/frontend">
                    <div className="btn1">Read More</div>
                </Link>
                
            
            </div>


            {/* Problem Solver Service */}
<div className="service-board-kids">
    <div className="service-text2">Problem Solver</div>
    <div className="service-text">
        As a problem solver, I analyze challenges and develop effective solutions <br />
        by breaking them down into manageable steps. I use logical thinking, creativity, <br />
        and technical skills to address issues efficiently. Whether it’s debugging code, <br />
        optimizing a process, or creating new features, I thrive on tackling problems <br />
        and turning them into opportunities for improvement.{" "}
    </div>
        <Link to="">
            <div className="btn1">Read More</div>
        </Link>
    
    
</div>


            {/* Coming Soon Service */}
            <div className="service-board-kids">
            <div className="service-text2">Coming Soon</div>
            <div className="service-text1">
                <div className="loader"></div>
            </div>
            <div className="service-text">
                <div className="text2"></div>
            </div>
            <div className="btn1">Read More</div>
            </div>




        </div>
        </div>
    );
    };

    export default Services;
