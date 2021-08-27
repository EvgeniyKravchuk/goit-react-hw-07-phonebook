import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../../API/api-operations";

export const dispatchFetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const dispatchFetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());

//   try {
//     const contacts = await fetchContacts();

//     dispatch(fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };
