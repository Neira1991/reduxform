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
  TextField,
  TextInput,
  Show,
  ShowButton,
  SimpleShowLayout,
  ReferenceField
} from 'admin-on-rest';
import photo from 'material-ui-icons/PhotoLibrary';

export const GalerieIcon = photo;

const GalerieFilter = props => (
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
export const GalerieList = props => (
  <List {...props} title="Lista de galerias" filters={<GalerieFilter />}>
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
      <EditButton basePath="/Galeries" />
      <DeleteButton basePath="/Galeries" />
      <ShowButton basePath="/Galeries" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const GalerieTitle = ({ record }) => (
  <span>Galeria {record.name ? `"${record.name}"` : `"${record.userId}"`}</span>
);

GalerieTitle.propTypes = {
  record: PropTypes.object
};
GalerieTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const GalerieEdit = props => (
  <Edit title={<GalerieTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const GalerieCreate = props => (
  <Create title="Crea una galeria" {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
    </SimpleForm>
  </Create>
);

export const GalerieShow = props => (
  <Show title={<GalerieTitle />} {...props}>
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
    </SimpleShowLayout>
  </Show>
);
