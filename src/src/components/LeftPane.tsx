import React from 'react'
import DropdownImportName from './LeftPane/DropdownImportName'
import FileUploader from './LeftPane/FileUploader'
import ElapseDataItems from './LeftPane/ElapseDataItems'
import ToleranceWindow from './LeftPane/ToleranceWindow'

const LeftPane = () => {
  return (
    <div className="w-1/2 h-5/6">
      <DropdownImportName />
      <hr className="my-4 border-t-2 border-gray-500 w-3/5"/>
      <FileUploader />
      <hr className="my-4 border-t-2 border-gray-500 w-3/5"/>
      <ElapseDataItems/>
      <hr className="my-4 border-t-2 border-gray-500 w-3/5"/>
      <ToleranceWindow/>
    </div>
  )
}

export default LeftPane