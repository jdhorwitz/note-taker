import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class HeaderMenu extends Component {
  state = {
    activeItem: 'home',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
