
    import '..//Styles/index.css';
    import TwitterLogo from '../assets/images/twitter.png';
    import InstagramLogo from '../assets/images/instagram (2).png';
    import LinkedInLogo from '../assets/images/linked-in-logo-of-two-letters.png';
    
// Import the NavBar component

    function HomePage() {
    return (
        <div className="start">

        <div className="heading">Portfolio.</div>

        <div className="greeting-part">
            <div className="part-kids">
            Hello, I am
            <div className="part-kids2">Adebayo | Oladayo</div>
            <br />
            <div className="kids-3">
                As a web developer, I have the power to bring ideas to life on the
                digital frontier. I expertise in coding languages, design
                principles, and problem-solving skills allows me to craft visually
                stunning and functional websites and web applications. With a keen
                eye for detail and a passion for innovation, I strive to create
                seamless user experiences that captivate and engage audiences. My
                dedication to staying current with industry trends and technologies
                sets me apart as a forward-thinking creator in the ever-evolving
                world of web development.
            </div>
            </div>

            <div className="logo-link">


            <div className="link1">
                <a href="https://twitter.com/DayoAdebay86128">
                <img src={TwitterLogo} alt="Twitter Logo" />
                </a>
            </div>

            <div className="link1">
                <a href="https://www.instagram.com/dynasty_tech1?igsh=YzljYTk1ODg3Zg==">
                <img src={InstagramLogo} alt="Instagram Logo" />
                </a>
            </div>

            <div className="link1">
                <a href="https://www.linkedin.com/in/adebayo-oladayo-a8b491266">
                <img
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                />
                </a>
            </div>
            </div>

            <div className="btn1">Download CV</div>
        </div>

        {/* Uncomment if the image is necessary */}
        {/* <div className="myimage">
            <img id="myimage2" src="./images/my image.png" alt="My Image" />
        </div> */}

        </div>
    );
    }

    export default HomePage;
