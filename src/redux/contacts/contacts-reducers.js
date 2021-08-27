import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";
import { dispatchFetchContacts } from "./contacts-operations";

const items = createReducer([], {
  [dispatchFetchContacts.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [dispatchFetchContacts.pending]: () => true,
  [dispatchFetchContacts.fulfilled]: () => false,
  [dispatchFetchContacts.rejected]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [dispatchFetchContacts.rejected]: (_, { payload }) => payload,
  [dispatchFetchContacts.pending]: null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
