import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { ViewTitle } from 'admin-on-rest';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import IconCheck from 'material-ui/svg-icons/navigation/check';
import renderSelectField from '../../fields/RenderSelectField';
import { HOME_URL } from '../../config';
import Api from '../../services/Api';

const asyncValidate = values =>
  Api.emailUserExist(values.email).then(data => {
    console.log(data);
    
    if (data.length) {
      const errors = {
        email: 'El email ya existe en la base de datos'
      };
      throw errors;
    }
  });

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'Address',
    'phone',
    'typeId',
    'idNumber'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'ERRORRRRRRRRRRRRRRRR';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

renderTextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object
};

renderTextField.defaultProps = {
  input: {},
  meta: {},
  label: ''
};

const styleSubmit = {
  margin: 12,
  textAlign: 'center',
  display: 'inline-block',
  color: '#529cf4'
};

const onSubmit = async values => {
  const response = await Api.postUser(values);
  if (response.id) {
    window.location.href = `${HOME_URL}/login`;
  }
};

const checkIcon = () => (
  <IconButton iconStyle={{ color: 'green' }}>
    <IconCheck />
  </IconButton>
);

const SingUpUiForm = props => {
  const { handleSubmit, pristine, reset, submitting, valid } = props;
  const infoSelect = { 1: 'Cédula de Ciudadanía', 2: 'Pasaporte' };
  return (
    <Card>
      <ViewTitle title="Registro" />
      <CardText>
        <div>Llena todos los campos requeridos debajo de este texto.</div>

        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="firstName"
              component={renderTextField}
              label="firstName"
            />
            {valid ? checkIcon() : null}
          </div>
          <div>
            <Field
              name="lastName"
              component={renderTextField}
              label="lastName"
            />
            {valid ? checkIcon() : null}
          </div>
          <div>
            <Field name="email" component={renderTextField} label="Email" />
            {valid ? checkIcon() : null}
          </div>
          <div>
            <Field
              name="password"
              type="password"
              component={renderTextField}
              label="password"
            />
            {valid ? checkIcon() : null}
          </div>
          <div>
            <Field
              name="Address"
              component={renderTextField}
              label="Address"
            />
            {valid ? checkIcon() : null}
          </div>
          <div>
            <Field name="phone" component={renderTextField} label="phone" />
            {valid ? checkIcon() : null}
          </div>
          <div>
            <Field
              name="typeId"
              component={renderSelectField}
              props={{ infoSelect }}
              label="typeId"
            />
            {valid ? checkIcon() : null}
          </div>
          <div>
            <Field
              name="idNumber"
              component={renderTextField}
              label="idNumber"
            />
          </div>
          <div style={styleSubmit}>
            <RaisedButton
              type="submit"
              primary
             // disabled={!valid}
              label="Send"
            />
            <RaisedButton
              label="Clean"
              type="button"
              style={styleSubmit}
              disabled={pristine || submitting}
              onClick={reset}
            />
          </div>
        </form>
      </CardText>
    </Card>
  );
};

SingUpUiForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  valid: PropTypes.bool
};

SingUpUiForm.defaultProps = {
  handleSubmit: () => {},
  reset: () => {},
  submitting: false,
  pristine: false,
  valid: false
};

export default reduxForm({
  form: 'SingUpUiForm', // a unique identifier for this form
  validate,
  asyncValidate,
  onSubmit
})(SingUpUiForm);
