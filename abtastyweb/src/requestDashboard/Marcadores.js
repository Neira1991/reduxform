import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styles from './style';
import img from './images/url.jpg';

import { API_URL } from '../config';

const QUERY = '/links';

class requestMarcadores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marcadores: [],
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
        throw new Error('Algo Salio mal ...');
      })
      .then(data => this.setState({ marcadores: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { marcadores, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Cargando...</p>;
    }

    return (
      <div>
        <Grid fluid>
          <Row>
            {marcadores.map(item => (
              <Col key={item.id} xs={8} md={4}>
                <Card style={styles.card}>
                  <CardMedia overlay={<CardTitle title={item.value} />}>
                    <img src={img} style={styles.cardStyles} alt="" />
                  </CardMedia>
                  <CardActions>
                    <FlatButton
                      label="Ver mas"
                      href={`#/Links/${item.id}/show`}
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

export default requestMarcadores;
