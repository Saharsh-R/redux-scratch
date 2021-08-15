import React from 'react';
import './App.css';
import Counter from './components/counter/counter';
import FormResult from './components/formSubmit/formResult';
import Form from './components/formSubmit/submitForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <div style={{display:'flex', border:'solid', padding: '0 20px', margin: '40px', alignItems: 'center'}}>
          <Form />
          <FormResult/>
        </div>
      </header>
    </div>
  );
}

export default App;
