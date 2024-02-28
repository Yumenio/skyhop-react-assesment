import React from 'react'
import './App.css'
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'

function App() {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <div>
        <h1 className='text-center text-3xl font-bold mt-10 mb-2'>
          Document Upload
        </h1>
        <hr className='border-t-2 border-gray-300 w-full' />
      </div>
      <div className='flex justify-center space-x-4 w-4/5'>
        <LeftPane />
        <RightPane />
      </div>
      <h1 className='text-xl font-bold'>
        Data in the import file is correct. Please press Continue to import.
      </h1>
      <div className='space-x-4'>
        <button className='mt-2 py-4 px-10 bg-skyhopBlue text-white cursor-pointer rounded-lg'>
          Continue Import
        </button>
        <button className='mt-2 py-4 px-10 bg-white text-orange-400 cursor-pointer rounded-lg border-2 border-orange-300'>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default App
