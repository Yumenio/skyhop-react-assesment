import React from 'react'

interface PaneSectionHeaderProps {
  title: string
}

const PaneSectionHeader: React.FC<PaneSectionHeaderProps> = ({ title }) => {
  return (
    <div>
      <h1 className='text-skyhopBlue font-bold'>{title}</h1>
    </div>
  )
}

export default PaneSectionHeader
