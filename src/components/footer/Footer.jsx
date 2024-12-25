import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rohit</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="https://www.instagram.com/rohitt.__27/" 
                    className="footer__social-link" 
                    target="__blank"
                >
                    <i class="bx bxl-instagram"></i>
                </a>

                <a 
                    href="https://www.linkedin.com/in/rohit-kumar-9121b6210/" 
                    className="footer__social-link" 
                    target="__blank"
                >
                    <i class="bx bxl-linkedin"></i>
                </a>
            
                <a 
                    href="https://x.com/Dracoo_36" 
                    className="footer__social-link" 
                    target="__blank"
                >
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; Crypticalcoder. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
