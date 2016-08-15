import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import classNames from 'classnames';
import classes from './Test.scss';

injectTapEventPlugin();
const AppContainer = () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
      <AppBar
        className={classNames('ddd', 'dddddd', classes.Fuck)}
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
