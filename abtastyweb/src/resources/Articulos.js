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
  LongTextInput,
  TextField,
  ReferenceField,
  Show,
  SimpleShowLayout
} from 'admin-on-rest';
import extension from 'material-ui-icons/Extension';

export const ItemIcon = extension;

const ItemFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por nombre" source="userId" alwaysOn />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ItemList = props => (
  <List {...props} title="Lista de articulos" filters={<ItemFilter />}>
    <Datagrid>
      <ReferenceField
        label="galeria"
        source="galeryId"
        reference="Galeries"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Nombre" source="name" />
      <TextField label="Descripcion" source="description" />
      <EditButton basePath="/Items" />
      <DeleteButton basePath="/Items" />
      <ShowButton basePath="/Items" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const ItemTitle = ({ record }) => (
  <span>
    Articulo {record.name ? `"${record.name}"` : `"${record.galleryId}"`}
  </span>
);

ItemTitle.propTypes = {
  record: PropTypes.object
};
ItemTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ItemEdit = props => (
  <Edit title={<ItemTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <LongTextInput label="Descripcion" source="description" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ItemCreate = props => (
  <Create title="Crea un articulo" {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <LongTextInput label="Descripcion" source="description" />
    </SimpleForm>
  </Create>
);

export const ItemShow = props => (
  <Show title={<ItemTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="galeria"
        source="galeryId"
        reference="Galeries"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Nombre" source="name" />
      <TextField label="Descripcion" source="description" />
    </SimpleShowLayout>
  </Show>
);
