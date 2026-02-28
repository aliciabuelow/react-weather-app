import { useState } from 'react'
import './App.css'
import Weather from './Weather'

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer className="mt-3">Coded by Alicia Buelow and <a href="https://github.com/aliciabuelow/react-weather-app" target="_blank">open-sourced on GitHub</a></footer>
      </div>
    </div>
    )
}