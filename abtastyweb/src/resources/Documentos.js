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
  ShowButton,
  ReferenceField
} from 'admin-on-rest';
import folder from 'material-ui-icons/Folder';

import UploadField from '../fields/UploadFieldDocument';
import UploadInput from '../fields/UploadInputDocument';

export const WorkCertificateIcon = folder;

export const WorkCertificateFilter = props => (
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
export const WorkCertificateList = props => (
  <List
    {...props}
    title="Lista de documentos"
    filters={<WorkCertificateFilter />}
  >
    <Datagrid>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <TextField label="Nombre" source="name" />
      <UploadField label="Documento" source="url" size={130} />
      <EditButton basePath="/WorkCertificates" />
      <DeleteButton basePath="/WorkCertificates" />
      <ShowButton basePath="/WorkCertificates" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const WorkCertificateTitle = ({ record }) => (
  <span>
    Contenido {record.name ? `"${record.name}"` : `"${record.userId}"`}
  </span>
);

WorkCertificateTitle.propTypes = {
  record: PropTypes.object
};
WorkCertificateTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const WorkCertificateEdit = props => (
  <Edit title={<WorkCertificateTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <UploadInput label="Documento" source="url" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const WorkCertificateCreate = props => (
  <Create title="Nuevo Documento" {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <UploadInput label="Documento" source="url" />
    </SimpleForm>
  </Create>
);

export const WorkCertificateShow = props => (
  <Show title={<WorkCertificateTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <TextField label="Nombre" source="name" />
      <UploadField label="Documento" source="url" />
    </SimpleShowLayout>
  </Show>
);
