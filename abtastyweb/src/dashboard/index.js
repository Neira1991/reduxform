import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classes from './style';

import {
  CardNoticias,
  CardBirthday,
  CardEventos,
  CardBookmarks,
  CardIndicadoresEconomicos,
  CardNotasPersonales,
  CardBuscadorEmpleados,
  CardNuevosIngresos
} from './dashboardCards';

const Dashboard = () => (
  <div>
    <Grid fluid>
      <Row>
        <Col xs={12} md={12}>
          <CardNoticias theme={classes} />
        </Col>
        <Col xs={12} md={6}>
          <CardBirthday theme={classes} />
        </Col>
        <Col xs={12} md={6}>
          <CardIndicadoresEconomicos theme={classes} />
        </Col>
        <Col xs={12} md={6}>
          <CardEventos theme={classes} />
        </Col>
        <Col xs={12} md={6}>
          <CardBookmarks theme={classes} />
        </Col>
        <Col xs={12} md={6}>
          <CardNotasPersonales theme={classes} />
        </Col>
        <Col xs={12} md={6}>
          <CardBuscadorEmpleados theme={classes} />
        </Col>
        <Col xs={12} md={12}>
          <CardNuevosIngresos theme={classes} />
        </Col>
      </Row>
    </Grid>
  </div>
);

Dashboard.defaultProps = {
  classes: {}
};

Dashboard.propTypes = {
  classes: PropTypes.object
};

export default Dashboard;
