import Image from 'next/image';
import Link from 'next/link';
import likeSvg from "../../../assets/like.svg";
import profileImage from "../../../assets/me.jpg";
import LikeCommentShare from './LikeCommentShare';

const TimelinePost = ({timelinePost}) => {
      const {userPhoto, userName, post, image, _id} = timelinePost;

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
                              {post?.length < 250 ? post : `${post?.slice(0, 250)}  ...  `}
                              <Link href={`/media/${_id}`} className="font-bold">  See details</Link>
                        </p>
                        <Image src={`data:image/png;base64,${image}`} width={2000} height={2000} alt="image" className="w-full"/>
                  </div>
                  <div className="flex justify-between my-2">
                        <div className="flex">
                              <Image src={likeSvg} width={20} height={20} alt="icon"/>
                              <p className="text-sm text-gray-500 ml-1">Akash Ray, Abdul Gaffar and 39 others</p>
                        </div>
                        <p className="text-sm text-gray-500">12 comments</p>
                  </div>

                  <hr />

                  <LikeCommentShare/>
                  
                  <hr />

                  <div className="flex my-3">
                        <div className="rounded-full">
                              <Image src={profileImage} width={40} height={40} alt="icon" className="rounded-full"/>
                        </div>
                        <button className="rounded-full bg-[#f0f2f5] w-full text-gray-500 text-left pl-3 ml-2">Write a comment...</button>
                  </div>
            </div>
      );
};

export default TimelinePost;