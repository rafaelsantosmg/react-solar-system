import React, { Component } from 'react';
import Title from './Title';
// import PropTypes from 'prop-types';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
      </div>
    );
  }
}

// SolarSystem.propTypes = {
// };

export default SolarSystem;
