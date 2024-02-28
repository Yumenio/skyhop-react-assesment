import React, { useState } from 'react'
import PaneSectionHeader from '../Common/PaneSectionHeader'
import SuccessText from '../Common/SuccessText'

const LocationChecking = () => {
  const [data, setData] = useState<null | string[]>(null)
  return (
    <div>
      <PaneSectionHeader title='Location Checking' />
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <SuccessText text='All Available!' />
      )}
    </div>
  )
}

export default LocationChecking
