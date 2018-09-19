import React, { createElement, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import autoprefixer from 'material-ui/utils/autoprefixer';
import CircularProgress from 'material-ui/CircularProgress';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import Notification from 'admin-on-rest/lib/mui/layout/Notification';
import Sidebar from 'admin-on-rest/lib/mui/layout/Sidebar';
import { setSidebarVisibility as sSV } from 'admin-on-rest/lib/actions';
import IconButton from 'material-ui/IconButton';
import MenuHome from 'material-ui/svg-icons/navigation/menu';

import IconMenu from './icon/IconMenu.svg';

const styles = {
  wrapper: {
    // Avoid IE bug with Flexbox, see #467
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  body: {
    backgroundColor: '#edecec',
    display: 'flex',
    flex: '1 1 auto',
    overflowY: 'hidden',
    overflowX: 'scroll'
  },
  bodySmall: {
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: '2em'
  },
  contentSmall: {
    flex: 1,
    paddingTop: '3em'
  },
  loader: {
    position: 'absolute',
    top: '48vh',
    right: '48vw',
    margin: 16,
    zIndex: 1200
  }
};

const prefixedStyles = {};

class Layout extends Component {
  state = { drawer: true };
  componentWillMount() {
    if (this.props.width !== 1) {
      this.props.setSidebarVisibility(true);
    }
  }
  buttonDrawer = () => (
    <IconButton
      onClick={() => {
        this.props.setSidebarVisibility(!this.state.drawer);
        this.setState({
          drawer: !this.state.drawer
        });
      }}
      iconStyle={{ fill: 'red' }}
    >
      <MenuHome />
    </IconButton>
  );

  render() {
    const {
      children,
      dashboard,
      isLoading,
      logout,
      menu,
      theme,
      title,
      width
    } = this.props;

    const muiTheme = getMuiTheme(theme);
    if (!prefixedStyles.main) {
      // do this once because user agent never changes
      const prefix = autoprefixer(muiTheme);
      prefixedStyles.wrapper = prefix(styles.wrapper);
      prefixedStyles.main = prefix(styles.main);
      prefixedStyles.body = prefix(styles.body);
      prefixedStyles.bodySmall = prefix(styles.bodySmall);
      prefixedStyles.content = prefix(styles.content);
      prefixedStyles.contentSmall = prefix(styles.contentSmall);
    }
    const principalColor = '#529cf4';
    const appBarStyle = {
      appBar: {
        backgroundColor: '#ffffff'
      },
      title: {
        color: principalColor
      },
      icon: {
        width: 20,
        margin: 8
      }
    };
    const pcS = prefixedStyles.contentSmall;
    const pc = prefixedStyles.content;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={prefixedStyles.wrapper}>
          <div style={prefixedStyles.main}>
            {width !== 1 ? (
              <AppBar
                style={appBarStyle.appBar}
                title={<span style={appBarStyle.title}>{title}</span>}
                iconElementLeft={this.buttonDrawer()}
              />
            ) : (
              <AppBar
                style={appBarStyle.appBar}
                iconElementLeft={this.buttonDrawer()}
                title={<span style={appBarStyle.title}>{title}</span>}
              />
            )}
            <div
              className="body"
              style={
                width === 1 ? prefixedStyles.bodySmall : prefixedStyles.body
              }
            >
              <div style={width === 1 ? pcS : pc}>{children}</div>
              <Sidebar theme={theme}>
                {createElement(menu || Menu, {
                  logout,
                  hasDashboard: !!dashboard
                })}
              </Sidebar>
            </div>
            <Notification />
            {isLoading && (
              <CircularProgress
                className="app-loader"
                color="#529cf4"
                size={width === 1 ? 20 : 30}
                thickness={2}
                style={styles.loader}
              />
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const componentPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string
]);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  dashboard: componentPropType,
  isLoading: PropTypes.bool.isRequired,
  logout: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string
  ]),
  menu: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  setSidebarVisibility: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
  width: PropTypes.number
};

Layout.defaultProps = {
  width: 1,
  menu: '',
  logout: '',
  children: () => {},
  dashboard: []
};

function mapStateToProps(state) {
  return {
    isLoading: state.admin.loading > 0
  };
}

const enhance = compose(
  connect(mapStateToProps, {
    setSidebarVisibility: sSV
  }),
  withWidth()
);

export default enhance(Layout);
