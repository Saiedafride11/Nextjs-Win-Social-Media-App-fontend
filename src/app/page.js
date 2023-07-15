"use client";

import CreatePost from "./components/Home/CreatePost";
import HomePosts from "./components/Home/HomePosts";



export default function Home() {
  return (
    <main>
      <CreatePost/>
      <HomePosts/>
    </main>
  );
}


