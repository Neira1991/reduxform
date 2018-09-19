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

import indicadores from './images/indicadores.jpg';

function CardIndicadoresEconomicos(props) {
  return (
    <div>
      <Card style={props.theme.card}>
        <CardMedia
          overlay={
            <CardTitle
              title="Indicadores economicos"
              subtitle="Forma una parte importante de nosotros"
            />
          }
        >
          <img src={indicadores} alt="" />
        </CardMedia>
        <CardText>Enterate de los ultimos balances economicos.</CardText>
        <CardActions>
          <Button label="Ver mas" href="#/Indicadores" />
        </CardActions>
      </Card>
    </div>
  );
}

CardIndicadoresEconomicos.propTypes = {
  theme: PropTypes.object.isRequired
};

export default CardIndicadoresEconomicos;
