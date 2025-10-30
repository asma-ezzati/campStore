import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "htttp://localhost:9000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
