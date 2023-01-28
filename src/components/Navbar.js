import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import GeoLocation from './GeoLocation';

function Navbar() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GeoLocation/>} />
      </Routes>
    </div>
  )
}

export default Navbar;