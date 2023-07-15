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
    //update Post Comment
    updatePostsCommentApi: builder.mutation({
      query: ({ _id, data }) => ({
        url: `/posts/comments/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["posts", "comments"],
    }),
    //update Post React Add
    updatePostsReactAddApi: builder.mutation({
      query: ({ _id, data }) => ({
        url: `/posts/reaction/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["posts", "reactions"],
    }),
    //update Post React Cancel
    updatePostsReactRemoveApi: builder.mutation({
      query: ({ _id, email }) => ({
        url: `/posts/reaction/${_id}/${email}`,
        method: "PATCH",
      }),
      invalidatesTags: ["posts", "reactions"],
    }),
  }),
});

export const { useGetPostsApiQuery, useGetPostApiQuery, usePostPostsApiMutation, useUpdatePostsCommentApiMutation, useUpdatePostsReactAddApiMutation, useUpdatePostsReactRemoveApiMutation} = PostsApi;
