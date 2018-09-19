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

import Birthday from './images/Birthday.jpg';

function CardBirthday(props) {
  return (
    <div>
      <Card style={props.theme.card}>
        <CardMedia
          overlay={
            <CardTitle
              title="Cumpleaños"
              subtitle="Sorprende a tus compañeros de trabajo!"
            />
          }
        >
          <img src={Birthday} alt="" />
        </CardMedia>
        <CardText>Mira aqui los proximos cumpleaños.</CardText>
        <CardActions>
          <Button label="ver mas" href="#/Users" />
        </CardActions>
      </Card>
    </div>
  );
}

CardBirthday.propTypes = {
  theme: PropTypes.object.isRequired
};

export default CardBirthday;
