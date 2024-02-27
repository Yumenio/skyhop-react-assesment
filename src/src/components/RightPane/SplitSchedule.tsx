import React, { useState } from 'react'
import PaneSectionHeader from '../Common/PaneSectionHeader'

const SplitSchedule = () => {
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

  const handleRadioChange = (value:boolean) => {
    setSelectedOption(value);
  }
  return (
    <div>
      <PaneSectionHeader title="Split schedule using social distancing?" />
      <div className="flex items-center space-x-4 mt-4">
        <label className="flex items-center text-lg">
          <input
            type="radio"
            name="scheduleyesno"
            value="yes"
            checked={selectedOption === true}
            onChange={() => handleRadioChange(true)}
            className="mr-2 h-5 w-5 accent-skyhopBlue"
          />
          Yes
        </label>
        <label className="flex items-center text-lg">
          <input
            type="radio"
            name="scheduleyesno"
            value="no"
            checked={selectedOption === false}
            onChange={() => handleRadioChange(false)}
            className="mr-2 h-5 w-5 accent-skyhopBlue"
          />
          No
        </label>
        
      </div>
    </div>
  )
}

export default SplitSchedule