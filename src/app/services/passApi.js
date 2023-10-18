import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const passApi = createApi({
  reducerPath: "passApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GATSBY_API_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().reset.token;
      if (token) {
        //console.log('token', token);
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],

  endpoints: (builder) => ({
    forgotPass: builder.mutation({
      query(body) {
        return {
          url: `/forgot-password`,
          method: "POST",
          body,
        };
      },
    }),

    verifyForgotPass: builder.mutation({
      query(body) {
        return {
          url: `/forgot-password/verify/password-reset-request`,
          method: "POST",
          body,
        };
      },
    }),

    resetPass: builder.mutation({
      query(body) {
        return {
          url: `/forgot-password/reset-password`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useForgotPassMutation,
  useVerifyForgotPassMutation,
  useResetPassMutation,
} = passApi;
