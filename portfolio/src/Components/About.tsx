    import React from 'react';
    import '../Styles/about.css';
    import { Link } from 'react-router-dom';
    import 'animate.css';
  

    const About: React.FC = () => {
    return (
        <div className="start">
        {/* The global NavBar is handled in App.tsx */}

        <div className="border-line">
            <div className="heading">Portfolio.</div>
        </div>

        <div className="sec-2">
 

            <div className="sec-2-kid1">
            About Me
            <div className="sec2-kid2">Hi There 👋, I'm Here To Give You The Best Service</div>
            <div className="kids-3">
                I am a passionate and dedicated professional with a strong background in web development and design. With 
                years of experience mastering cutting-edge technologies, I thrive on crafting seamless user experiences and visually stunning 
                designs. Whether it's building dynamic websites, intuitive applications, or creative layouts, my mission is to deliver 
                high-quality results that exceed expectations.
                <br /><br />
                My journey has been defined by continuous learning and an unwavering commitment to excellence. I take pride in 
                understanding my clients' unique needs, translating their visions into reality, and providing innovative solutions 
                that make a lasting impact. From front-end development to graphic design, my skill set is both versatile and specialized, 
                ensuring every project is approached with creativity and precision.
                <br /><br />
                Let’s collaborate and bring your ideas to life!
            </div>
            </div>
        </div>

            <Link to="/services">
            <div className="parent-container">
            <div className="btn1">Read More</div>
        </div>
            </Link>
        </div>
    );
    };

    export default About;
