import React, {Component} from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class OccurrenceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_ocorrencia: '',
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

    render() {
        return (
            <Card className={'card'}>
                <CardHeader
                    title='Nome'
                    subtitle='Cargo (role)'
                    avatar='images/jsa-128.jpg'
                />
                <TextField floatingLabelFixed={true} name={'nome_usuario'} floatingLabelText='Nome'/><br/>
                <TextField floatingLabelFixed={true} name={'email'} floatingLabelText='E-mail'/><br/>
                <TextField floatingLabelFixed={true} name={'cidade'} floatingLabelText='Cidade'/><br/>
                <TextField floatingLabelFixed={true} name={'estado'} floatingLabelText='Estado'/><br/>
                <TextField floatingLabelFixed={true} name={'referencia_localizacao'} floatingLabelText='Referência de localização'/><br/>
                <TextField
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
