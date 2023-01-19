import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import { Routes, Route } from 'react-router-dom';
import Searched from '../components/Searched';
import Recipe from './Recipe';

const Pages = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:id" element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />}></Route>
      <Route path='/recipe/:id' element={<Recipe />}></Route>
    </Routes>
  )
}

export default Pages;