import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    taggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuth={isAutenticated:false}
const authenticationSlice=createSlice({
  name:"auth",
  initialAuth,
  reducers:{
    login(state){
      state.isAutenticated=true;
    },
    logOut(state){
      state.isAutenticated=false;
    }
  }

})
const store = configureStore({ 
  reducer:{counter: counterSlice.reducer , auth:authenticationSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions=authenticationSlice.actions;
export default store;
