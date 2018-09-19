import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import defaultImage from './images/defaultNews.jpg';

import { API_URL } from '../config';
import styles from './style';

const QUERY = '/notices';

class requestNoticias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noticias: [],
      isLoading: false,
      error: null
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    fetch(API_URL + QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Algo salio mal ...');
      })
      .then(data => this.setState({ noticias: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { noticias, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Cargando ...</p>;
    }
    return (
      <div>
        <Grid fluid>
          <Row>
            {noticias.map(item => (
              <Col key={item.id} xs={12} md={6}>
                <Card style={styles.card}>
                  <CardMedia overlay={<CardTitle title={item.name} />}>
                    <img
                      src={item.image === null ? defaultImage : item.image}
                      style={styles.cardStyle}
                      alt=""
                    />
                  </CardMedia>
                  <CardText>{item.content}</CardText>
                  <CardActions>
                    <FlatButton
                      label="Ver mas"
                      href={`#/Notices/${item.id}/show`}
                    />
                  </CardActions>
                </Card>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default requestNoticias;
