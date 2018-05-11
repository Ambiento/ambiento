import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Routes from "./routes/routes";
import theme from './theme.js';
/*
    TODO: desenvolver uma forma melhor de gerenciar o localstorage, talvez uma classe ou achar alguma lib
 */
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
