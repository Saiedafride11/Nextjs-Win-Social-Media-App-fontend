import { AiOutlineComment, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";

const LikeCommentShare = () => {
      const likeCommentShare = [
            { "icon": <AiOutlineLike/> , "title": "Like" },
            { "icon": <AiOutlineComment/>, "title": "Comment" },
            { "icon": <AiOutlineShareAlt/>, "title": "Share" },
      ]
      return (
            <div className="flex justify-between my-2 px-5">
                  {
                        likeCommentShare?.map( (item, i) => (
                              <div className="flex items-center" key={i}>
                                    <h4 className="text-lg text-gray-500">{item?.icon}</h4>
                                    <h4 className="text-sm font-bold text-gray-500 ml-1">{item?.title}</h4>
                              </div>
                        ))
                  }
            </div>
      );
};

export default LikeCommentShare;