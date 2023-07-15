"use client";
import { useUpdatePostsReactAddApiMutation, useUpdatePostsReactRemoveApiMutation } from "@/redux/service/api/postsApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillLike, AiOutlineComment, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ToastError, ToastSuccess } from "./toast";

const LikeCommentShare = ({_id, reactions}) => {
      const router = useRouter();
      const [toggleReact, setToggleReact] = useState(false);
      const [updatePostsReactAddApi, { isLoading, isSuccess, isError }] = useUpdatePostsReactAddApiMutation();
      const [updatePostsReactRemoveApi ] = useUpdatePostsReactRemoveApiMutation();
      const { email } = useSelector((state) => state.user);
      
      const handleReaction = () => {
            if(email){
                  const existUser = reactions?.find(reaction => reaction.user === email);
                  if(existUser){
                        updatePostsReactRemoveApi({_id, email});
                        setToggleReact(false);
                  }
                  else{
                        const data = { user: email }
                        updatePostsReactAddApi({_id, data});
                        setToggleReact(true);
                  }
            }
            else{
                  router.push("/login");
            }
      }
      useEffect(() => {
            if (!isLoading && isSuccess) {
              ToastSuccess("React Successful!");
            }
            if (!isLoading && !isSuccess && isError) {
              ToastError("Sorry! something was wrong.");
            }
      }, [isLoading, isSuccess, isError]);
      return (
            <div className="flex justify-between my-2 px-5">
                  <div className="flex items-center cursor-pointer" onClick={handleReaction}>
                        <h4 className="text-lg text-gray-500">
                              {     
                                    ( toggleReact | reactions?.some(reaction => reaction.user === email) ) ? 
                                    <span className="text-[#1b74e4]"><AiFillLike/></span>
                                    :
                                    <AiOutlineLike/>
                              }
                        </h4>
                        <h4 className={`text-sm font-bold ml-1 ${ (toggleReact | reactions?.some(reaction => reaction.user === email) ) ? "text-[#1b74e4]" : "text-gray-500"}`}>Like</h4>
                  </div>
                  <Link href={`/media/${_id}`}>
                        <div className="flex items-center cursor-pointer">
                              <h4 className="text-lg text-gray-500"><AiOutlineComment/></h4>
                              <h4 className="text-sm font-bold text-gray-500 ml-1">Comment</h4>
                        </div>
                  </Link>
                  <div className="flex items-center cursor-pointer">
                        <h4 className="text-lg text-gray-500"><AiOutlineShareAlt/></h4>
                        <h4 className="text-sm font-bold text-gray-500 ml-1">Share</h4>
                  </div>
            </div>
      );
};

export default LikeCommentShare;