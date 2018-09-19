import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    {...custom}
  >
    {Object.keys(custom.infoSelect).map(item => (
      <MenuItem key={item} value={item} primaryText={custom.infoSelect[item]} />
    ))}
  </SelectField>
);

renderSelectField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object
};

renderSelectField.defaultProps = {
  input: {},
  meta: {},
  label: ''
};

export default renderSelectField;
