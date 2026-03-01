import { BrowserRouter,Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
// import App from './pages/App.jsx'
import Home from './pages/home.jsx'
import AboutUs from './pages/aboutus.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App/>}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
  </BrowserRouter>

)
