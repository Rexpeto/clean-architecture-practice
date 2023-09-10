import { configureStore } from "@reduxjs/toolkit";
import { MortyState } from "@/models";
import userReducer from "./slices/user.slice";

export interface AppStore {
  user: MortyState;
}

export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
  },
});
