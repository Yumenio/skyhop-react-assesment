import React, { useState } from 'react'
import {FaClock} from 'react-icons/fa';
import PaneSectionHeader from '../Common/PaneSectionHeader'

const ToleranceWindow = () => {
  const [toggleOn, setToggleOn] = useState(true);
  const [selectedDay, setSelectedDay] = useState('');

  const handleToggle = () => {
    setToggleOn(!toggleOn);
  }

  const handleSelectDay = () => {
    // TODO
  }
  return (
    <div>
      <PaneSectionHeader title="Tolerance Window:" />
      <div className="flex flex-col items-center sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
        <div className={`rounded-full w-16 h-8 flex bg-${!toggleOn ? 'skyhopBlue' : 'skyhopBlue'} p-1 cursor-pointer mb-2 sm:mb-0`} onClick={handleToggle}>
          <div className={`w-6 h-6 rounded-full bg-white transform transition-transform ${toggleOn ? 'translate-x-8' : ''}`}>
          </div>
        </div>
        <p className="mr-2">{toggleOn ? 'Toggle ON' : 'Toggle OFF'}</p>
        <span className="hidden sm:inline">|</span>
        <button
          className={`flex items-center py-2 px-4 rounded ${!toggleOn ? 'cursor-not-allowed opacity-50' : ''}`}
          onClick={handleSelectDay}
          disabled={!toggleOn}
        >
          <FaClock className={"text-skyhopBlue mr-2"} />
          Select Tolerance Level
        </button>
      </div>
    </div>
  )
}

export default ToleranceWindow