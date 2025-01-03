import React from 'react'

function Technology() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technology</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Mapbox</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Chart.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>

      <div className="skills__box">

        <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Jest</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
    </div>
      </div>
    </div>
  )
}

export default Technology
