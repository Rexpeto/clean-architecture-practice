import { configureStore } from "@reduxjs/toolkit";
import { User } from "@/models";
import userSlice from "./slices/user.slice";

export interface AppStore {
  user: User;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
  },
});
