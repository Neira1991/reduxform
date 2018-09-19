import React, { Component } from 'react';
import { API_URL } from '../config';

const QUERY = '/events';

class requestNuevosIngresos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nuevosIngresos: [],
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
      .then(data => this.setState({ nuevosIngresos: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { nuevosIngresos, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Cargando...</p>;
    }
    return (
      <div>
        {nuevosIngresos.map(hit => (
          <div key={hit.id}>
            <p>{hit.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default requestNuevosIngresos;
