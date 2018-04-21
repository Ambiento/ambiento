import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <div className={'main'}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
