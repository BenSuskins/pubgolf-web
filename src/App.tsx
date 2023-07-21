import * as React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/info' element={<Info/>}></Route>
    </Routes>
  );
}