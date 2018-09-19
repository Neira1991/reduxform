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
  ReferenceField,
  Show,
  SimpleShowLayout,
  ShowButton
} from 'admin-on-rest';
import comment from 'material-ui-icons/Comment';

export const CommentIcon = comment;

const CommentFilter = props => (
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
export const CommentList = props => (
  <List {...props} title="Lista de comentarios" filters={<CommentFilter />}>
    <Datagrid>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <ReferenceField
        label="Nombre de noticia"
        source="noticeId"
        reference="Notices"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Contenido" source="content" />
      <EditButton basePath="/Comments" />
      <DeleteButton basePath="/Comments" />
      <ShowButton basePath="/Comments" />
    </Datagrid>
  </List>
);

/**
 * get the current title
 * @param  {object}
 * @return  {span}
 */
export const CommentTitle = ({ record }) => (
  <span>
    Comentario {record.userId ? `"${record.userId}"` : `"${record.content}"`}
  </span>
);

CommentTitle.propTypes = {
  record: PropTypes.object
};
CommentTitle.defaultProps = {
  record: {}
};

/**
 * function to edit an item, you need to call
 * the input fields like the service
 * @param  {object}
 */
export const CommentEdit = props => (
  <Edit title={<CommentTitle />} {...props}>
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
export const CommentCreate = props => (
  <Create title="Crea un comentario" {...props}>
    <SimpleForm>
      <LongTextInput label="Contenido" source="content" />
    </SimpleForm>
  </Create>
);

export const CommentShow = props => (
  <Show title={<CommentTitle />} {...props}>
    <SimpleShowLayout>
      <ReferenceField
        label="Usuario"
        source="userId"
        reference="Users"
        linkType={false}
      >
        <TextField source="firstName" />
      </ReferenceField>
      <ReferenceField
        label="Nombre de noticia"
        source="noticeId"
        reference="Notices"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Contenido" source="content" />
    </SimpleShowLayout>
  </Show>
);
