import React, { useState } from 'react'
import PaneSectionHeader from '../Common/PaneSectionHeader'
import RadioGroup from '../Common/RadioGroup'

const SplitSchedule = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleRadioChange = (option: string) => {
    setSelectedOption(option)
  }
  return (
    <div>
      <PaneSectionHeader title='Split schedule using social distancing?' />
      <RadioGroup
        options={['Yes', 'No']}
        selectedOption={selectedOption}
        handleRadioChange={handleRadioChange}
      />
    </div>
  )
}

export default SplitSchedule
