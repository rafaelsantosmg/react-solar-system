import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
// import PropTypes from 'prop-types';

class SolarSystem extends Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solar-planets">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

// SolarSystem.propTypes = {
// };

export default SolarSystem;
