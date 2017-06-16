import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const HeaderMenu = () => (
  <div>
    <Menu inverted pointing fluid widths={3}>
      <Menu.Item
        as={Link}
        to="/"
        name="home"
      />
      <Menu.Item
        as={Link}
        to="/create"
        name="create"
      />
      <Menu.Item
        as={Link}
        to="/notes"
        name="notes"
      />
    </Menu>
  </div>
);

export default HeaderMenu;
