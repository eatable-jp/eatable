import { createSlice  } from "@reduxjs/toolkit";


const initialState = {
    user_id: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, {payload}) => {
          state.user_id = payload;
          localStorage.setItem("userId", state.user_id);
          sessionStorage.setItem("userId", state.user_id);
        },
    resetUser: (state ) => {
        state.user_id = null;
        localStorage.removeItem("userId");
        sessionStorage.removeItem("userId");
      },
    
    },
});

const { reducer, actions } = userSlice;

export const { setUser, resetUser } = actions;

export default reducer;
