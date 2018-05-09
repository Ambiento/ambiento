import React, {Component} from 'react';
import {Card, CardActions, CardText} from 'material-ui/Card';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Style from "../styles/style";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
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
                <div>
                    <TextField
                        onChange={(event) => {
                            this.handleInputChange('name', event.target.value)
                        }}
                        floatingLabelFixed={true} name={'name'} floatingLabelText='Nome'/><br/>
                    <TextField
                        onChange={(event) => {
                            this.handleInputChange('email', event.target.value)
                        }}
                        floatingLabelFixed={true} name={'email'} floatingLabelText='E-mail'/><br/>
                    <TextField
                        onChange={(event) => {
                            this.handleInputChange('email', event.target.value)
                        }}
                        type="password"
                        floatingLabelFixed={true} name={'password'} floatingLabelText='Senha'/><br/>
                </div>
                <CardActions>
                    <FlatButton label='Cadastrar'/>
                </CardActions>
                <CardActions>
                    <CardText>Já possui conta?</CardText>
                    <Link to={'/'}>
                        <FlatButton label='Login'/>
                    </Link>
                </CardActions>
            </Card>
        );
    }
}

export default Signup;
