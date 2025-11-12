import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: (result) =>
        result
          ? [
              ...result.map((p) => ({ type: "Product", id: p.id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, { id }) => [{ type: "Product", id }],
    }),
    getCategories: builder.query({
      query: () => `category`,
      providesTags: [{ type: "Categories", id: "LIST" }],
    }),
    getCategoryById: builder.query({
      query: (id) => `category/${id}`,
      providesTags: (result, error, { id }) => [{ type: "Categories", id }],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Products", id: "LIST" },
        { type: "Product", id: arg },
      ],
    }),
    editProducts: builder.mutation({
      query: (payload) => {
        const { id, ...body } = payload;
        return {
          url: `products/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: "Product", id: arg.id },
        { type: "Products", id: "LIST" },
      ],
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: `products`,
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useDeleteProductMutation,
  useEditProductsMutation,
  useAddProductMutation,
} = productsApi;
