import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NotepadNav from './containers/NotepadNav';
import NoteTitle from './components/NoteTitle';

function App() {
  return (
    <div className="App">
      <NotepadNav />
      <NoteTitle />
      <NoteTitle />
    </div>
  );
}

export default App;
