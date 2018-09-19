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
  BooleanInput,
  BooleanField,
  TextField,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceField
} from 'admin-on-rest';
import equializer from 'material-ui-icons/Equalizer';

export const SurveyIcon = equializer;

const SurveyFilter = props => (
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
export const SurveyList = props => (
  <List {...props} title="Lista de encuestas" filters={<SurveyFilter />}>
    <Datagrid>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <TextField label="Url" source="link" />
      <BooleanField label="Activo" source="active" />
      <EditButton basePath="/Surveys" />
      <DeleteButton basePath="/Surveys" />
      <ShowButton basePath="/Surveys" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const SurveyTitle = ({ record }) => (
  <span>
    Encuesta {record.userId ? `"${record.userId}"` : `"${record.content}"`}
  </span>
);

SurveyTitle.propTypes = {
  record: PropTypes.object
};
SurveyTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const SurveyEdit = props => (
  <Edit title={<SurveyTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Url" source="link" />
      <BooleanInput label="Activo" source="active" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const SurveyCreate = props => (
  <Create title="Crea una encuesta" {...props}>
    <SimpleForm>
      <TextInput label="Url" source="link" />
      <BooleanInput label="Activo" source="active" />
    </SimpleForm>
  </Create>
);

export const SurveyShow = props => (
  <Show title={<SurveyTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <TextField label="Url" source="link" />
      <BooleanField label="Activo" source="active" />
    </SimpleShowLayout>
  </Show>
);
