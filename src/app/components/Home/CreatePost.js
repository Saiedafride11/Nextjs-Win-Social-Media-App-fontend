"use client";
import { useEffect, useState } from "react";

import { usePostPostsApiMutation } from "@/redux/service/api/postsApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import feelingsIcon from "../../../assets/feelings.png";
import profileImage from "../../../assets/me.jpg";
import photoIcon from "../../../assets/photos.png";
import videoIcon from "../../../assets/video.png";
import { ToastError, ToastSuccess } from "../utils/toast";

const createPostIcons = [
      { "icon": videoIcon, "title": "Live video" },
      { "icon": photoIcon, "title": "Photo/video" },
      { "icon": feelingsIcon, "title": "Feeling/activity" },
]

const CreatePost = () => {
      const { email } = useSelector((state) => state.user);
      const [postPostsApi, { isLoading, isSuccess, isError }] = usePostPostsApiMutation();
      
      const [createPostOpen, setCreatePostOpen] = useState(true);
      const [post, setPost] = useState('');
      const [image, setImage] = useState(null);

      const router = useRouter();

      const handleCreatePostOpen = () => {
            if(!email){
                  router.push("/login"); 
            }
            else{
                  setCreatePostOpen(!createPostOpen)
            }
      }

     

  // submit input data
  const handleLoginSubmit = (e) => {
      e.preventDefault();
      if (!image) {
          return;
      }

      
      const reaction = []
      const comment = []
      const formData = new FormData();
      formData.append('userName', "Saied Afride");
      formData.append('userPhoto', "https://lh3.googleusercontent.com/a/AAcHTtfWlew0XE77fyh6m46Bd9g3_vVleba8Ri7ryrIKv6H8qW8=s96-c");
      formData.append('post', post);
      formData.append('email', email);
      formData.append('reaction', reaction);
      formData.append('comment', comment);
      formData.append('image', image);

      // fetch('http://localhost:5000/posts', {
      //     method: 'POST',
      //     body: formData
      // })
      //     .then(res => res.json())
      //     .then(data => {
      //         if (data.insertedId) {
      //             setPost("");
      //             setImage(null);
      //             ToastSuccess("New Post Successful!");
      //             setCreatePostOpen(!createPostOpen);
      //         }
      //     })
      //     .catch(error => {
      //         console.error('Error:', error);
      //     });
      
      postPostsApi(formData);
  };

  useEffect(() => {
      if (!isLoading && isSuccess) {
        router.push("/");
        setPost("");
        setImage(null);
        setCreatePostOpen(!createPostOpen);
        ToastSuccess("New Post Successful!");
      }
      if (!isLoading && !isSuccess && isError) {
        ToastError("Sorry! something was wrong.");
      }
    }, [isLoading, isSuccess, isError]);


      return (
            <main className="w-full">
                  <section className="container px-2 lg:px-96 mx-auto py-4">
                        {
                              createPostOpen ?
                              <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80">
                                    <div className="flex items-center mb-4">
                                          <div className="rounded-full">
                                                <Image src={profileImage} width={50} height={50} alt="icon" className="rounded-full"/>
                                          </div>
                                          <button onClick={handleCreatePostOpen} className="rounded-full bg-[#f0f2f5] w-full text-gray-500 text-left pl-3 py-2 ml-2">What's on your mind, Saied?</button>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between mt-3 mb-2 px-5">
                                          {
                                                createPostIcons?.map( (postIcon, i) => (
                                                      <div className="flex items-center" key={i}>
                                                            <Image src={postIcon?.icon} width={25} height={25} alt="icon"/>
                                                            <h4 className="text-sm font-bold text-gray-500 ml-2">{postIcon?.title}</h4>
                                                      </div>
                                                ))
                                          }
                                    </div>
                              </div>
                              :
                              <div className="py-10 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80">
                                    <form onSubmit={handleLoginSubmit}>
                                          <div className="flex justify-between mb-2">
                                                <h4 className="text-lg text-gray-700">Create post</h4>
                                                <h4 onClick={() => setCreatePostOpen(!createPostOpen)} className="text-lg text-gray-700 cursor-pointer">✖</h4>
                                          </div>
                                          <textarea
                                                rows="5"
                                                name="post"
                                                required
                                                onChange={e => setPost(e.target.value)}
                                                className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                                placeholder="What's on your mind?"
                                                value={post}
                                          />
                                          <input
                                                accept="image/*"
                                                type="file"
                                                name="file"
                                                className="mb-1 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                                placeholder="Enter your title here"
                                                onChange={e => setImage(e.target.files[0])}
                                                required
                                          />
                                          <button
                                                type="submit"
                                                className="w-full bg-[#1b74e4] shadow-lg shadow-lime-200/10 text-white font-bold py-2 px-6 rounded"
                                                >
                                                Post
                                          </button>
                                    </form>
                              </div>
                        }
                  </section>
            </main>
      );
};

export default CreatePost;