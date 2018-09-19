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

import empleo from './images/empleo.png';

function CardBuscadorEmpleos(props) {
  return (
    <div>
      <Card style={props.theme.card}>
        <CardMedia
          overlay={
            <CardTitle
              title="Buscador de Empleados"
              subtitle="Ayudanos a elegir a los mejores"
            />
          }
        >
          <img src={empleo} alt="" />
        </CardMedia>
        <CardText>Usa nuestro buscador de empleados.</CardText>
        <CardActions>
          <Button label="Ver mas" href="#/Users" />
        </CardActions>
      </Card>
    </div>
  );
}

CardBuscadorEmpleos.propTypes = {
  theme: PropTypes.object.isRequired
};

export default CardBuscadorEmpleos;
