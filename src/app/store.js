import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import conversationsReducer from "../features/conversations/conversationsSlices";

import authSliceReducer from "../features/auth/authSlice";
import messagesSliceReducer from "../features/messages/messagesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    conversation: conversationsReducer,
    messages: messagesSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefualtMiddleWares) =>
    getDefualtMiddleWares().concat(apiSlice.middleware),
});
