import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';
import Programming from './Programming';
import DevsOpsTools from './DevsOpsTools';
import Technology from './Technology';

function Skills() {
  return (
    <section className="skills section" id="skills">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My technical level</span>

    <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
        <Database/>
        <Programming/>
        <DevsOpsTools/>
        <Technology/>
    </div>
    </section>
  )
}

export default Skills
