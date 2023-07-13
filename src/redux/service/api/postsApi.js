import { apiSlice } from "./apiSlice";

const PostsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all Posts
    getPostsApi: builder.query({
      query: () => "/posts",
      providesTags: ["posts"],
    }),
    // get single Post
    getPostApi: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["posts"],
    }),
    // post Posts
    postPostsApi: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsApiQuery, useGetPostApiQuery, usePostPostsApiMutation } = PostsApi;
