import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Routes from "./routes/routes";
import theme from './theme.js';

class App extends Component {
    componentDidMount(){
        const occurrences = JSON.parse(localStorage.getItem('occurrences'));
        if(!occurrences){
            localStorage.setItem('occurrences', null);
        }
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <Routes />
            </MuiThemeProvider>
        );
    }
}

export default App;
