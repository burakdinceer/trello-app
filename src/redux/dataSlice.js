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
       const obj = {
        card:[],
       id:state.list.length+1,
       title:action.payload.title
       }
       state.list = [...state.list,obj]
     }
    }
})

export const {addList} = dataSlice.actions
export default dataSlice.reducer