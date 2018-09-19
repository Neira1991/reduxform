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

import news from './images/news.jpg';

function CardNoticias(props) {
  return (
    <div>
      <Card style={props.theme.card}>
        <CardMedia
          overlay={
            <CardTitle
              title="Noticias"
              subtitle="Porque todos nuestros acontecimientos son importantes."
            />
          }
        >
          <img src={news} alt="" />
        </CardMedia>
        <CardText>Enterate de las ultimas noticias.</CardText>
        <CardActions>
          <Button label="Ver mas" href="#/Noticias" />
        </CardActions>
      </Card>
    </div>
  );
}

CardNoticias.propTypes = {
  theme: PropTypes.object.isRequired
};

export default CardNoticias;
