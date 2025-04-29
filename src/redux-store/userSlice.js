import { createSlice } from "@reduxjs/toolkit";
 
const userSlice = createSlice({
    name : "userData",
    initialState: null,
    reducers:{ 
        addUser: (state,action) => {
            return action.payload // this action.playload will become the state.
        },
        removeUser: () => {
            return null  // this will remove the user means (signout user)
        }
    } 
})

export default userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions;  

