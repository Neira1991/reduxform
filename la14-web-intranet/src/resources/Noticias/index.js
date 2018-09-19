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
  DateField,
  DateInput,
  Show,
  ShowButton,
  SimpleShowLayout,
  ReferenceField
} from 'admin-on-rest';
import notifications from 'material-ui-icons/Notifications';
import Comentarios from './comentarios';
import UploadField from '../../fields/UploadField';
import UploadInput from '../../fields/UploadInput';

export const NoticeIcon = notifications;

const NoticeFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por nombre" source="name" alwaysOn />
    <DateInput
      label="Buscar por fecha"
      source="createdAt"
      options={{ locale: 'es' }}
    />
  </Filter>
);

/**
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const NoticeList = props => (
  <div fluid id="divToPrint">
    <List {...props} title="Lista de noticias" filters={<NoticeFilter />}>
      <Datagrid>
        <TextField label="Nombre de noticia" source="name" />
        <TextField label="Contenido" source="content" />
        <UploadField label="Imagen" source="image" size={80} />
        <DateField
          locales="es-ES"
          options={{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }}
          label="Fecha de noticia"
          source="createdAt"
        />
        <EditButton basePath="/Notices" />
        <DeleteButton basePath="/Notices" />
        <ShowButton basePath="/Notices" />
      </Datagrid>
    </List>
  </div>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const NoticeTitle = ({ record }) => (
  <span>
    Noticia {record.name ? `"${record.name}"` : `"${record.content}"`}
  </span>
);

NoticeTitle.propTypes = {
  record: PropTypes.object
};
NoticeTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const NoticeEdit = props => (
  <Edit title={<NoticeTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <LongTextInput label="Contenido" source="content" />
      <UploadInput label="Imagen" source="image" typeResource="N" />
      <DateInput label="Fecha de noticia" source="createdAt" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const NoticeCreate = props => (
  <Create title="Crea una noticia" {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <LongTextInput label="Contenido" source="content" />
      <UploadInput label="Imagen" source="image" />
      <DateInput label="Fecha de noticia" source="createdAt" />
    </SimpleForm>
  </Create>
);

export const NoticeShow = props => (
  <div>
    <Show title={<NoticeTitle />} {...props}>
      <SimpleShowLayout>
        <TextField label="Nombre" source="name" />
        <TextField label="Contenido" source="content" />
        <UploadField label="Imagen" source="image" />
        <ReferenceField
          label="Usuario relacionado"
          source="userId"
          reference="Users"
        >
          <TextField label="Identidad de usuario" source="firstName" />
        </ReferenceField>
        <DateField label="Fecha de noticia" source="createdAt" />
      </SimpleShowLayout>
    </Show>
    <br />
    <Comentarios idNoticia={props.match.params.id} />
    <br />
  </div>
);

NoticeShow.propTypes = {
  match: PropTypes.object.isRequired
};
