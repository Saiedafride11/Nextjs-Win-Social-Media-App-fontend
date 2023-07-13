"use client";
import PrivateRoute from "@/app/components/privateRoute/privateRoute";
import Error from "@/app/components/utils/Error";
import { useGetPostApiQuery } from "@/redux/service/api/postsApi";
import SinglePost from "./SinglePost";

const MediaDetails = ({params}) => {
      const { isError, isLoading, isSuccess, data:singlePost } = useGetPostApiQuery(params.id);

      let content = null;
      if (isLoading) {
          content = <p className="h-screen">Loading...</p>
      }
  
      if (!isLoading && isError) {
          content = <Error message="There was an error" />;
      }
  
      if (!isLoading && !isError && singlePost?.length === 0) {
          content = <Error message="No post found!" />;
      }
  
      if (!isLoading && !isError && singlePost) {
          content = <SinglePost singlePost={singlePost}/>;
      }
      return (
            <PrivateRoute>
                  <main className="w-full">
                        <section className="container px-2 lg:px-96 mx-auto pt-4">
                              <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80 mb-3">
                                    {content}
                              </div>
                        </section>
                  </main>
            </PrivateRoute>
      );
};

export default MediaDetails;
