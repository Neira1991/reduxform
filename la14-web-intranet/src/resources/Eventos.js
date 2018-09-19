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
  DateField,
  TextField,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceField
} from 'admin-on-rest';
import group from 'material-ui-icons/Event';

export const EventIcon = group;

const EventFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por nombre del evento" source="name" alwaysOn />
    <DateInput label="Buscar por fecha" source="on" />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const EventList = props => (
  <List {...props} title="Lista de eventos" filters={<EventFilter />}>
    <Datagrid>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <TextField label="Nombre del evento" source="name" />
      <DateField
        locales="es-ES"
        options={{
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }}
        label="Fecha de noticia"
        source="on"
      />
      <EditButton basePath="/Events" />
      <DeleteButton basePath="/Events" />
      <ShowButton basePath="/Events" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const EventTitle = ({ record }) => (
  <span>Evento {record.name ? `"${record.name}"` : `"${record.userId}"`}</span>
);

EventTitle.propTypes = {
  record: PropTypes.object
};
EventTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <TextInput label="Nombre del evento" source="name" />
      <DateInput label="Dia del evento" source="on" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const EventCreate = props => (
  <Create title="Crea un evento" {...props}>
    <SimpleForm>
      <TextInput label="Nombre del evento" source="name" />
      <DateInput label="Dia del evento" source="on" />
    </SimpleForm>
  </Create>
);

export const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <TextField label="Nombre del evento" source="name" />
      <DateField label="Dia del evento" source="on" />
    </SimpleShowLayout>
  </Show>
);
