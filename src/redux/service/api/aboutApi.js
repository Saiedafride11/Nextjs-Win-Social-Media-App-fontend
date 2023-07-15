import { apiSlice } from "./apiSlice";

const AboutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get about
    getAboutApi: builder.query({
      query: () => "/about",
      providesTags: ["about"],
    }),
    //update Post
    updateAboutApi: builder.mutation({
      query: ({ _id, formData }) => ({
        url: `/about/${_id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["about"],
    }),
  }),
});

export const { useGetAboutApiQuery,useUpdateAboutApiMutation } = AboutApi;
