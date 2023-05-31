import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import './MainList.scss'
import { addList } from '../../redux/dataSlice';


const MainList = () => {
 
    const {list} = useSelector((state) => state.data)
    const dispatch = useDispatch()
   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => {
      dispatch(addList(data))
      
   }

  return (
    <div className='mainList'>
        {
            list.map(el => (
                <div className='listItem'>
                  <h3>{el.title}</h3>
                </div>
            ))
        }
        <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          
        <div className='addList' >
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