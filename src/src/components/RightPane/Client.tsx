import React, { useState } from 'react'
import PaneSectionHeader from '../Common/PaneSectionHeader'
import RadioGroup from '../Common/RadioGroup'

const Client = () => {
  const [selectedOption, setSelectedOption] = useState<null|string>(null);
  const handleRadioChange = (option:string) => setSelectedOption(option);
  return (
    <div>
      <PaneSectionHeader title="Client:" />
      <RadioGroup options={["Single", "Multiple"]} selectedOption={selectedOption} handleRadioChange={handleRadioChange}/>
    </div>
  )
}

export default Client