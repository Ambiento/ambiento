import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { withRouter } from "react-router-dom";
import {Style} from '../styles';
import {mapsApiKey} from '../config';
import axios from "axios";

class OccurrenceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            occurrence: {
                city: '',
                state: '',
                reference: '',
                description: '',
                imgurl: 'http://res.cloudinary.com/ambt/image/upload/v1525480427/sample.jpg',
                latitude: null,
                longitude: null,
                user: 1
            }
        };
        this.saveOnLocalStorage = this.saveOnLocalStorage.bind(this);
    }
    /*
        TODO: Fazer a edição das ocorrencias que não foram enviadas, ou seja, ainda estão no localStorage:
        TODO: o parametro /:id deve corresponder ao index da ocorrencia no localStorage
     */
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('Precisão de Mais ou menos ' + position.coords.accuracy + ' metros.');
            let {occurrence} = this.state;
            let location = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            };
            occurrence.latitude = location.latitude;
            occurrence.longitude = location.longitude;
            this.setState({occurrence}, console.log(this.state.occurrence));
        }, (err) => {
            alert(`Erro ao obter localização geográfica\nCodigo: ${err.code}\nMensagem: ${err.message}`);
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }, {
            maximumAge:600000,
            timeout:10000,
            enableHighAccuracy: false
        });
        // console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        // if(id !== 'new'){
        //     axios.get(`http://localhost:8080/api/occurrence/${id}`).then((response) => {
        //         if(response.data) {
        //             this.setState({occurrence: response.data});
        //         }
        //     })
        // }
    }
    saveOnLocalStorage(){
        let occurrences = JSON.parse(localStorage.getItem('occurrences'));
        const {occurrence} = this.state;
        (occurrences) ? occurrences.push(occurrence) : occurrences = [occurrence];
        localStorage.setItem('occurrences', JSON.stringify(occurrences));
        this.props.history.push('/occurrence/');
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
                        this.handleInputChange('city', event.target.value)
                    }}
                    value={this.state.occurrence.city}
                    floatingLabelFixed={true} name={'city'} floatingLabelText='Cidade'/><br/>
                <TextField
                    onChange={(event) => {
                        this.handleInputChange('state', event.target.value)
                    }}
                    value={this.state.occurrence.state}
                    floatingLabelFixed={true} name={'state'} floatingLabelText='Estado'/><br/>
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
                <CardMedia>
                    <img
                        src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.occurrence.latitude},${this.state.occurrence.longitude}&markers=color:red%7Clabel:YOU%7C${this.state.occurrence.latitude},${this.state.occurrence.longitude}&zoom=14&size=400x300&sensor=false&key=${mapsApiKey}`}
                        alt=""/>
                </CardMedia>
                <CardActions>
                    <FlatButton onClick={this.saveOnLocalStorage} label='Salvar'/>
                    <FlatButton label='Cancelar'/>
                </CardActions>
            </Card>
        );
    }
}

export default withRouter(OccurrenceForm);
