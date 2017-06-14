import React from 'react';
import { Button, Image, Divider, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../../common/farmlogs.png';
import './index.css';

const Home = () =>
  <div className="home-page">
    <div>
      <Image src={logo} size="medium" centered />
      <Header block as="h2" textAlign="center">
        Welcome to Farm Notes!
      </Header>
      <Divider hidden />
      <Container text textAlign="center">
        <Header as="h3">Saving your thoughts when you can't</Header>
        <p>Welcome!</p>
        <p>We know it's hard to remember everything, and we want to help.</p>
        <p>Please either add a new note or view all past notes.</p>
        <Button><Link to="/create">Create Note</Link></Button>
        <Button><Link to="/notes">View Notes</Link></Button>
      </Container>
    </div>
  </div>;

export default Home;
