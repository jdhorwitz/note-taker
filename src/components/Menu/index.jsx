import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class HeaderMenu extends Component {
  state = {
    activeItem: 'home',
    directionsUrl:
      'https://www.google.com/maps/place/5401+McAuley+Dr,+Ypsilanti,+MI+48197/@42.2644171,-83.6501648,17z/data=!3m1!4b1!4m5!3m4!1s0x883ca917ee15ca23:0x3c6b0ea1bec262b7!8m2!3d42.2644132!4d-83.6479761',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  openDirections = () => window.open(this.state.directionsUrl);

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu inverted pointing fluid widths={4}>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/create"
            name="create"
            active={activeItem === 'create'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/notes"
            name="notes"
            active={activeItem === 'notes'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}

export default HeaderMenu;
