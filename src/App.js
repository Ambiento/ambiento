import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from "./components/main";
import Routes from "./routes/routes";
import theme from './theme.js';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <Main>
                    <Routes />
                </Main>
            </MuiThemeProvider>
        );
    }
}

export default App;
