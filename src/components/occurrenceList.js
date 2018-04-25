import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

class OccurrenceList extends Component {
    constructor(props){
        super(props);
        this.state = {
            occurrence: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/ocorrencia').then((response) => {
            this.setState({occurrence: response.data});
        })
    }
    renderOcurrence(ocurrence){
        return ocurrence.map(item => {
            return(
                <Card className={'card'}>
                    <CardHeader
                        title={item.nome_usuario}
                        subtitle={`${item.cidade} - ${item.estado}`}
                        avatar="images/jsa-128.jpg"
                    />
                    <CardMedia>
                        <img
                            src="https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2013/01/24/12/v2-cute-cat-picture.jpg"
                            alt=""/>
                    </CardMedia>
                    <CardText>{item.descricao}</CardText>
                    <CardActions>
                        <FlatButton label="Enviar"/>
                        <FlatButton label="Deletar"/>
                    </CardActions>
                </Card>
            );
        });
    }
    render() {
        return (
            <div>
                {this.renderOcurrence(this.state.occurrence)}
            </div>
        );
    }
}

export default OccurrenceList;
