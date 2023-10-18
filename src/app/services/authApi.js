import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authentication",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GATSBY_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints(build) {
    return {
      loginUser: build.mutation({
        query(body) {
          return {
            url: "/login",
            method: "POST",
            body,
          };
        },
      }),

      logoutUser: build.mutation({
        query(body) {
          return {
            url: "/logout",
            method: "POST",
            body,
          };
        },
      }),

      isLoggedIn: build.mutation({
        query(body) {
          return {
            url: "/auth/check",
            method: "POST",
            body,
          };
        },
      }),
    };
  },
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useIsLoggedInMutation,
} = authApi;
