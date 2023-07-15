import { useUpdatePostsCommentApiMutation } from '@/redux/service/api/postsApi';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import likeSvg from "../../../assets/like.svg";
import profileImage from "../../../assets/me.jpg";
import LikeCommentShare from './LikeCommentShare';
import { ToastError, ToastSuccess } from './toast';

const TimelinePost = ({timelinePost, page}) => {
      const router = useRouter();
      const {userPhoto, userName, post, image, _id, comments, reactions} = timelinePost;
      const [updatePostsCommentApi, { isLoading, isSuccess, isError }] = useUpdatePostsCommentApiMutation();
      const { email } = useSelector((state) => state.user);
      const [comment, setComment ] = useState("");
      
      const handleCommentKeypress = e => {
            if (e.key === "Enter") {
                  if(email){
                        const data = {
                              user: email,
                              comment: comment
                        }
                        updatePostsCommentApi({_id, data});
                        setComment("");
                  }
                  else{
                        router.push("/login");
                  }
            }
      };
      useEffect(() => {
            if (!isLoading && isSuccess) {
              if(page !== "post-details"){
                  router.push(`/media/${_id}`);
              }
              setComment("");
              ToastSuccess("Comment Successful!");
            }
            if (!isLoading && !isSuccess && isError) {
              ToastError("Sorry! something was wrong.");
            }
      }, [isLoading, isSuccess, isError]);

      return (
            <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80 mb-3">
                  <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                              <div className="rounded-full">
                                    <Image src={userPhoto} width={40} height={40} alt="icon" className="rounded-full"/>
                              </div>
                              <div>
                                    <h4 className="text-lg text-gray-700 ml-2">{userName}</h4>
                                    <h4 className="text-sm text-gray-500 mx-2 mt-[-5px]">12h .</h4>
                              </div>
                        </div>
                        <div className="flex items-center">
                              <h4 className="text-lg text-gray-700 font-bold cursor-pointer mt-[-10px]">...</h4>
                              <h4 className="text-lg text-gray-700 cursor-pointer ml-5">✖</h4>
                        </div>
                  </div>
                  <div>
                        <p className="text-sm text-gray-500 w-full mb-2">
                              { ( post?.length < 250 | page === "post-details") ? post : `${post?.slice(0, 250)}  ...  `}
                              {
                                page !== "post-details" &&   
                                <Link href={`/media/${_id}`} className="font-bold"> See details</Link>
                              }
                        </p>
                        <Image src={`data:image/png;base64,${image}`} width={2000} height={2000} alt="image" className="w-full"/>
                  </div>
                  <div className="flex justify-between my-2">
                        <div className="flex">
                              <Image src={likeSvg} width={20} height={20} alt="icon"/>
                              <p className="text-sm text-gray-500 ml-1">{reactions?.length} Peoples</p>
                        </div>
                        <p className="text-sm text-gray-500">{comments?.length} comments</p>
                  </div>

                  <hr />

                  <LikeCommentShare _id={_id} reactions={reactions}/>
                  
                  <hr />

                  <div className="flex my-3">
                        <div className="rounded-full">
                              <Image src={profileImage} width={40} height={40} alt="icon" className="rounded-full"/>
                        </div>
                        <input
                              required
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              onKeyPress={handleCommentKeypress}
                              className="ml-2 py-2 px-4 bg-[#f0f2f5] block w-full outline-none border-none rounded-full text-sm text-gray-500"
                              placeholder="Write a comment..."
                        />
                  </div>
                  {
                        page === "post-details" && 
                        <>
                              {
                                    comments?.slice().reverse().map((comment, i) => (
                                          <div key={i} className="mt-1">
                                                <h4 className="text-lg text-gray-700">{comment.user}</h4>
                                                <p className="text-sm text-gray-500 w-full mb-1 ml-5">{comment.comment}</p>
                                                <hr />
                                          </div>
                                    ))
                              }
                        </>
                  }
            </div>
      );
};

export default TimelinePost;