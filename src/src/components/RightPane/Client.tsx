import React, { useState } from 'react'
import Select from 'react-select';
import PaneSectionHeader from '../Common/PaneSectionHeader'
import RadioGroup from '../Common/RadioGroup'
import { FaClock } from 'react-icons/fa';

const testingCenters = [
  {name: "Testing Center 1", clients: [
    {value:"Option1", label:"Option1"}, 
    {value:"Option2", label:"Option2"}]
  },
  {name: "Testing Center 2", clients: [
    {value:"Option3", label:"Option3"}, 
    {value:"Option4", label:"Option4"}]
  },
  {name: "Testing Center 3", clients: [
    {value:"Option5", label:"Option5"}, 
    {value:"Option6", label:"Option6"}]
  },
  {name: "Testing Center 4", clients: [
    {value:"Option7", label:"Option7"}, 
    {value:"Option8", label:"Option8"}]
  },
]


const Client = () => {
  const [selectedOption, setSelectedOption] = useState<null|string>(null);
  const [selectedClients, setSelectedClients] = useState({});
  const handleRadioChange = (option:string) => setSelectedOption(option);

  const handleSelectChange = (testingCenterName:string, selectedClient: any) => {
    setSelectedClients((prevSelectedClients) => ({
      ...prevSelectedClients,
      [testingCenterName]: selectedClient,
    }));
  }
  return (
    <div>
      <PaneSectionHeader title="Client:" />
      <RadioGroup options={["Single", "Multiple"]} selectedOption={selectedOption} handleRadioChange={handleRadioChange}/>
      <ul className="mt-4">
        {
          testingCenters.map((item, index) => (
            <li key={index}>
              <div className="flex items-center space-x-10 space-y-4">
                <p>{item.name}</p>
                <Select
                  className="min-w-40"
                  options={item.clients}
                  placeholder="Select Client"
                  onChange= {(selectedValue) => handleSelectChange(item.name, selectedValue)}/>
                <button>
                  <FaClock className={"text-skyhopBlue mr-2"} />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Client