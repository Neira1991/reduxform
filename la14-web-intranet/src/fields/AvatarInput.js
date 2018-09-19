/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Avatar from 'react-avatar';
import Dropzone from 'react-dropzone';
import first from 'lodash/first';
import { Dialog, FlatButton, Slider } from 'material-ui';
import AvatarEditor from 'react-avatar-editor';
import { API_URL, PATH_IMG } from '../config';
import defaultAvatar from './images/user.jpg';

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

class AvatarInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      urlEditor: null,
      isDefault: true,
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
        throw new Error('Something went wrong ...');
      })
      .then(() => null)
      .catch(() => null);

    this.setState({
      dialogOpen: false,
      urlEditor: url
    });

    onChange(url);
  };

  handleOnChangeScale = (event, scale) => {
    this.setState({ scale });
  };

  handleCloseDialog = () => {
    this.setState({ dialogOpen: false });
  };

  handleOnDrop = files => {
    const file = first(files);
    if (file) {
      this.setState({
        urlEditor: file.preview,
        isDefault: false,
        file
      });
    }
  };

  handleOpenDialog = () => {
    this.setState({ dialogOpen: true });
  };

  renderDialog = () => {
    const { urlEditor, dialogOpen, scale, isDefault } = this.state;

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
          {!isDefault && (
            <div className="col-xs-7">
              <div className="row">
                <div className="col-xs-1">
                  <Slider
                    style={{ height: 'calc(100% - 30px)', margin: 0 }}
                    axis="y"
                    defaultValue={1.2}
                    min={1}
                    max={2}
                    onChange={this.handleOnChangeScale}
                    value={scale}
                  />
                </div>

                <div className="col-xs">
                  <AvatarEditor
                    ref={this.setEditorRef}
                    image={urlEditor}
                    width={250}
                    height={250}
                    border={50}
                    color={[0, 0, 0, 0.6]} // RGBA
                    scale={scale}
                    rotate={0}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="col-xs">
            <Dropzone
              style={styles.dropzone}
              multiple={false}
              onDrop={this.handleOnDrop}
              accept="image/*"
            >
              <span>Arrastre o de click para seleccionar la imagen</span>
            </Dropzone>
          </div>
        </div>
      </Dialog>
    );
  };

  render() {
    let { input: { value } } = this.props;

    value = value.length === 0 ? defaultAvatar : value;

    return (
      <div>
        <a
          role="button"
          tabIndex={0}
          onClick={this.handleOpenDialog}
          onKeyDown={() => {}}
        >
          <Avatar src={value} size={100} color="#ff0000" round />
        </a>

        {this.renderDialog()}
      </div>
    );
  }
}

AvatarInput.propTypes = {
  input: PropTypes.object.isRequired
};

const inputAvatarInput = ({ source }) => (
  <Field name={source} component={AvatarInput} />
);
inputAvatarInput.propTypes = {
  source: PropTypes.string
};
inputAvatarInput.defaultProps = {
  source: ''
};

export default inputAvatarInput;
