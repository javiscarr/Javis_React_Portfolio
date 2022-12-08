import React from "react";
import './footer.css'
import FooterSocial from "./FooterSocials";


const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
       <h4 className="copyright">Copyright © Javis M. Carr 2022</h4>
       <FooterSocial/>
    </div>

    </footer>
   
    



  );
}

export default Footer;
