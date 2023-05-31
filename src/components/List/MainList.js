import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import './MainList.scss'

const MainList = () => {

    const {list} = useSelector((state) => state.data)
    
   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => {
        
   }

  return (
    <div className='mainList'>
        {
            list.map(el => (
                <div className='listItem'>{el.title}</div>
            ))
        }
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          
        <div>
        <input
          placeholder="Text Giriniz"
          type="text"
          {...register("title")}
        />
        <button type="submit">Ekle</button>
        </div>
      
      </form>
        </div>
    </div>
  )
}

export default MainList