import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from "./routes/routes";
import theme from './theme.js';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <Routes />
            </MuiThemeProvider>
        );
    }
}

export default App;
