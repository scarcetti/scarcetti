import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  firstname: null,
  lastname: null,
  email: null,
  image: null,
  phone: null,
  address: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setPersonalDetails: (
      state,
      { payload: { id, firstname, lastname, email, image, phone, address } }
    ) => {
      state.id = id;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;
      state.image = image;
      state.phone = phone;
      state.address = address;
    },
    resetPersonalDetails: (state) => {
      state.id = null;
      state.firstname = null;
      state.lastname = null;
      state.email = null;
      state.image = null;
      state.phone = null;
      state.address = null;
    },
  },
});

export const { setPersonalDetails, resetPersonalDetails } = userSlice.actions;

export default userSlice.reducer;
