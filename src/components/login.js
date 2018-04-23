import React, {Component} from 'react';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Style from "../styles/style";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }
    handleInputChange(name, value){
        this.setState({[name]: value});
    }
    render() {
        return (
            <Card style={Style.card}>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('email', event.target.value)
                    }}
                    floatingLabelFixed={true} name={'email'} floatingLabelText='E-mail'/><br/>
                <CardActions>
                    <FlatButton label='Login'/>
                </CardActions>
            </Card>
        );
    }
}

export default Login;
