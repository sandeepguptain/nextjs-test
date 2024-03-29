'use client'

import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import  {useRouter } from 'next/navigation'

const  DeleteBlock = ({id}) => {
    const router = useRouter()
    const deleteContract = async () =>{
        const confirmation =   confirm("Are you sure want to delete?");
        if(!confirmation){
            return
        }
        const res = await fetch(`/api/Contracts/${id}`, {
          method: "DELETE",
        });

        if(res.ok) {
            router.refresh()
        }
    }
  return (
    <FontAwesomeIcon  icon={faTrash} className='text-red-400 hover:cursor-pointer hover:text-red-200' onClick={deleteContract} />
  )
}

export default DeleteBlock