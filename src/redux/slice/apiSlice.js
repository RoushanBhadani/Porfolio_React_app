import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-api-tau-liard.vercel.app/' }),
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: '/api/users',
        method: 'POST',
        body: data,
      }),
    }),
    postSubscriber: builder.mutation({
      query: (data) => ({
        url: '/api/subscriberUser',
        method: 'POST',
        body: data
      })
    })
  }),
});

export const { useCreateContactMutation, usePostSubscriberMutation } = apiSlice;
