import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Signup, OcurrencyList, OcurrencyForm, Login} from '../components';
import Main from "../components/main";
import {Style} from '../styles';

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path={'/'} render={()=>(
                        <div>
                            <Main/>
                            <ul>
                                <li><Link to={'/occurrence'}>List</Link></li>
                                <li><Link to={'/occurrence/new'}>Form</Link></li>
                            </ul>
                        </div>
                    )}/>
                    <div style={Style.content}>
                        <Route exact path={'/'} component={Login}/>
                        <Route exact path={'/signup'} component={Signup}/>
                        <Route exact path={'/occurrence/:id'} component={OcurrencyForm}/>
                        <Route exact path={'/occurrence'} component={OcurrencyList}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Routes;
