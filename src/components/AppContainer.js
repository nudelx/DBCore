import React, { PropTypes } from 'react';

const AppContainer = ({ location }) => (
  <div>{`current pah is ${location.pathname}`}</div>
);

AppContainer.propTypes = {
  location: PropTypes.object
};
export default AppContainer;
