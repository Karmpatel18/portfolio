// import { useState } from 'react'
import { Component } from 'react'
import Box from './components/box'

function App() {
  

  return (
    <>
      <div className="font-montserrat text-sm font-medium pt-4 flex justify-between flex-col sm:flex-row items-center">
        <div className="p-4 sm:ml-40">
          <h1>hey there</h1>
        </div>
        <div className="p-4 space-x-12 sm:mr-40 ">

          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>
      </div>
      <Box />
    </>
  )
}

export default App
