import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <section> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0621011353564!2d3.480697574754342!3d6.6392105933552745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bec125b45f477%3A0x4e3ea58f94b86e18!2s13%2C%2014%20Godwin%20Enaboje%20St%2C%20Ikorodu%2C%20104101%2C%20Lagos!5e0!3m2!1sen!2sng!4v1752741902122!5m2!1sen!2sng" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {new Date().getFullYear()} RCCG LP41 YAYA.</p>
       
      </div>
    </footer>
</section>
  );
};

export default Footer;
