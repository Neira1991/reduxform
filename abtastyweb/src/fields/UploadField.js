import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { get } from 'lodash';

const NoticeField = ({ record, source, size }) => (
  <div style={{ padding: '1em' }}>
    <Avatar
      name={get(record, 'fullName')}
      src={get(record, source)}
      size={size}
    />
  </div>
);

NoticeField.defaultProps = {
  size: 250,
  source: '',
  record: {}
};

NoticeField.propTypes = {
  size: PropTypes.number,
  source: PropTypes.string,
  record: PropTypes.object
};

export default NoticeField;
