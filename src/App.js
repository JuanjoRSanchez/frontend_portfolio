import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './Components/Main/Main.jsx';
import Header from './Components/Header/Header.jsx'
import Contact from './Components/Contact/Contact.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Projects from './Components/Projects/Projects.jsx';
import TechStack from './Components/TechStack/TechStack.jsx';
import Experience from './Components/Experience/Experience.jsx';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/aboutMe' element={<AboutMe />}></Route>
          <Route path='/projects' element={<Projects />}> </Route>
          <Route path='/techstackEducation' element={<TechStack />}> </Route>
          <Route path='/experience' element={<Experience />}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
