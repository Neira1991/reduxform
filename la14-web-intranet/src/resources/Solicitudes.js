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
  SelectInput,
  LongTextInput,
  TextField,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceField
} from 'admin-on-rest';
import request from 'material-ui-icons/ContactMail';

export const RequestIcon = request;

const RequestFilter = props => (
  <Filter {...props}>
    <TextInput
      label="Buscar identificacion responsable"
      source="responsableId"
      alwaysOn
    />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const RequestList = props => (
  <List {...props} title="Lista de solicitudes" filters={<RequestFilter />}>
    <Datagrid>
      <TextField label="Identificacion responsable" source="responsableId" />
      <ReferenceField
        label="Tipo de identificacion"
        source="typeId"
        reference="User-Document-Types"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Contenido" source="content" />
      <TextField label="Estado" source="status" />
      <EditButton basePath="/Requests" />
      <DeleteButton basePath="/Requests" />
      <ShowButton basePath="/Requests" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const RequestTitle = ({ record }) => (
  <span>
    Solicitud {record.userId ? `"${record.userId}"` : `"${record.status}"`}
  </span>
);

RequestTitle.propTypes = {
  record: PropTypes.object
};
RequestTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const RequestEdit = props => (
  <Edit title={<RequestTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Identificacion responsable" source="responsableId" />
      <SelectInput
        label="Tipo de identificacion"
        source="typeId"
        choices={[
          { id: '1', name: 'Cedula de Ciudadania' },
          { id: '2', name: 'Pasaporte' }
        ]}
      />
      <LongTextInput label="Contenido" source="content" />
      <TextInput label="Estado" source="status" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const RequestCreate = props => (
  <Create title="Crea una solicitud" {...props}>
    <SimpleForm>
      <TextInput label="Identificacion responsable" source="responsableId" />
      <SelectInput
        label="Tipo de identificacion"
        source="typeId"
        choices={[
          { id: '1', name: 'Cedula de Ciudadania' },
          { id: '2', name: 'Pasaporte' }
        ]}
      />
      <LongTextInput label="Contenido" source="content" />
      <TextInput label="Estado" source="status" />
    </SimpleForm>
  </Create>
);

export const RequestShow = props => (
  <Show title={<RequestTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Tipo de identificacion"
        source="typeId"
        reference="User-Document-Types"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Contenido" source="content" />
      <TextField label="Estado" source="status" />
    </SimpleShowLayout>
  </Show>
);
