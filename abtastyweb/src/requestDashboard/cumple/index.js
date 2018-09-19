import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Cake from 'material-ui/svg-icons/social/cake';
import Mood from 'material-ui/svg-icons/social/mood';
import PartyMode from 'material-ui/svg-icons/social/party-mode';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import ImgDefault from '../images/defaultNews.jpg';
import DimensionedExample from './confetti';
import Api from '../../services/Api';

const SvgIconExampleIcons = () => (
  <div>
    <center>
      <Cake color="ffffff" />
      <Mood color="ffffff" />
      <PartyMode color="ffffff" />
      <HardwareVideogameAsset color="ffffff" />
    </center>
  </div>
);

const CardBirthDay = user => (
  <Col xs={12} sm={6} md={4}>
    <div>
      <Card>
        <CardHeader
          title={user.firstName}
          subtitle={user.lastName}
          avatar={ImgDefault}
        />
        <CardMedia
          overlayContentStyle={{
            backgroundColor: 'rgb(183, 16, 16)',
            borderBottom: '1px solid rgb(183, 16, 16)'
          }}
          overlay={SvgIconExampleIcons()}
        >
          <img src={ImgDefault} alt="" />
        </CardMedia>
        <CardTitle titleColor="rgb(183, 16, 16)" title="Feliz Cumpleaños" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    </div>
  </Col>
);

class requestCumpleaños extends Component {
  state = {
    birthdays: [],
    isLoading: false,
    error: null
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const birthdays = await Api.getUserBirthDay();
    this.setState({ isLoading: false, birthdays });
  }

  render() {
    const { birthdays, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Cargando ...</p>;
    }

    return (
      <div>
        <DimensionedExample />
        <div>
          <Paper style={{ marginBottom: 20 }}>
            <center>
              <h1 style={{ color: '#529cf4' }}>Feliz Cumpleaños</h1>
            </center>
            <Divider />
          </Paper>
          <Row>{birthdays.map(i => CardBirthDay(i))}</Row>
        </div>
      </div>
    );
  }
}
export default requestCumpleaños;
