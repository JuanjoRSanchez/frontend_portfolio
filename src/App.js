import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './Components/Main/Main.jsx';
import Header from './Components/Header/Header.jsx'
import Contact from './Components/Contact/Contact.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Projects from './Components/Projects/Projects.jsx';
import TechStack from './Components/TechStack/TechStack.jsx';
import Curriculum from './Components/Curriculum/Curriculum.jsx';
import Pacman from './Components/Games/Pacman/Pacman.jsx'
import Snake from './Components/Games/Snake/Snake.jsx'
import Conecta from './Components/Games/Conecta/Conecta.jsx'
import ConectaGame from './Components/Games/Conecta/ConectaGame.jsx'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/aboutMe' element={<AboutMe />}></Route>
          <Route path='/projects' element={<Projects />}> </Route>
          <Route path='/techstack' element={<TechStack />}> </Route>
          <Route path='/curriculum' element={<Curriculum />}> </Route>
          <Route path='/pacman' element={<Pacman />}> </Route>
          <Route path='/snake' element={<Snake />}> </Route>
          <Route path='/conecta4' element={<Conecta />}> </Route>
          <Route path='/conecta4Game' element={<ConectaGame />}> </Route>
          <Route path='/RickAndMorty' element={<ConectaGame />}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
