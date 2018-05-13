import React, {Component} from 'react';
import {Card, CardActions} from 'material-ui/Card';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Style from "../styles/style";
/*
TODO: Fazer login
 */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: ''
            }
        };
    }
    handleInputChange(name, value){
        let {user} = this.state;
        user[name] = value;
        this.setState({user});
    }
    render() {
        return (
            <Card style={Style.card}>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('email', event.target.value)
                    }}
                    floatingLabelFixed={true} name={'email'} floatingLabelText='E-mail'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('email', event.target.value)
                    }}
                    type='password'
                    floatingLabelFixed={true} name={'password'} floatingLabelText='Senha'/><br/>
                <CardActions>
                    <FlatButton label='Login'/>
                    <Link to={'signup'}>
                        <FlatButton label='Cadastrar'/>
                    </Link>
                </CardActions>
            </Card>
        );
    }
}

export default Login;
