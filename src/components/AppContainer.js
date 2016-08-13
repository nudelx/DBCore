import React, { Component, PropTypes } from 'react';


class AppContainer extends Component {
  static propTypes = {
    pathname: PropTypes.object
  };

  componentWillMount () {
    console.dir(this.props) // eslint-disable-line
  }

  render () {
    return (
      <div>{'env is ready for dev '}</div>
    );
  }
}

export default AppContainer;
