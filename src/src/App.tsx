import React from 'react'
import './App.css'
import FileUploader from './components/LeftPane/FileUploader'
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'

function App() {
  return (
    <div className='min-h-screen'>
      <h1 className='text-center text-3xl font-bold'>Document Upload</h1>
      <hr />
      <div className="flex justify-center space-x-4">
        <LeftPane/>
        <RightPane/>
      </div>
    </div>
  )
}

export default App
