import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest';
import imagenAvatar from './images/2.jpg';

const itemComment = props => (
  <List>
    <Card>
      <CardText>
        <ViewTitle title="Comentarios" />
        {props.comentarios.map(item => (
          <div key={item.id}>
            <ListItem
              leftAvatar={<Avatar src={imagenAvatar} />}
              primaryText={item.content}
              secondaryTextLines={2}
            />
            <Divider inset />
          </div>
        ))}
      </CardText>
    </Card>
  </List>
);

itemComment.propTypes = {
  comentarios: PropTypes.object.isRequired
};
export default itemComment;
