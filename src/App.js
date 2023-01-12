import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import './App.css';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
    )
  }
}
