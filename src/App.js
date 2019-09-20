import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import './components/NoteTitle';
import NoteTitle from './components/NoteTitle';

function App() {
  return (
    <div className="App">
      <NoteTitle />
      <NoteTitle />
    </div>
  );
}

export default App;
