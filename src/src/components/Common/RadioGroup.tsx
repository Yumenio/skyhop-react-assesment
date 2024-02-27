import React, { useState } from 'react'

interface RadioGroupProps {
  options: string[];
  selectedOption: null|string;
  handleRadioChange: (option:string) => void;
}

const RadioGroup:React.FC<RadioGroupProps> = ({options, selectedOption, handleRadioChange}) => {
  return (
    <div className="flex items-center space-x-4 mt-4">
      {options.map( (option, index) => (
      <label key={index} className="flex items-center text-lg">
        <input
          type="radio"
          name={options.reduce( (acc, current) => acc+current)}
          value={option}
          checked={selectedOption === option}
          onChange={() => handleRadioChange(option)}
          className="mr-2 h-5 w-5 accent-skyhopBlue"
        />
        {option}
      </label>
      ))}
    </div>
  )
}

export default RadioGroup