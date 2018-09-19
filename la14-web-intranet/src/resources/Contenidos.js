import React from 'react';
import PropTypes from 'prop-types';
import {
  Filter,
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  EditButton,
  DeleteButton,
  TextInput,
  LongTextInput,
  TextField,
  Show,
  SimpleShowLayout,
  ShowButton
} from 'admin-on-rest';
import folder from 'material-ui-icons/Folder';

import UploadField from '../fields/UploadField';
import UploadInput from '../fields/UploadInput';

export const ContentIcon = folder;

export const ContentFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por nombre" source="name" alwaysOn />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ContentList = props => (
  <List {...props} title="Lista de contenido" filters={<ContentFilter />}>
    <Datagrid>
      <TextField label="Nombre" source="name" />
      <TextField label="Contenido" source="content" />
      <UploadField label="Imagen" source="image" size={130} />
      <EditButton basePath="/Contents" />
      <DeleteButton basePath="/Contents" />
      <ShowButton basePath="/Contents" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const ContentTitle = ({ record }) => (
  <span>
    Contenido {record.name ? `"${record.name}"` : `"${record.content}"`}
  </span>
);

ContentTitle.propTypes = {
  record: PropTypes.object
};
ContentTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ContentEdit = props => (
  <Edit title={<contentTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <LongTextInput label="Contenido" source="content" />
      <UploadInput label="Imagen" source="image" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ContentCreate = props => (
  <Create title="Crea un contenido" {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <LongTextInput label="Contenido" source="content" />
      <UploadInput label="Imagen" source="image" />
    </SimpleForm>
  </Create>
);

export const ContentShow = props => (
  <Show title={<ContentTitle />} {...props}>
    <SimpleShowLayout>
      <TextField label="Nombre" source="name" />
      <TextField label="Contenido" source="content" />
      <UploadField label="Imagen" source="image" />
    </SimpleShowLayout>
  </Show>
);
