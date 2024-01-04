import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bicycleApi = createApi({
  reducerPath: 'bicycleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://keenethics-test-server.onrender.com/api/',
  }),
  endpoints: builder => ({
    getBicycle: builder.query({
      query(params) {
        return {
          url: `bicycle/`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetBicycleQuery } = bicycleApi;
