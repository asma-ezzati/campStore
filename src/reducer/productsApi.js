import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ["Products"],
    }),
    getCategories: builder.query({
      query: () => `category`,
      providesTags: ["Categories"],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `products/${productId}`,
        method: "DELETE",
        body: productId,
      }),
      invalidatesTags: (result, error, { productId }) => [
        { type: "Products", productId },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useDeleteProductMutation,
} = productsApi;
