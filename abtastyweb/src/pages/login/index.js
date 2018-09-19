/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propTypes, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import {
  Notification,
  translate,
  userLogin as userLoginAction
} from 'admin-on-rest';
import imageLogo from './logo.svg';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    minWidth: 300
  },
  avatar: {
    margin: '1em',
    textAlign: 'center '
  },
  form: {
    padding: '0 1em 1em 1em'
  },
  input: {
    display: 'flex'
  },
  hint: {
    textAlign: 'center',
    marginTop: '1em',
    color: '#ccc'
  }
};

function getColorsFromTheme(theme) {
  if (!theme) return { primary1Color: cyan500, accent1Color: pinkA200 };
  const { palette: { primary1Color } } = theme;
  return { primary1Color };
}

const renderInput = ({
  meta: { touched, error } = {},
  input: { ...inputProps },
  ...props
}) => (
  <TextField
    errorText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

renderInput.defaultProps = {
  meta: {},
  input: {}
};

renderInput.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object
};

class Login extends Component {
  login = ({ username, password }) => {
    const { userLogin, location } = this.props;
    userLogin(
      { username, password },
      location.state ? location.state.nextPathname : '/'
    );
  };

  render() {
    const { handleSubmit, submitting, theme } = this.props;
    const muiTheme = getMuiTheme(theme);
    const { primary1Color } = getColorsFromTheme(muiTheme);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ ...styles.main, backgroundColor: primary1Color }}>
          <Card style={styles.card}>
            <div style={styles.avatar}>
              <img src="http://www.capitaine-commerce.com/wp-content/uploads/2015/04/abtasty-logo.png" alt="logola14" />
            </div>
            <form onSubmit={handleSubmit(this.login)}>
              <div style={styles.form}>
                <div style={styles.input}>
                  <Field
                    name="username"
                    component={renderInput}
                    floatingLabelText="Email"
                  />
                </div>
                <div style={styles.input}>
                  <Field
                    name="password"
                    component={renderInput}
                    floatingLabelText="Contraseña"
                    type="password"
                  />
                </div>
              </div>
              <CardActions>
                <RaisedButton
                  type="submit"
                  primary
                  disabled={submitting}
                  label="Iniciar sesión"
                  fullWidth
                />
                <Link to={{ pathname: '/Register' }}>
                  <FlatButton
                    style={{ width: '100%' }}
                    label="O regístrate"
                    primary
                  />
                </Link>
              </CardActions>
            </form>
          </Card>
          <Notification />
        </div>
      </MuiThemeProvider>
    );
  }
}

Login.defaultProps = {
  authClient: () => {},
  previousRoute: ''
};

Login.propTypes = {
  ...propTypes,
  authClient: PropTypes.func,
  previousRoute: PropTypes.string,
  theme: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

const enhance = compose(
  translate,
  reduxForm({
    form: 'signIn',
    validate: values => {
      const errors = {};
      if (!values.username)
        errors.username = translate('aor.validation.required');
      if (!values.password)
        errors.password = translate('aor.validation.required');
      return errors;
    }
  }),
  connect(null, { userLogin: userLoginAction })
);

export default enhance(Login);