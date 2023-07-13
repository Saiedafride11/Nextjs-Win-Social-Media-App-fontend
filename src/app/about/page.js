"use client";
import { useGetAboutApiQuery } from "@/redux/service/api/aboutApi";
import AboutContent from "./AboutContent";

const About = () => {
      const { isError, isLoading, isSuccess, data:about } = useGetAboutApiQuery();

      let content = null;
      if (isLoading) {
          content = <p className="h-screen">Loading...</p>
      }
  
      if (!isLoading && isError) {
          content = <Error message="There was an error" />;
      }
  
      if (!isLoading && !isError && about?.length === 0) {
          content = <Error message="No about found!" />;
      }
  
      if (!isLoading && !isError && about?.length > 0) {
          content = <AboutContent about={about} />;
      }

      return (
            <>    
                 <main className="w-full h-screen">
                        <section className="container px-2 lg:px-96 mx-auto pt-4">
                              {content}
                        </section>
                  </main>
            </>
      );
};

export default About;