import React from 'react'

interface SuccessTextProps {
  text: string
}

const SuccessText: React.FC<SuccessTextProps> = ({ text }) => {
  return <p className='text-green-500 font-semibold'>{text}</p>
}

export default SuccessText
