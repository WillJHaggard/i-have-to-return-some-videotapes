import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import World from 'components/World/World';

export default createPureComponent({

  displayName: 'Game',

  render() {
    return (
      <div className="game">
        <World />
      </div>
    );
  }

});
