import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/layout/Footer'

function App() {
  return (
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main>content</main>
        <Footer />
      </div>
  )
}

export default App
