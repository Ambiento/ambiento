import React, {Component} from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Style} from '../styles';
import axios from "axios/index";

class OccurrenceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            occurrence: {
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
            }
        };
    }
    componentDidMount(){
        // console.log(this.props.match.params.id);
        const idOcorrencia = this.props.match.params.id;
        if(idOcorrencia){
            axios.get(`http://localhost:8080/api/ocorrencia/${idOcorrencia}`).then((response) => {
                this.setState({occurrence: response.data});
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
                        this.handleInputChange('nome_usuario', event.target.value)
                    }}
                    value={this.state.occurrence.nome_usuario}
                    floatingLabelFixed={true} name={'nome_usuario'} floatingLabelText='Nome'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('email', event.target.value)
                    }}
                    value={this.state.occurrence.email}
                    floatingLabelFixed={true} name={'email'} floatingLabelText='E-mail'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('cidade', event.target.value)
                    }}
                    value={this.state.occurrence.cidade}
                    floatingLabelFixed={true} name={'cidade'} floatingLabelText='Cidade'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('estado', event.target.value)
                    }}
                    value={this.state.occurrence.estado}
                    floatingLabelFixed={true} name={'estado'} floatingLabelText='Estado'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('referencia_localizacao', event.target.value)
                    }}
                    value={this.state.occurrence.referencia_localizacao}
                    floatingLabelFixed={true} name={'referencia_localizacao'} floatingLabelText='Referência de localização'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('descricao', event.target.value)
                    }}
                    value={this.state.occurrence.descricao}
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
