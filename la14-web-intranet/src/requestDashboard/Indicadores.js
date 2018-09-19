import React, { Component } from 'react';
import { API_URL } from '../config';

import Indicadores from './Indicadores/index';

const QUERY = '/users/consultar-indicadores';

class requestIndicadores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indicadores: [],
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
      .then(data => this.setState({ indicadores: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { indicadores, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <Indicadores indicadores={indicadores} />
      </div>
    );
  }
}

export default requestIndicadores;
