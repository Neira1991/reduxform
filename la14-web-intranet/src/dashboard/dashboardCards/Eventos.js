import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Button from 'material-ui/FlatButton';

import event from './images/event.jpg';

function CardEventos(props) {
  return (
    <div>
      <Card style={props.theme.card}>
        <CardMedia
          overlay={
            <CardTitle
              title="Eventos"
              subtitle="Informate acerca de nuestros eventos"
            />
          }
        >
          <img src={event} alt="" />
        </CardMedia>
        <CardText>Descrubre los eventos programados para este mes!</CardText>
        <CardActions>
          <Button label="Ver mas" href="#/Eventos" />
        </CardActions>
      </Card>
    </div>
  );
}

CardEventos.propTypes = {
  theme: PropTypes.object.isRequired
};

export default CardEventos;
