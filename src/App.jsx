import React from 'react'
import StudentDetails from './Components/StudentDetails'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
    <Routes>
    <Route path="/:id" element={ <StudentDetails/>}/>
    </Routes>
    </div>
  )
}

export default App
