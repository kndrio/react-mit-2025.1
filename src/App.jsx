import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container 
} from "reactstrap"

import Header from "./components/Header"

import './App.css'

function App() {


  return (
    <>
      <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <Header/>
        <Container className="flex-grow-1">
          <h1>My Content</h1>
        </Container>
        <footer>
          INFNET - MIT Full Stack 2025
        </footer>
      </div>
    </>
  )
}

export default App
