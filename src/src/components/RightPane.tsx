import React from 'react'
import SplitSchedule from './RightPane/SplitSchedule'
import LocationChecking from './RightPane/LocationChecking'
import Client from './RightPane/Client'

const RightPane = () => {
  return (
    <div className="w-2/5 h-5/6 py-10">
      <SplitSchedule/>
      <hr className="my-4 border-t-2 border-gray-300 w-2/5"/>
      <LocationChecking/>
      <hr className="my-4 border-t-2 border-gray-300 w-2/5"/>
      <Client/>
    </div>
  )
}

export default RightPane