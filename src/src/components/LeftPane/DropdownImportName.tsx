import React from 'react'
import Select from 'react-select';

const DropdownImportName = () => {
  const importNameOptions = [
    {value: 'Option1', label: 'Option1'},
    {value: 'Option2', label: 'Option2'},
  ];
  return (
    <div className="w-11/12">
      <Select
        options={importNameOptions}
        placeholder="Select Import Name:"
      />
    </div>
  )
}

export default DropdownImportName