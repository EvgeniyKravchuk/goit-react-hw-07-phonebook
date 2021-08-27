import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducers";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
