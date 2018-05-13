import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import axios from 'axios';

class OccurrenceList extends Component {
    constructor(props){
        super(props);
        this.state = {
            occurrence: [],
            localOccurrences: []
        };
        this.getOccurrences = this.getOccurrences.bind(this);
    }
    getOccurrences(){
        axios.get('http://localhost:8080/api/occurrence').then((response) => {
            console.log('setting occurrences');
            this.setState({occurrence: response.data});
        });
    }
    componentDidMount(){
        this.setState({
            localOccurrences: JSON.parse(localStorage.getItem('occurrences'))
        });
        this.getOccurrences();
    }
    sendOccurrence(occurrence, index){
        let localOccurrences = JSON.parse(localStorage.getItem('occurrences'));
        localOccurrences.splice(index, 1);
        this.setState({localOccurrences});
        localStorage.setItem('occurrences', (localOccurrences.length > 0) ? JSON.stringify(localOccurrences) : null);
        axios.post('http://localhost:8080/api/occurrence', occurrence).then(() => {
            this.getOccurrences();
        });
    }
    renderOcurrence(occurrence){
        if(occurrence.length === 0){
            return(
                <p>Nenhuma ocorrencia...</p>
            );
        }
        return occurrence.map((item, index) => {
            return(
                <Card className={'card'}>
                    <CardHeader
                        title={item.user}
                        subtitle={`${item.city} - ${item.state}`}
                        avatar={`https://identicon-api.herokuapp.com/${item.user}/100?format=png`}
                    />
                    <CardMedia>
                        <img
                            src={item.imgurl}
                            alt=""/>
                    </CardMedia>
                    <CardText>{item.description}</CardText>
                    <CardActions>
                        {!item.id ? [
                                <FlatButton onClick={() => this.sendOccurrence(item, index)} label='Enviar'/>,
                                <FlatButton label='Editar'/>
                            ]
                            : null}
                        <Link to={`/occurrence/${item.id}`}><FlatButton label='Detalhes'/></Link>
                    </CardActions>
                </Card>
            );
        });
    }
    render() {
        return (
            <div>
                <p>Ocorrencias não enviadas para o servidor</p>
                {(this.state.localOccurrences) ? this.renderOcurrence(this.state.localOccurrences) : <p>Nenhuma ocorrência local</p>}
                <p>Ocorrencias enviadas para o servidor</p>
                {this.renderOcurrence(this.state.occurrence)}
            </div>
        );
    }
}

export default OccurrenceList;
