import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppContainer = () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
      <AppBar
        title='Jopa Book'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
      />
    </MuiThemeProvider>
  </div>
);


AppContainer.propTypes = {
  location: PropTypes.object
};

export default AppContainer;
