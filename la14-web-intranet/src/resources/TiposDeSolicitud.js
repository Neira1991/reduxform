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
import doclist from 'material-ui-icons/QuestionAnswer';

export const RequestTypeIcon = doclist;

const RequestTypeFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por codigo" source="code" alwaysOn />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const RequestTypeList = props => (
  <List
    {...props}
    title="Lista de tipos de solicitud"
    filters={<RequestTypeFilter />}
  >
    <Datagrid>
      <TextField label="Valor" source="value" />
      <TextField label="Codigo" source="code" />
      <EditButton basePath="/RequestTypes" />
      <DeleteButton basePath="/RequestTypes" />
      <ShowButton basePath="/RequestTypes" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const RequestTypeTitle = ({ record }) => (
  <span>
    tipos de solicitud {record.code ? `"${record.code}"` : `"${record.value}"`}
  </span>
);

RequestTypeTitle.propTypes = {
  record: PropTypes.object
};
RequestTypeTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const RequestTypeEdit = props => (
  <Edit title={<RequestTypeTitle />} {...props}>
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
export const RequestTypeCreate = props => (
  <Create title="Crea un tipo de solicitud" {...props}>
    <SimpleForm>
      <TextInput label="Valor" source="value" />
      <TextInput label="Codigo" source="code" />
    </SimpleForm>
  </Create>
);

export const RequestTypeShow = props => (
  <Show title={<RequestTypeTitle />} {...props}>
    <SimpleShowLayout>
      <TextField label="Valor" source="value" />
      <TextField label="Codigo" source="code" />
    </SimpleShowLayout>
  </Show>
);
