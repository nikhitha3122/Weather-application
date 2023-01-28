import React from 'react'
import SearchWeather from './components/SearchWeather'
import { Routes, Route, Link } from 'react-router-dom'
import Favourite from './components/Favourite'
import GeoLocation from './components/GeoLocation'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import './App.css';

export default function App() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}>
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              {/* <li className="nav-item ms-5 me-5 fs-5">
                <Link className="nav-link active" to=''>Current Location</Link>
              </li> */}
              <li className="nav-item ms-5 me-5 fs-5">
                <Link className="nav-link " to=''>Search by city</Link>
              </li>
              <li className="nav-item ms-5 me-5 fs-5">
                <Link className="nav-link " to='Favourite'>Favourite</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav >

    <Routes>

      {/* <Route path="/" element={<GeoLocation />} />  */}
      <Route  path="/" element={<SearchWeather/>} />
      <Route path="/x" element={<Favourite />} />
      {/* <Route path="/y" element={<GeoLocation/>}></Route> */}
    </Routes>
    </div >
    // <div className="App">


    //   <Navbar bg="light" expand="lg">
    //     <Container>
    //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="#home">Home</Nav.Link>
    //           <Nav.Link href="#link">Link</Nav.Link>
    //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>




    //   <Routes>
    //     <Route path="/" element={<SearchWeather />} />
    //     <Route path="/favourite" element={<Favourite />} />
    //   </Routes>
    // </div>
  )
}
