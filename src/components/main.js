import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar title={<Link to={'/'}>Title</Link>} iconClassNameRight="muidocs-icon-navigation-expand-more" />
            </div>
        );
    }
}

export default Main;
