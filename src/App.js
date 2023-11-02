import React from 'react'
import Navbar from './components/Navbar'
import Ourprograms from './pages/OurPrograms'
import IQHistory from './pages/IQHistory'
import HistoryOfOppf from './pages/HistoryOfOppf'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import { Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return(
    <>
      <div className='container'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ourprograms' element={<Ourprograms/>} />
          <Route path='/historyoppf' element={<HistoryOfOppf/>} />
          <Route path='/iqhistory' element={<IQHistory/>} />
          <Route path='/contactus' element={<ContactUs/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App