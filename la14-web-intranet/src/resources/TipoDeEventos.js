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
  SimpleShowLayout,
  ShowButton
} from 'admin-on-rest';
import event from 'material-ui-icons/EventNote';

export const EventTypeIcon = event;

const EventTypeFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar por codigo" source="code" alwaysOn />
  </Filter>
);
/**
 * list all the items in the database, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const EventTypeList = props => (
  <List {...props} title="Tipos de eventos" filters={<EventTypeFilter />}>
    <Datagrid>
      <TextField label="Valor" source="value" />
      <TextField label="Codigo" source="code" />
      <EditButton basePath="/EventTypes" />
      <DeleteButton basePath="/EventTypes" />
      <ShowButton basePath="/EventTypes" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const EventTypeTitle = ({ record }) => (
  <span>
    Tipo de evento {record.code ? `"${record.code}"` : `"${record.value}"`}
  </span>
);

EventTypeTitle.propTypes = {
  record: PropTypes.object
};
EventTypeTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const EventTypeEdit = props => (
  <Edit title={<EventTypeTitle />} {...props}>
    <SimpleForm>
      <TextInput label="Valor" source="value" />
      <TextInput label="Codigo" source="code" />
    </SimpleForm>
  </Edit>
);

/**
 * Form to create item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const EventTypeCreate = props => (
  <Create title="Crea un tipo de evento" {...props}>
    <SimpleForm>
      <TextInput label="Valor" source="value" />
      <TextInput label="Codigo" source="code" />
    </SimpleForm>
  </Create>
);

export const EventTypeShow = props => (
  <Show title={<EventTypeTitle />} {...props}>
    <SimpleShowLayout>
      <TextField label="Valor" source="value" />
      <TextField label="Codigo" source="code" />
    </SimpleShowLayout>
  </Show>
);
