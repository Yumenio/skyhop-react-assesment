import React, { useState } from 'react'
import PaneSectionHeader from '../Common/PaneSectionHeader'
import SuccessText from '../Common/SuccessText'

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
        <SuccessText text="No Elapsed Dates!" />
      )}
    </div>
  )
}

export default ElapseDataItems