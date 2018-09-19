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
  SimpleShowLayout,
  ReferenceField
} from 'admin-on-rest';
import url from 'material-ui-icons/Grade';

export const LinkIcon = url;

const LinkFilter = props => (
  <Filter {...props}>
    <TextInput
      label="Buscar por Identificacion de usuario"
      source="UserId"
      alwaysOn
    />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const LinkList = props => (
  <List {...props} title="Lista de Marcadores" filters={<LinkFilter />}>
    <Datagrid>
      <TextField label="Link" source="value" />
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <EditButton basePath="/Links" />
      <DeleteButton basePath="/Links" />
      <ShowButton basePath="/Links" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const LinkTitle = ({ record }) => (
  <span>
    {''}
    Marcador {record.value ? `"${record.value}"` : `"${record.value}"`}
    {''}
  </span>
);

LinkTitle.propTypes = {
  record: PropTypes.object
};
LinkTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const LinkEdit = props => (
  <Edit title={<LinkTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Link" source="value" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const LinkCreate = props => (
  <Create title="Añade un marcador" {...props}>
    <SimpleForm>
      <TextInput label="Link" source="value" />
    </SimpleForm>
  </Create>
);

export const LinkShow = props => (
  <Show title={<LinkTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Usuario relacionado"
        source="userId"
        reference="Users"
      >
        <TextField label="Identidad de usuario" source="firstName" />
      </ReferenceField>
      <TextField label="Link" source="value" />
    </SimpleShowLayout>
  </Show>
);
