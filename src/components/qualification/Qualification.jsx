import React, {useState} from 'react'; 
import "./qualification.css";

function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index)=>{
        setToggleState(index);
    }

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className = {
                        toggleState === 1 ?
                        "qualification__button qualification__active button--flex"
                        :
                        "qualification__button button--flex"
                    }
                    onClick={()=> toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
                <div 
                    className = {
                        toggleState === 2 ?
                        "qualification__button qualification__active button--flex"
                        :
                        "qualification__button button--flex"
                    }
                    onClick={()=> toggleTab(2)}
                >
                <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
            </div>

        </div>

        <div className="qualification__sections">

            <div 
                className = {
                    toggleState === 1 ?
                    "qualification__content qualification__content-active"
                    :
                    "qualification__content"
            }>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"> Education</h3>
                        <span className="qualification__subtitle"> NIT Durgapur</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022 - Present
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Education</h3>
                        <span className="qualification__subtitle"> DAV public school</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2020 - 2021
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"> Education</h3>
                        <span className="qualification__subtitle"> DAV public school</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2018 - 2019
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                {/* <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Art Director</h3>
                        <span className="qualification__subtitle"> DAV Public School</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2018 - 2019
                        </div>
                    </div>
                </div> */}

            </div>

            <div 
                className = {
                    toggleState === 2 ?
                    "qualification__content qualification__content-active"
                    :
                    "qualification__content"
                }>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"> Web Developer</h3>
                        <span className="qualification__subtitle"> NIT Durgapur</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022 - Present
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">UI/UX Designer</h3>
                        <span className="qualification__subtitle"> NIT Durgapur </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022 - Present
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Event Coordinator</h3>
                        <span className="qualification__subtitle">AAROHAN</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022 - present
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Editor</h3>
                        <span className="qualification__subtitle">AAROHAN</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022 - Present
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </div>
    </section>
  )
}

export default Qualification
