import React from 'react'
import countryFacts from '../api/countryData.json'

function About() {
  return (
    // Here we have 2 things -> inside layout we have 1 heading & many cards 
    <section className='section-about container'>
      <h2 className='container-title'>
        Fascinating Facts
        <br />
        We're Proud to Share 
      </h2>

      {/* Cards */}
      <div className='gradient-cards'>

        {countryFacts.map((currentCountry) => {
          const {id, countryName, capital, population, interestingFact} = currentCountry;
          return (
            <div className='card' key={currentCountry.id}>

              <div className='container-card bg-blue-box'>
                <p className='card-title'>{countryName}</p>
                <p>
                  <span className='card-description'>Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className='card-description'>Population: </span>
                  {population}
                </p>
                <p>
                  <span className='card-description'>Interesting Facts: </span>
                  {interestingFact}
                </p>
                
              </div>

            </div>
          );
        })}

        
      </div>
    </section>
  )
}

export default About