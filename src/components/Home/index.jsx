import React from 'react';
import { Button, Image, Divider, Container, Header } from 'semantic-ui-react';
import { ExpanseUp } from 'animate-components';
import { Link } from 'react-router-dom';
// import AA from '../../common/aa.svg';
import './index.css';

const Home = () =>
  <div className="home-page">
    <ExpanseUp duration=".5s">
      {/*<Image src={AA} size="medium" centered />*/}
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
    </ExpanseUp>
  </div>;

export default Home;
