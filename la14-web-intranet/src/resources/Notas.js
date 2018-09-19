import React from 'react';
import PropTypes from 'prop-types';
import {
  Filter,
  List,
  Datagrid,
  Edit,
  Create,
  DeleteButton,
  SimpleForm,
  EditButton,
  TextInput,
  LongTextInput,
  TextField,
  Show,
  ShowButton,
  SimpleShowLayout
} from 'admin-on-rest';
import receipt from 'material-ui-icons/Receipt';

export const NoteIcon = receipt;

const NoteFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por nombre" source="name" alwaysOn />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const NoteList = props => (
  <List {...props} title="Lista de notas" filters={<NoteFilter />}>
    <Datagrid>
      <TextField label="Nombre de nota" source="name" />
      <TextField label="Contenido" source="content" />
      <EditButton basePath="/Notes" />
      <DeleteButton basePath="/Notes" />
      <ShowButton basePath="/Notes" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const NoteTitle = ({ record }) => (
  <span>Nota {record.name ? `"${record.name}"` : `"${record.content}"`}</span>
);

NoteTitle.propTypes = {
  record: PropTypes.object
};
NoteTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const NoteEdit = props => (
  <Edit title={<NoteTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <LongTextInput label="Contenido" source="content" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const NoteCreate = props => (
  <Create title="Crea una nota" {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <LongTextInput label="Contenido" source="content" />
    </SimpleForm>
  </Create>
);

export const NoteShow = props => (
  <Show title={<NoteTitle />} {...props}>
    <SimpleShowLayout>
      <TextField label="Nombre" source="name" />
      <TextField label="Contenido" source="content" />
    </SimpleShowLayout>
  </Show>
);
