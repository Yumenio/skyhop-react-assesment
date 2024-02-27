import React from 'react'
import SplitSchedule from './RightPane/SplitSchedule'
import LocationChecking from './RightPane/LocationChecking'
import Client from './RightPane/Client'

const RightPane = () => {
  return (
    <div className="w-1/2">
      <SplitSchedule/>
      <hr className="my-4 border-t-2 border-gray-500 w-3/5"/>
      <LocationChecking/>
      <hr className="my-4 border-t-2 border-gray-500 w-3/5"/>
      <Client/>
    </div>
  )
}

export default RightPane