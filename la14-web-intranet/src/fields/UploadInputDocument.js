/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Upload from 'react-avatar';
import Dropzone from 'react-dropzone';
import first from 'lodash/first';
import { Dialog, FlatButton } from 'material-ui';
import { API_URL, PATH_IMG } from '../config';
import defaultPdf from './images/pdf.png';

const QUERY = '/attachments/images/upload';

const styles = {
  dropzone: {
    width: 'calc(100% - 40px)',
    height: 'calc(100% - 40px)',
    cursor: 'pointer',
    backgroundColor: 'lightgray',
    padding: 20
  }
};

class UploadInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      // urlEditor: null,
      // isDefault: true,
      file: null
    };
  }

  setEditorRef = editor => {
    this.editor = editor;
  };

  handleSaveImage = () => {
    const { input: { onChange } } = this.props;
    const url = API_URL + PATH_IMG + this.state.file.name;
    // const url = this.editor.getImage().toDataURL();
    const image = new FormData();
    image.append('file', this.state.file);
    image.append('name', this.state.file.name);

    fetch(API_URL + QUERY, {
      method: 'POST',
      body: image
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Algo salio mal ...');
      })
      .then(() => null)
      .catch(() => null);

    this.setState({
      dialogOpen: false
      // urlEditor: url,
    });

    onChange(url);
  };

  // handleOnChangeScale = (event, scale) => {
  //   this.setState({ scale });
  // };

  handleCloseDialog = () => {
    this.setState({ dialogOpen: false });
  };

  handleOnDrop = files => {
    const file = first(files);
    if (file) {
      this.setState({
        // urlEditor: file.preview,
        // isDefault: false,
        file
      });
    }
  };

  handleOpenDialog = () => {
    this.setState({ dialogOpen: true });
  };

  renderDialog = () => {
    const { dialogOpen } = this.state;
    // const { urlEditor, scale, isDefault, file } = this.state;

    const actions = [
      <FlatButton
        key="1"
        label="Cancelar"
        primary
        onClick={this.handleCloseDialog}
      />,

      <FlatButton
        key="2"
        label="Guardar"
        primary
        keyboardFocused
        onClick={this.handleSaveImage}
      />
    ];

    return (
      <Dialog
        title="Editar archivo"
        actions={actions}
        modal={false}
        open={dialogOpen}
        onRequestClose={this.handleClose}
      >
        <div className="row">
          <div className="col-xs">
            <Dropzone
              style={styles.dropzone}
              multiple={false}
              onDrop={this.handleOnDrop}
              accept="application/pdf"
            >
              {this.state.file ? (
                <span>Archivo: {this.state.file.name}</span>
              ) : (
                <span>Arrastre o de click para seleccionar archivo</span>
              )}
            </Dropzone>
          </div>
        </div>
      </Dialog>
    );
  };

  render() {
    let { input: { value } } = this.props;

    value = defaultPdf;

    return (
      <div>
        <a
          role="button"
          tabIndex={0}
          onClick={this.handleOpenDialog}
          onKeyDown={() => {}}
        >
          <Upload src={value} size={100} color="#ff0000" />
        </a>

        {this.renderDialog()}
      </div>
    );
  }
}

UploadInput.propTypes = {
  input: PropTypes.object.isRequired
};

const inputUploadInput = ({ source }) => (
  <Field name={source} component={UploadInput} />
);
inputUploadInput.propTypes = {
  source: PropTypes.string
};
inputUploadInput.defaultProps = {
  source: ''
};

export default inputUploadInput;
