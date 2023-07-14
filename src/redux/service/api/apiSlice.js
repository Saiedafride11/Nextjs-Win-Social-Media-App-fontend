// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_BASE_URL,
    baseUrl: "http://localhost:5000",
    // baseUrl: "https://nextjs-win-social-media-app-backend.vercel.app",
  }),
  tagTypes: ["posts", "about"],
  endpoints: (builder) => ({}),
});
