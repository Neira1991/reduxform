import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { black } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import loopbackRestClient from 'aor-loopback';
import { API_URL, AUTH_URL } from './config';
import Login from './pages/login/';
import MaterialUiForm from './layout';
import authClient from './authClient';
import customRoutes from './routes';
import decorador from './decoradorRest';

import Dashboard from './dashboard';
import {
  NoticeList,
  NoticeEdit,
  NoticeCreate,
  NoticeIcon,
  NoticeShow
} from './resources/Noticias/index';
import {
  UserList,
  UserEdit,
  UserCreate,
  UserIcon,
  UserShow
} from './resources/Usuarios';
import {
  SuggestionList,
  SuggestionEdit,
  SuggestionCreate,
  SuggestionIcon,
  SuggestionShow
} from './resources/Sugerencias';
import {
  ContentList,
  ContentEdit,
  ContentCreate,
  ContentIcon,
  ContentShow
} from './resources/Contenidos';
import {
  CommentList,
  CommentEdit,
  CommentCreate,
  CommentIcon,
  CommentShow
} from './resources/Comentarios';
import {
  SurveyList,
  SurveyEdit,
  SurveyCreate,
  SurveyIcon,
  SurveyShow
} from './resources/Encuestas';
import {
  ItemList,
  ItemEdit,
  ItemCreate,
  ItemIcon,
  ItemShow
} from './resources/Articulos';
import {
  GalerieList,
  GalerieEdit,
  GalerieCreate,
  GalerieIcon,
  GalerieShow
} from './resources/Galerias';
import {
  NoteList,
  NoteEdit,
  NoteCreate,
  NoteIcon,
  NoteShow
} from './resources/Notas';
import {
  EventTypeList,
  EventTypeEdit,
  EventTypeCreate,
  EventTypeIcon,
  EventTypeShow
} from './resources/TipoDeEventos';
import {
  EventList,
  EventEdit,
  EventCreate,
  EventIcon,
  EventShow
} from './resources/Eventos';
import {
  LinkList,
  LinkEdit,
  LinkCreate,
  LinkIcon,
  LinkShow
} from './resources/URLs';
import {
  ClassifiedList,
  ClassifiedEdit,
  ClassifiedCreate,
  ClassifiedIcon,
  ClassifiedShow
} from './resources/Clasificados';
import {
  DocumentCategorieList,
  DocumentCategorieEdit,
  DocumentCategorieCreate,
  DocumentCategorieIcon,
  DocumentCategorieShow
} from './resources/CategoriasDoc';
import {
  RequestTypeList,
  RequestTypeEdit,
  RequestTypeCreate,
  RequestTypeIcon,
  RequestTypeShow
} from './resources/TiposDeSolicitud';
import {
  RequestList,
  RequestEdit,
  RequestCreate,
  RequestIcon,
  RequestShow
} from './resources/Solicitudes';
import {
  UserTypeList,
  UserTypeEdit,
  UserTypeCreate,
  UserTypeIcon,
  UserTypeShow
} from './resources/TipoDeUsuario';
import {
  UserDocumentTypeList,
  UserDocumentTypeEdit,
  UserDocumentTypeCreate,
  UserDocumentTypeIcon,
  UserDocumentTypeShow
} from './resources/UserDocumentTypes';
import Menu from './Menu';
import {
  WorkCertificateList,
  WorkCertificateEdit,
  WorkCertificateCreate,
  WorkCertificateIcon,
  WorkCertificateShow
} from './resources/Documentos';

const principalColor = '#529cf4';
const myTheme = {
  fontFamily: 'Roboto, sans-serif',
  appBar: {
    height: 50
  },
  palette: {
    accent1Color: principalColor,
    primary1Color: principalColor
  },
  listItem: {
    secondaryTextColor: black,
    leftIconColor: principalColor,
    rightIconColor: principalColor
  }
};

