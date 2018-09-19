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
  NumberInput,
  NumberField,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceField
} from 'admin-on-rest';
import Classified from 'material-ui-icons/FindInPage';
import UploadField from '../fields/UploadField';
import UploadInput from '../fields/UploadInput';

export const ClassifiedIcon = Classified;

const ClassifiedFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por descripcion" source="description" alwaysOn />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ClassifiedList = props => (
  <List {...props} title="Lista de clasificados" filters={<ClassifiedFilter />}>
    <Datagrid>
      <TextField label="Descripcion" source="description" />
      <NumberField label="Precio" source="price" />
      <UploadField label="Imagen" source="image" size={80} />
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <EditButton basePath="/Classifieds" />
      <DeleteButton basePath="/Classifieds" />
      <ShowButton basePath="/Classifieds" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const ClassifiedTitle = ({ record }) => (
  <span>
    Clasificado{' '}
    {record.userId ? `"${record.userId}"` : `"${record.description}"`}
  </span>
);

ClassifiedTitle.propTypes = {
  record: PropTypes.object
};
ClassifiedTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ClassifiedEdit = props => (
  <Edit title={<ClassifiedTitle />} {...props}>
    <SimpleForm>
      <LongTextInput label="Descripcion" source="description" />
      <NumberInput label="Precio" source="price" />
      <UploadInput label="Imagen" source="image" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const ClassifiedCreate = props => (
  <Create title="Crea un clasificado" {...props}>
    <SimpleForm>
      <LongTextInput label="Descripcion" source="description" />
      <NumberInput label="Precio" source="price" />
      <UploadInput label="Imagen" source="image" />
    </SimpleForm>
  </Create>
);

export const ClassifiedShow = props => (
  <Show title={<ClassifiedTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <TextField label="Descripcion" source="description" />
      <NumberField label="Precio" source="price" />
      <UploadField label="Imagen" source="image" />
    </SimpleShowLayout>
  </Show>
);
