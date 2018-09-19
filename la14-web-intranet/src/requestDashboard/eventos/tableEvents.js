import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  CardTitle,
  Card,
  CardMedia
} from 'material-ui';
import Img from './images/eventos.jpg';

const dateFormat = require('dateformat');

function sortFunction(a, b) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1;
}

const TableEvents = ({ eventos }) => (
  <div>
    <Card>
      <CardMedia overlay={<CardTitle title="Eventos" />}>
        <img src={Img} alt="" />
      </CardMedia>
      <div>
        <Grid fluid>
          <Row>
            <Col xs={8} md={12}>
              <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow />
                  <TableRow>
                    <TableHeaderColumn>Nombre</TableHeaderColumn>
                    <TableHeaderColumn>Fecha</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {eventos.sort(sortFunction).map(item => (
                    <TableRow key={item.on}>
                      <TableRowColumn>{item.name}</TableRowColumn>
                      <TableRowColumn>
                        {dateFormat(item.on, 'dd mmm, yyyy')}
                      </TableRowColumn>
                    </TableRow>
                  ))}
                  <TableRow />
                </TableBody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    </Card>
  </div>
);

TableEvents.propTypes = {
  eventos: PropTypes.array.isRequired
};

export default TableEvents;
