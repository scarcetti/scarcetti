import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GATSBY_API_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token;
      if (token) {
        //console.log('token', token);
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],

  endpoints: (builder) => ({
    addUser: builder.mutation({
      query(body) {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),

    verifyEmail: builder.mutation({
      query(body) {
        return {
          url: `/verify/email`,
          method: "POST",
          body,
        };
      },
    }),

    sendVerification: builder.mutation({
      query(body) {
        return {
          url: `/verify/email/send-verification-code`,
          method: "POST",
          body,
        };
      },
    }),

    updateProfilePicture: builder.mutation({
      query(body) {
        return {
          url: `/profile/upload/profile-picture`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["User"],
      transformResponse: (response) => response,
    }),

    changePassword: builder.mutation({
      query(body) {
        return {
          url: `/change-password`,
          method: "POST",
          body,
        };
      },
      transformResponse: (response) => response,
    }),

    updateProfileDetail: builder.mutation({
      query(body) {
        return {
          url: `/profile/update`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["User"],
      transformResponse: (response) => response,
    }),

    getUser: builder.query({
      query() {
        return {
          url: `/profile`,
          method: "GET",
        };
      },
      providesTags: ["User"],
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
  useUpdateProfilePictureMutation,
  useUpdateProfileDetailMutation,
  useChangePasswordMutation,

  useVerifyEmailMutation,
  useSendVerificationMutation,
} = userApi;
