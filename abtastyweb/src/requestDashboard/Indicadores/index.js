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
import Img from './images/ind.jpg';

const imgStyles = {
  height: 300
};

const TableIndicadores = ({ indicadores }) => (
  <div>
    <Card>
      <CardMedia overlay={<CardTitle title="Indicadores Económicos" />}>
        <img src={Img} alt="150" style={imgStyles} />
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
                    <TableHeaderColumn>Valor</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {indicadores.map(item => (
                    <TableRow key={item.name}>
                      <TableRowColumn>{item.name}</TableRowColumn>
                      <TableRowColumn>
                        {'$'}
                        {item.value}
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

TableIndicadores.propTypes = {
  eventos: PropTypes.array.isRequired,
  indicadores: PropTypes.array.isRequired
};

export default TableIndicadores;
