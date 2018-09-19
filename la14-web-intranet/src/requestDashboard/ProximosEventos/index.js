import React, { Component } from 'react';

class ProximosEventos extends Component {
  state = {
    isLoading: false,
    error: null
  };

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Cargando ...</p>;
    }

    return <div>Próximos eventos</div>;
  }
}
export default ProximosEventos;
