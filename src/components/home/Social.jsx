import React from "react";

function Social(){
    return(
        <div className="home__social">
            <a 
                href="https://www.instagram.com/rohitt.__27/" 
                className="home__social-icon" 
                target="__blank"
            >
                <i class="uil uil-instagram"></i>
            </a>

            <a 
                href="https://www.linkedin.com/in/rohit-kumar-9121b6210/" 
                className="home__social-icon" 
                target="__blank"
            >
            <i class="uil uil-linkedin"></i>
            </a>
            
            <a 
                href="https://github.com/GitNinja36" 
                className="home__social-icon" 
                target="__blank"
            >
                <i class="uil uil-github-alt"></i>
            </a>

        </div>
    )
}

export default Social;