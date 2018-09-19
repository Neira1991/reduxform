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

import notas from './images/notes.png';

function CardNotasPersonales(props) {
  return (
    <div>
      <Card style={props.theme.card}>
        <CardMedia
          overlay={
            <CardTitle
              title="Notas personales"
              subtitle="Guarda tus apuntes mas privados"
            />
          }
        >
          <img src={notas} alt="" />
        </CardMedia>
        <CardText>Agrega notas a tu block de apuntes personal.</CardText>
        <CardActions>
          <Button label="Ver mas" href="#/Notas" />
        </CardActions>
      </Card>
    </div>
  );
}

CardNotasPersonales.propTypes = {
  theme: PropTypes.object.isRequired
};

export default CardNotasPersonales;
