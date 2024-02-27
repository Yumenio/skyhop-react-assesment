import React, { useState } from 'react'
import PaneSectionHeader from '../Common/PaneSectionHeader'

const ElapseDataItems = () => {
  const [data, setData] = useState<null | string[]>(null)
  return (
    <div>
      <PaneSectionHeader title={"Elapse Data Checking"} />
      {data? (
        <ul>
          {data.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      ):(
        <p className="text-green-500 font-semibold">No Elapsed Dates!</p>
      )}
    </div>
  )
}

export default ElapseDataItems