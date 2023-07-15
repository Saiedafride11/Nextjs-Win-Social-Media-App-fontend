"use client";
import PrivateRoute from "@/app/components/privateRoute/privateRoute";
import Error from "@/app/components/utils/Error";
import TimelinePost from "@/app/components/utils/TimelinePost";
import { useGetPostApiQuery } from "@/redux/service/api/postsApi";

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
          content = <TimelinePost timelinePost={singlePost} page="post-details"/>  ;
      }
      return (
            <PrivateRoute>
                  <main className="w-full">
                        <section className="container px-2 lg:px-96 mx-auto pt-4">
                              {content}
                        </section>
                  </main>
            </PrivateRoute>
      );
};

export default MediaDetails;
