import React from 'react'
import './App.css'
import FileUploader from './components/FileUploader'

function App() {
  return (
    <div className='App'>
      <h1 className=' text-3xl font-bold'>Document Upload</h1>
      <hr />
      <FileUploader />
    </div>
  )
}

export default App
