import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './routes/Navigation.jsx'
import DetailView from './routes/DetailView.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/eventDetails/:symbol" element={<DetailView/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
