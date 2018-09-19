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
  ShowButton,
  ReferenceField
} from 'admin-on-rest';
import lightbulboutline from 'material-ui-icons/LightbulbOutline';

export const SuggestionIcon = lightbulboutline;

export const SuggestionFilter = props => (
  <Filter {...props}>
    <TextInput
      label="Buscar por identidad de usuario"
      source="userId"
      alwaysOn
    />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const SuggestionList = props => (
  <List {...props} title="Lista de sugerencias" filters={<SuggestionFilter />}>
    <Datagrid>
      <ReferenceField
        label="Nombre"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <ReferenceField
        label="Apellido"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="lastName" />
      </ReferenceField>
      <TextField label="Contenido" source="content" />
      <EditButton basePath="/Suggestions" />
      <DeleteButton basePath="/Suggestions" />
      <ShowButton basePath="/Suggestions" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const SuggestionTitle = ({ record }) => (
  <span>
    Sugerencia {record.name ? `"${record.name}"` : `"${record.content}"`}
  </span>
);

SuggestionTitle.propTypes = {
  record: PropTypes.object
};
SuggestionTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const SuggestionEdit = props => (
  <Edit title={<SuggestionTitle />} {...props}>
    <SimpleForm>
      <LongTextInput label="Contenido" source="content" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const SuggestionCreate = props => (
  <Create title="Crea una sugerencia" {...props}>
    <SimpleForm>
      <LongTextInput label="Contenido" source="content" />
    </SimpleForm>
  </Create>
);

export const SuggestionShow = props => (
  <Show title={<SuggestionTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Nombre"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <ReferenceField
        label="Apellido"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="lastName" />
      </ReferenceField>
      <TextField label="Contenido" source="content" />
    </SimpleShowLayout>
  </Show>
);
