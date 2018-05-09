import React, {Component} from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Style} from '../styles';
import axios from "axios";

class OccurrenceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            occurrence: {
                id: '',
                email: '',
                name: '',
                city: '',
                state: '',
                reference: '',
                description: '',
                imgUrl: '',
                localizacao: {
                    latitude: '',
                    longitude: ''
                }
            }
        };
    }
    componentDidMount(){
        // console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        if(id !== 'new'){
            axios.get(`http://localhost:8080/api/occurrence/${id}`).then((response) => {
                if(response.data) {
                    this.setState({occurrence: response.data});
                }
            })
        }
    }
    handleInputChange(name, value){
        let {occurrence} = this.state;
        occurrence[name] = value;
        this.setState({occurrence});
    }
    render() {
        return (
            <Card style={Style.card}>
                <CardHeader
                    title='Nome'
                    subtitle='Cargo (role)'
                    avatar='images/jsa-128.jpg'
                />
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('name', event.target.value)
                    }}
                    value={this.state.occurrence.name}
                    floatingLabelFixed={true} name={'name'} floatingLabelText='Nome'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('email', event.target.value)
                    }}
                    value={this.state.occurrence.email}
                    floatingLabelFixed={true} name={'email'} floatingLabelText='E-mail'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('city', event.target.value)
                    }}
                    value={this.state.occurrence.city}
                    floatingLabelFixed={true} name={'city'} floatingLabelText='city'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('state', event.target.value)
                    }}
                    value={this.state.occurrence.state}
                    floatingLabelFixed={true} name={'state'} floatingLabelText='state'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('reference', event.target.value)
                    }}
                    value={this.state.occurrence.reference}
                    floatingLabelFixed={true} name={'reference'} floatingLabelText='Referência de localização'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('description', event.target.value)
                    }}
                    value={this.state.occurrence.description}
                    floatingLabelFixed={true}
                    name={'description'}
                    floatingLabelText='Descrição da ocorrência'
                    multiLine={true}
                    rows={1}
                    rowsMax={4}/>
                <CardActions>
                    <FlatButton label='Salvar'/>
                    <FlatButton label='Cancelar'/>
                </CardActions>
            </Card>
        );
    }
}

export default OccurrenceForm;
