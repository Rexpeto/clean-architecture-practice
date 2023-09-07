import { configureStore } from "@reduxjs/toolkit";
import { User } from "@/models";
import userReducer from "./slices/user.slice";

export interface AppStore {
  user: User;
}

export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
  },
});
