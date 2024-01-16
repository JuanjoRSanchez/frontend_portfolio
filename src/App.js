import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Main from './Components/Main/Main.jsx';
import Header from './Components/Header/Header.jsx'
import Contact from './Components/Contact/Contact.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Projects from './Components/Projects/Projects.jsx';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/AboutMe' element={<AboutMe />}></Route>
          <Route path='/projects' element={<Projects />}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
/*

    <div className="App App-header">
      <Main/>
    </div>

*/
/*
 <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
*/