import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';
import ActionHome from 'material-ui/svg-icons/action/home';

const menuItem = (onMenuTap, to, label, Icon) => (
  <MenuItemLink
    key={label}
    to={`../${to}`}
    primaryText={label}
    onClick={onMenuTap}
    leftIcon={Icon && <Icon />}
  />
);

function showItem(item) {
  return [].includes(item.name);
}

const Menu = ({ resources, onMenuTap, logout }) => {
  const newResources = resources.filter(showItem);
  return (
    <div>
      <MenuItemLink
        to="/"
        primaryText="Dashboard"
        onClick={onMenuTap}
        leftIcon={ActionHome && <ActionHome />}
      />
      {newResources.map(i =>
        menuItem(onMenuTap, i.name, i.options.label, i.icon)
      )}
      {logout}
    </div>
  );
};

Menu.propTypes = {
  resources: PropTypes.array.isRequired,
  logout: PropTypes.object.isRequired,
  onMenuTap: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  resources: getResources(state)
});
export default connect(mapStateToProps)(Menu);
