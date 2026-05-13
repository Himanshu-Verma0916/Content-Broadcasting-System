import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

const App = () => {

  const [sidebar, setSidebar] = useState(false)

  return (

    <div className='min-h-screen bg-[#f5f7fb]'>
      <ToastContainer />
      {/* NAVBAR */}
      <Navbar setSidebar={setSidebar} />

      {/* MAIN SECTION */}
      <div className='flex'>

        {/* SIDEBAR */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>

        {/* PAGE CONTENT */}
        <div className='flex-1 lg:ml-[270px] p-4 md:p-6'>

          <Routes>

            <Route path='/' element={<Dashboard/>} />  
            {/* <Route path='/upload' element={<h1 className='text-4xl font-bold text-gray-800'>Upload Content</h1>} />
            <Route path='/my-content' element={<h1 className='text-4xl font-bold text-gray-800'>My Content</h1>} />
            <Route path='/broadcasts' element={<h1 className='text-4xl font-bold text-gray-800'>Broadcasts</h1>} />
            <Route path='/analytics' element={<h1 className='text-4xl font-bold text-gray-800'>Analytics</h1>} />
            <Route path='/settings' element={<h1 className='text-4xl font-bold text-gray-800'>Settings</h1>} /> */}

          </Routes>

        </div>

      </div>

    </div>

  )

}

export default App