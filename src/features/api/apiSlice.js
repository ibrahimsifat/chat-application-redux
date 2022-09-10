import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_APP_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
export const {} = apiSlice;
