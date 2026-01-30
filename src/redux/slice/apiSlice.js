import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-spring-boot-apis.onrender.com/api/v1' }),
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: '/public/contact',
        method: 'POST',
        body: data,
      }),
    }),
    postSubscriber: builder.mutation({
      query: (data) => ({
        url: '/public/news-letter',
        method: 'POST',
        body: data
      })
    })
  }),
});

export const { useCreateContactMutation, usePostSubscriberMutation } = apiSlice;
