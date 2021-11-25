import './App.css';
import React from "react"; 
import Header from './Components/Header';
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="app__sub">
        <AddContact />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
