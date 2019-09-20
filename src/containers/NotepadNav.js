import React from 'react';
import Nav from 'react-bootstrap/Nav';
import AddNote from '../components/AddNote';
import Title from '../components/Title';

const NotepadNav = () => (
  <Nav>
    <AddNote />
    <Title />
  </Nav>
)

export default NotepadNav;