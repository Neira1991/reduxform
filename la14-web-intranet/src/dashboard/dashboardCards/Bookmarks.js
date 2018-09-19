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

import agenda from './images/work.jpg';

function CardBookmarks(props) {
  return (
    <div>
      <Card style={props.theme.card}>
        <CardMedia
          overlay={
            <CardTitle
              title="Marcadores"
              subtitle="Nuestros sitios web favoritos en un solo click"
            />
          }
        >
          <img src={agenda} alt="" />
        </CardMedia>
        <CardText>Mira aqui los marcadores anclados a tus favoritos.</CardText>
        <CardActions>
          <Button label="Ver mas" href="#/Marcadores" />
        </CardActions>
      </Card>
    </div>
  );
}

CardBookmarks.propTypes = {
  theme: PropTypes.object.isRequired
};

export default CardBookmarks;
