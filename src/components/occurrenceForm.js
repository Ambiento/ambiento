import React, {Component} from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Style} from '../styles';

class OccurrenceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idOcorrencia: '',
            email: '',
            nome_usuario: '',
            cidade: '',
            estado: '',
            referencia_localizacao: '',
            descricao: '',
            idImg: '',
            localizacao: {
                latitude: '',
                longitude: ''
            }
        };
    }
    handleInputChange(name, value){
        this.setState({[name]: value});
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
                        this.handleInputChange('nome_usuario', event.target.value)
                    }}
                    floatingLabelFixed={true} name={'nome_usuario'} floatingLabelText='Nome'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('email', event.target.value)
                    }}
                    floatingLabelFixed={true} name={'email'} floatingLabelText='E-mail'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('cidade', event.target.value)
                    }}
                    floatingLabelFixed={true} name={'cidade'} floatingLabelText='Cidade'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('estado', event.target.value)
                    }}
                    floatingLabelFixed={true} name={'estado'} floatingLabelText='Estado'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('referencia_localizacao', event.target.value)
                    }}
                    floatingLabelFixed={true} name={'referencia_localizacao'} floatingLabelText='Referência de localização'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('descricao', event.target.value)
                    }}
                    floatingLabelFixed={true}
                    name={'descricao'}
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