const App = () => (
  <Admin
    appLayout={MaterialUiForm}
    menu={Menu}
    theme={getMuiTheme(myTheme)}
    customRoutes={customRoutes}
    title="Redux form "
    restClient={decorador(loopbackRestClient(API_URL))}
    dashboard={Dashboard}
    loginPage={Login}
    authClient={authClient(AUTH_URL)}
  >
    <Resource
      name="Notices"
      list={NoticeList}
      edit={NoticeEdit}
      create={NoticeCreate}
      remove={Delete}
      icon={NoticeIcon}
      show={NoticeShow}
      options={{ label: 'Noticias' }}
    />

    <Resource
      name="Users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      remove={Delete}
      icon={UserIcon}
      show={UserShow}
      options={{ label: 'Usuarios' }}
    />

    <Resource
      name="Suggestions"
      list={SuggestionList}
      edit={SuggestionEdit}
      create={SuggestionCreate}
      remove={Delete}
      icon={SuggestionIcon}
      show={SuggestionShow}
      options={{ label: 'Sugerencias' }}
    />
    <Resource
      name="Contents"
      list={ContentList}
      edit={ContentEdit}
      create={ContentCreate}
      remove={Delete}
      icon={ContentIcon}
      show={ContentShow}
      options={{ label: 'Contenido' }}
    />
    <Resource
      name="Comments"
      list={CommentList}
      edit={CommentEdit}
      create={CommentCreate}
      remove={Delete}
      icon={CommentIcon}
      show={CommentShow}
      options={{ label: 'Comentarios' }}
    />
    <Resource
      name="Surveys"
      list={SurveyList}
      edit={SurveyEdit}
      create={SurveyCreate}
      remove={Delete}
      icon={SurveyIcon}
      show={SurveyShow}
      options={{ label: 'Encuestas' }}
    />
    <Resource
      name="Items"
      list={ItemList}
      edit={ItemEdit}
      create={ItemCreate}
      remove={Delete}
      icon={ItemIcon}
      show={ItemShow}
      options={{ label: 'Items' }}
    />
    <Resource
      name="Galeries"
      list={GalerieList}
      edit={GalerieEdit}
      create={GalerieCreate}
      remove={Delete}
      icon={GalerieIcon}
      show={GalerieShow}
      options={{ label: 'Galerias' }}
    />
    <Resource
      name="Notes"
      list={NoteList}
      edit={NoteEdit}
      create={NoteCreate}
      remove={Delete}
      icon={NoteIcon}
      show={NoteShow}
      options={{ label: 'Notas' }}
    />
    <Resource
      name="Event-types"
      list={EventTypeList}
      edit={EventTypeEdit}
      create={EventTypeCreate}
      remove={Delete}
      icon={EventTypeIcon}
      show={EventTypeShow}
      options={{ label: 'Tipos de Eventos' }}
    />
    <Resource
      name="Events"
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
      remove={Delete}
      icon={EventIcon}
      show={EventShow}
      options={{ label: 'Eventos' }}
    />
    <Resource
      name="Links"
      list={LinkList}
      edit={LinkEdit}
      create={LinkCreate}
      remove={Delete}
      icon={LinkIcon}
      show={LinkShow}
      options={{ label: 'Marcadores' }}
    />
    <Resource
      name="Classifieds"
      list={ClassifiedList}
      edit={ClassifiedEdit}
      create={ClassifiedCreate}
      remove={Delete}
      icon={ClassifiedIcon}
      show={ClassifiedShow}
      options={{ label: 'Clasificados' }}
    />
    <Resource
      name="Document-categories"
      list={DocumentCategorieList}
      edit={DocumentCategorieEdit}
      create={DocumentCategorieCreate}
      remove={Delete}
      icon={DocumentCategorieIcon}
      show={DocumentCategorieShow}
      options={{ label: 'Categorias de Documentos' }}
    />
    <Resource
      name="Request-types"
      list={RequestTypeList}
      edit={RequestTypeEdit}
      create={RequestTypeCreate}
      remove={Delete}
      icon={RequestTypeIcon}
      show={RequestTypeShow}
      options={{ label: 'Tipos de Solicitudes' }}
    />
    <Resource
      name="Requests"
      list={RequestList}
      edit={RequestEdit}
      create={RequestCreate}
      remove={Delete}
      icon={RequestIcon}
      show={RequestShow}
      options={{ label: 'Solicitudes' }}
    />
    <Resource
      name="User-types"
      list={UserTypeList}
      edit={UserTypeEdit}
      create={UserTypeCreate}
      remove={Delete}
      icon={UserTypeIcon}
      show={UserTypeShow}
      options={{ label: 'Tipo de Usuarios' }}
    />
    <Resource
      name="User-Document-Types"
      list={UserDocumentTypeList}
      edit={UserDocumentTypeEdit}
      create={UserDocumentTypeCreate}
      remove={Delete}
      icon={UserDocumentTypeIcon}
      show={UserDocumentTypeShow}
      options={{ label: 'Tipo de identificacion' }}
    />
    <Resource
      name="WorkCertificates"
      list={WorkCertificateList}
      edit={WorkCertificateEdit}
      create={WorkCertificateCreate}
      remove={Delete}
      icon={WorkCertificateIcon}
      show={WorkCertificateShow}
      options={{ label: 'Documentos' }}
    />
  </Admin>
);

export default App;
