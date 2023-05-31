import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list : [
        {card:[],id:1,title:'Yapılacaklar'},
        {card:[],id:2,title:'Planlananlar'}
    ]

};

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
     addList:(state,action)=>{
        state.list = [...state.list,action.payload]
     }
    }
})

export const {addList} = dataSlice.actions
export default dataSlice.reducer