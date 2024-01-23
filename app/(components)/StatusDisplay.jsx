import React from 'react'

const StatusDisplay = ({status}) => {
    const getColor = (status) => {
        let color = 'bg-slate-700'
        switch (status.toLowerCase()) {
            case 'completed':
                color = 'bg-green-400'
                return color
            case 'in progress': 
                color = 'bg-yellow-400'
                return color
            case 'not started':
                color = 'bg-red-400'
                return color
        }
        return color
    }
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-[10px] font-bold text-gray-700 bg-green-500 uppercase ${getColor(status)}`}>
        {status}
    </span>
  )
}

export default StatusDisplay