import React, { Component } from 'react';
import { API_URL } from '../config';

const QUERY = '/request';

class requestBuscadorEmpleados extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BuscadorEmpleados: [],
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
        this.setState({ BuscadorEmpleados: data, isLoading: false })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { BuscadorEmpleados, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Cargando ...</p>;
    }
    return (
      <div>
        {BuscadorEmpleados.map(hit => (
          <div key={hit.id}>
            <p>Hi world</p>
          </div>
        ))}
      </div>
    );
  }
}

export default requestBuscadorEmpleados;
