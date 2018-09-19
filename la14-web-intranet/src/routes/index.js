import React from 'react';
import { Route } from 'react-router-dom';
import {
  Noticias,
  Eventos,
  Notas,
  Birthday,
  Indicadores,
  Marcadores,
  BuscadorEmpleados,
  NuevosIngresos
} from '../requestDashboard/';
import Register from '../pages/singUp/';

export default [
  <Route key="1" exact path="/Noticias" component={Noticias} />,
  <Route key="2" exact path="/Eventos" component={Eventos} />,
  <Route key="3" exact path="/Notas" component={Notas} />,
  <Route key="4" exact path="/Birthday" component={Birthday} />,
  <Route key="5" exact path="/Indicadores" component={Indicadores} />,
  <Route key="6" exact path="/Marcadores" component={Marcadores} />,
  <Route
    key="7"
    exact
    path="/BuscadorEmpleados"
    component={BuscadorEmpleados}
  />,
  <Route key="8" exact path="/NuevosIngresos" component={NuevosIngresos} />,
  <Route key="9" exact path="/register" component={Register} />
];
