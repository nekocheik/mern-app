import React from 'react';
import '../css/style.css';
import './App.css';
import Form from '../Components/form/Form';
import Posts from '../Components/getmessages/GetMessages';

const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Nouvelle Application</h1>
      <div className="App__post">
        <Form />
        <Posts />
      </div>
    </div>
  );
}

export default App;
