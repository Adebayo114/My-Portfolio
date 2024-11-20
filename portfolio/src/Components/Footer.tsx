    import React from "react";

    const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <footer>
        <div className="footer-child">© {currentYear}</div>
        </footer>
    );
    };

    export default Footer;
