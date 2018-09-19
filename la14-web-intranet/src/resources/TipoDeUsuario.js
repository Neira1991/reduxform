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
  SimpleShowLayout,
  ShowButton
} from 'admin-on-rest';
import person from 'material-ui-icons/Group';

export const UserTypeIcon = person;

const UserTypeFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por codigo" source="code" alwaysOn />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserTypeList = props => (
  <List
    {...props}
    title="Lista de tipos de Usuario"
    filters={<UserTypeFilter />}
  >
    <Datagrid>
      <TextField label="Valor" source="value" />
      <TextField label="Codigo" source="code" />
      <EditButton basePath="/UserTypes" />
      <DeleteButton basePath="/UserTypes" />
      <ShowButton basePath="/UserTypes" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const UserTypeTitle = ({ record }) => (
  <span>
    Tipos de usuario {record.code ? `"${record.code}"` : `"${record.value}"`}
  </span>
);

UserTypeTitle.propTypes = {
  record: PropTypes.object
};
UserTypeTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserTypeEdit = props => (
  <Edit title={<UserTypeTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Valor" source="value" />
      <TextInput label="Codigo" source="code" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserTypeCreate = props => (
  <Create title="Crea un tipo de Usuario" {...props}>
    <SimpleForm>
      <TextInput label="Valor" source="value" />
      <TextInput label="Codigo" source="code" />
    </SimpleForm>
  </Create>
);

export const UserTypeShow = props => (
  <Show title={<UserTypeTitle />} {...props}>
    <SimpleShowLayout>
      <TextField label="Valor" source="value" />
      <TextField label="Codigo" source="code" />
    </SimpleShowLayout>
  </Show>
);
