import React from 'react';
import PropTypes from 'prop-types';
import {
  Filter,
  List,
  Datagrid,
  Edit,
  Create,
  DeleteButton,
  ShowButton,
  SimpleForm,
  EditButton,
  TextInput,
  TextField,
  Show,
  SimpleShowLayout
} from 'admin-on-rest';
import doclist from 'material-ui-icons/ViewList';

export const DocumentCategorieIcon = doclist;

const DocumentCategorieFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por codigo" source="code" alwaysOn />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const DocumentCategorieList = props => (
  <List
    {...props}
    title="Lista de categorias de documentos"
    filters={<DocumentCategorieFilter />}
  >
    <Datagrid>
      <TextField label="Valor" source="value" />
      <TextField label="Codigo" source="code" />
      <EditButton basePath="/DocumentCategories" />
      <DeleteButton basePath="/DocumentCategories" />
      <ShowButton basePath="/DocumentCategories" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const DocumentCategorieTitle = ({ record }) => (
  <span>
    categorias de documentos{' '}
    {record.code ? `"${record.code}"` : `"${record.value}"`}
  </span>
);

DocumentCategorieTitle.propTypes = {
  record: PropTypes.object
};
DocumentCategorieTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const DocumentCategorieEdit = props => (
  <Edit title={<DocumentCategorieTitle />} {...props}>
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
export const DocumentCategorieCreate = props => (
  <Create title="Crea una categoria de documentos" {...props}>
    <SimpleForm>
      <TextInput label="Valor" source="value" />
      <TextInput label="Codigo" source="code" />
    </SimpleForm>
  </Create>
);

export const DocumentCategorieShow = props => (
  <Show title={<DocumentCategorieTitle />} {...props}>
    <SimpleShowLayout>
      <TextField label="Valor" source="value" />
      <TextField label="Codigo" source="code" />
    </SimpleShowLayout>
  </Show>
);
