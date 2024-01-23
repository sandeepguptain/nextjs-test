import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriorityDisplay = ({priority}) => {
  return (
    <div className='flex justify-start align-baseline items-center' title='Priority'>
        <FontAwesomeIcon icon={faMinus} className={`pr-1 ${priority > 1 ? "text-green-400": "text-slate-500"} `}/>
        <FontAwesomeIcon icon={faMinus} className={`pr-1 ${priority > 2 ? "text-yellow-400": "text-slate-500"} `}/>
        <FontAwesomeIcon icon={faMinus} className={`pr-1 ${priority > 3 ? "text-orange-400": "text-slate-500"} `}/>
        <FontAwesomeIcon icon={faMinus} className={`pr-1 ${priority > 4 ? "text-red-400": "text-slate-500"} `}/>
    </div>
  )
}

export default PriorityDisplay