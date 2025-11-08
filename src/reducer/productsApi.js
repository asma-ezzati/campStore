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
      query: (productId) => `product/${productId}`,
      providesTags: (result, error, { productId }) => [
        { type: "Product", productId },
      ],
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
      query: (initialproduct, productId) => ({
        url: `products/${productId}`,
        method: "PUT",
        body: initialproduct,
      }),
      invalidatesTags: (result, error, { productId }) => [
        { type: "Products", productId },
      ],
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
