"use client";

import CreatePost from "./components/Home/CreatePost";
import TimelinePosts from "./components/Home/TimelinePosts";



export default function Home() {
  return (
    <main>
      <CreatePost/>
      <TimelinePosts/>
    </main>
  );
}


