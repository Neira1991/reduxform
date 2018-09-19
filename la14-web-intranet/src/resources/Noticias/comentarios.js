import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { API_URL } from '../../config';
import ListComentarios from './ListComentarios';

class CommentsInNotice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comentarios: [],
      newComment: '',
      isLoading: false,
      error: null
    };
  }

  componentWillMount() {
    this.updateComments();
  }

  onChangeInput = e => {
    this.setState({
      newComment: e.target.value
    });
  };

  submitOnclik = () => {
    const { idNoticia } = this.props;
    fetch(`${API_URL}/comments`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: this.state.newComment,
        userId: 1,
        noticeId: idNoticia
      })
    })
      .then(res => res.json())
      .then(() => this.updateComments());
  };

  updateComments = () => {
    const { idNoticia } = this.props;
    const QUERY = `/comments?filter[where][noticeId]=${idNoticia}`;
    this.setState({ isLoading: true });
    fetch(API_URL + QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Algo salio mal ...');
      })
      .then(data => this.setState({ comentarios: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };
  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Cargando ...</p>;
    }
    return (
      <div>
        <Card>
          <ViewTitle title="Dejanos tu comentario" />
          <CardText>
            <div>
              <TextField
                onChange={this.onChangeInput}
                hintText="Dinos lo que piensas"
                fullWidth
                multiLine
              />
              <FlatButton label="Comentar" onClick={this.submitOnclik} />
            </div>
          </CardText>
        </Card>
        <ListComentarios comentarios={this.state.comentarios} />
      </div>
    );
  }
}

CommentsInNotice.propTypes = {
  idNoticia: PropTypes.number.isRequired
};

export default CommentsInNotice;
