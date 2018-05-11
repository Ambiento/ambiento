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
    }
    componentDidMount(){
        this.setState({
            localOccurrences: JSON.parse(localStorage.getItem('occurrences'))
        });
        axios.get('http://localhost:8080/api/occurrence').then((response) => {
            this.setState({occurrence: response.data});
        });
    }
    sendOccurrence(occurrence, index){
        let localOccurrences = JSON.parse(localStorage.getItem('occurrences'));
        delete localOccurrences.splice(index);
        this.setState({localOccurrences});
        localStorage.setItem('occurrences', (localOccurrences.length > 0) ? JSON.stringify(localOccurrences) : null);
        axios.post('http://localhost:8080/api/occurrence', occurrence);
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
                            src="https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2013/01/24/12/v2-cute-cat-picture.jpg"
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
        console.log(this.state.localOccurrences);
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
