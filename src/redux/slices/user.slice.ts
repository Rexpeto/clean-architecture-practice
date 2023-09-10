import { createSlice } from "@reduxjs/toolkit";
import { EmptyMortyState } from "@/models";

export const userSlice = createSlice({
  name: "user",
  initialState: EmptyMortyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: () => {
      return EmptyMortyState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
