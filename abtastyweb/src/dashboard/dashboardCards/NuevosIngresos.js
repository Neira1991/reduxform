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

import ingresos from './images/ingresos.jpg';

function CardNuevosIngresos(props) {
  return (
    <div>
      <Card style={props.theme.card}>
        <CardMedia
          overlay={
            <CardTitle
              title="Nuevos ingresos"
              subtitle="¿Que tal nos ha ido este mes?"
            />
          }
        >
          <img src={ingresos} alt="" />
        </CardMedia>
        <CardText>Enterate de los ingresos generados en este mes.</CardText>
        <CardActions>
          <Button label="Ver mas" href="#/Users" />
        </CardActions>
      </Card>
    </div>
  );
}

CardNuevosIngresos.propTypes = {
  theme: PropTypes.object.isRequired
};

export default CardNuevosIngresos;
