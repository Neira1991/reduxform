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
  TextField,
  Show,
  ShowButton,
  SimpleShowLayout
} from 'admin-on-rest';
import url from 'material-ui-icons/Contacts';

export const UserDocumentTypeIcon = url;

const UserDocumentTypeFilter = props => (
  <Filter {...props}>
    <TextInput
      label="Buscar por Identificacion de usuario"
      source="name"
      alwaysOn
    />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserDocumentTypeList = props => (
  <List
    {...props}
    title="Lista de Documentos"
    filters={<UserDocumentTypeFilter />}
  >
    <Datagrid>
      <TextField label="Tipo de identificacion" source="name" />
      <EditButton basePath="/UserDocumentTypes" />
      <DeleteButton basePath="/UserDocumentTypes" />
      <ShowButton basePath="/UserDocumentTypes" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const UserDocumentTypeTitle = ({ record }) => (
  <span>
    Tipo de identificacion {record.name ? `"${record.name}"` : `"${record.id}"`}
  </span>
);

UserDocumentTypeTitle.propTypes = {
  record: PropTypes.object
};
UserDocumentTypeTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserDocumentTypeEdit = props => (
  <Edit title={<UserDocumentTypeTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Tipo de Identificacion" source="name" />
      <TextInput label="id" source="id" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserDocumentTypeCreate = props => (
  <Create title="Crea una URL" {...props}>
    <SimpleForm>
      <TextInput label="Tipo de Identificacion" source="name" />
      <TextInput label="id" source="id" />
    </SimpleForm>
  </Create>
);

export const UserDocumentTypeShow = props => (
  <Show title={<UserDocumentTypeTitle />} {...props}>
    <SimpleShowLayout>
      <TextField label="Tipo de Identificacion" source="name" />
      <TextField label="id" source="id" />
    </SimpleShowLayout>
  </Show>
);
