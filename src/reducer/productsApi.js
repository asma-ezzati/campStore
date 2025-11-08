import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, { id }) => [{ type: "Product", id }],
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
    editProducts: builder.mutation({
      query: (id, ...initialState) => ({
        url: `products/${id}`,
        method: "PUT",
        body: initialState,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Products", id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useDeleteProductMutation,
  useEditProductsMutation,
} = productsApi;
