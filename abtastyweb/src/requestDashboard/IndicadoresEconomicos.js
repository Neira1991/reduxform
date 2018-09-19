import React, { Component } from 'react';
import { API_URL } from '../config';

import styles from './style';

const QUERY = '/items';

class requestIndicadoresEconomicos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indicadoresEconomicos: [],
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
      .then(data =>
        this.setState({ indicadoresEconomicos: data, isLoading: false })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { indicadoresEconomicos, isLoading, error } = this.state;

    if (error) {
      return <p> {error.message}</p>;
    }

    if (isLoading) {
      return <p style={styles.font}>Cargando ...</p>;
    }
    return (
      <div>
        {indicadoresEconomicos.map(hit => (
          <div key={hit.id}>
            <p>Hi world</p>
          </div>
        ))}
      </div>
    );
  }
}

export default requestIndicadoresEconomicos;
