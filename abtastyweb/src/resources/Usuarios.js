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
  DateInput,
  TextField,
  SelectInput,
  Show,
  SimpleShowLayout,
  DateField,
  ShowButton,
  ReferenceField
} from 'admin-on-rest';
import person from 'material-ui-icons/Person';
// import { CardActions } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import { red800 } from 'material-ui/styles/colors';
import group from 'material-ui-icons/GetApp';
// import pdf from '../utils/printDocument';
import AvatarInput from '../fields/AvatarInput';

export const UserIcon = person;
export const GetIcon = group;

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por nombre" source="firstName" alwaysOn />
    <DateInput
      label="Buscar por fecha de nacimiento"
      source="birthDate"
      locales="es-ES"
    />
  </Filter>
);

// const cardActionStyle = {
//   zIndex: 2,
//   display: 'inline-block',
//   float: 'right',
// };
//
// const iconStyles = {
//   marginTop: 0,
//   verticalAlign: 'middle',
// };

// const UserActions = props => (
//   <CardActions style={cardActionStyle} {...props}>
//     <FlatButton primary label="Exportar Pdf" onClick={pdf}>
//       <GetIcon color={red800} style={iconStyles} />
//     </FlatButton>
//   </CardActions>
// );
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserList = props => (
  <List {...props} title="Lista de usuarios" filters={<UserFilter />}>
    <Datagrid>
      <ReferenceField
        label="Identificación"
        source="typeId"
        reference="User-Document-Types"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Número" source="idNumber" />
      <TextField label="Nombre" source="firstName" />
      <TextField label="Apellido" source="lastName" />
      <DateField
        locales="es-ES"
        options={{
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }}
        label="Fecha de nacimiento"
        source="birthDate"
      />
      <EditButton basePath="/Users" />
      <DeleteButton basePath="/Users" />
      <ShowButton basePath="/Users" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const UserTitle = ({ record }) => (
  <span>
    Usuario {record.name ? `"${record.name}"` : `"${record.firstName}"`}
  </span>
);

UserTitle.propTypes = {
  record: PropTypes.object
};
UserTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <SelectInput
        label="Tipo de identificacion"
        source="typeId"
        choices={[
          { id: '1', name: 'Cedula de Ciudadania' },
          { id: '2', name: 'Pasaporte' }
        ]}
      />
      <TextInput label="Número" source="idNumber" />
      <TextInput label="Nombre" source="firstName" />
      <TextInput label="Apellido" source="lastName" />
      <TextInput label="Email" source="email" />
      <DateInput
        label="Fecha de nacimiento"
        source="birthDate"
        options={{ locale: 'es' }}
      />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const UserCreate = props => (
  <Create title="Crea un usuario" {...props}>
    <SimpleForm>
      <SelectInput
        label="Tipo de identificacion"
        source="typeId"
        choices={[
          { id: '1', name: 'Cedula de Ciudadania' },
          { id: '2', name: 'Pasaporte' }
        ]}
      />
      <TextInput label="Número" source="idNumber" />
      <TextInput label="Nombre" source="firstName" />
      <TextInput label="Apellido" source="lastName" />
      <TextInput label="Email" source="email" />
      <DateInput label="Fecha de nacimiento" source="birthDate" />
      <AvatarInput col="12" source="avatar" />
    </SimpleForm>
  </Create>
);

export const UserShow = props => (
  <Show title={<UserTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Identificación"
        source="typeId"
        reference="User-Document-Types"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Número" source="idNumber" />
      <TextField label="Nombre" source="firstName" />
      <TextField label="Apellido" source="lastName" />
      <TextField label="Email" source="email" />
      <DateField
        label="Fecha de nacimiento"
        source="birthDate"
        locale="es-ES"
        options={{
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }}
      />
    </SimpleShowLayout>
  </Show>
);
