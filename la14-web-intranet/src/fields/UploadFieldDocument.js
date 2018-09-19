import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import defaultPdf from './images/pdf.png';

const NoticeField = ({ record, source }) => (
  <div style={{ padding: '1em' }}>
    <a href={get(record, source)} target="_blank">
      <img src={defaultPdf} width="40" alt="default pdf" />
    </a>
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
