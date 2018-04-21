import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {OcurrencyList, OcurrencyForm} from '../components';

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path={'/'} render={()=>(
                        <ul>
                            <li><Link to={'/occurrence'}>List</Link></li>
                            <li><Link to={'/occurrence/id'}>Form</Link></li>
                        </ul>
                    )}/>
                    <Route exact path={'/'} render={() => (
                        <div>
                            <h1>Welcome! Login</h1>
                        </div>
                    )}/>
                    <Route exact path={'/occurrence/:id'} component={OcurrencyForm}/>
                    <Route exact path={'/occurrence'} component={OcurrencyList}/>
                </div>
            </Router>
        );
    }
}

export default Routes;
