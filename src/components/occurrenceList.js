import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class OccurrenceList extends Component {
    render() {
        return (
            <Card className={'card'}>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}>
                    <img
                        src="https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2013/01/24/12/v2-cute-cat-picture.jpg"
                        alt=""/>
                </CardMedia>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Enviar"/>
                    <FlatButton label="Deletar"/>
                </CardActions>
            </Card>
        );
    }
}

export default OccurrenceList;
