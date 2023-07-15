"use client";
import { useGetPostsApiQuery } from "@/redux/service/api/postsApi";
import TimelinePost from "../utils/TimelinePost";

const HomePosts = () => {
      const { isError, isLoading, isSuccess, data:posts } = useGetPostsApiQuery();

      let content;
      if (isLoading) {
          content = <p className="h-screen">Loading...</p>
      }
  
      if (!isLoading && isError) {
          content = <Error message="There was an error" />;
      }
  
      if (!isLoading && !isError && posts?.length === 0) {
          content = <Error message="No post found!" />;
      }
  
      if (!isLoading && !isError && posts?.length > 0) {
        const topReactionPosts = posts?.slice(0, 3)?.sort((a, b) => b.reactions.length - a.reactions.length)
        content = topReactionPosts?.map(post => <TimelinePost timelinePost={post} key={post._id}/>);
      }

      return (
            <main className="w-full">
                  <section className="container px-2 lg:px-96 mx-auto pb-2">
                        {content}
                  </section>
            </main>
      );
};

export default HomePosts;