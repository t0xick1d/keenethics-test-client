import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bicycleApi = createApi({
  reducerPath: 'bicycleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://keenethics-test-server.onrender.com/api/',
  }),
  endpoints: builder => ({
    getBicycle: builder.query({
      query: () => `bicycle/`,
      method: 'GET',
      providesTags: ['Bicycle'],
    }),

    createBicycle: builder.mutation({
      query: payload => ({
        url: 'bicycle/',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Bicycle'],
    }),
    deleteBicycle: builder.mutation({
      query: id => ({
        url: `bicycle/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Bicycle'],
    }),
  }),
});

export const {
  useGetBicycleQuery,
  useCreateBicycleMutation,
  useDeleteBicycleMutation,
} = bicycleApi;
