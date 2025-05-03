import './App.css'
import WeatherApp from './components/pages/WeatherApp'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<WeatherApp />} />
      </Routes>
    </>
  )
}

export default App
