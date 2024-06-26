import React from 'react'
import Navbar from './components/Navbar'
import Ourprograms from './pages/OurPrograms'
import IQHistory from './pages/IQHistory'
import HistoryOfOppf from './pages/HistoryOfOppf'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import { Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import IQMemberHistory from './pages/IQChapterList'
import IQcalendar from './pages/IQCalendar'
import ChapterArchives from './pages/ChapterArchives'

function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourprograms/mandatedprograms' element={<Ourprograms />} />
        <Route path='/historyoppf' element={<HistoryOfOppf />} />
        <Route path='/iqhistory' element={<IQHistory />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/chapterlinelist' element={<IQMemberHistory />} />
        <Route path='/iqcalendar' element={<IQcalendar />} />
        <Route path='/chapterArchives' element={<ChapterArchives />} />
      </Routes>
    <Footer />
  </>

  )
}

export default App