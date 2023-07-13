import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
      return (
            <div className="flex flex-row items-end">
                  <span className="text-white text-[20px] cursor-pointer p-1 rounded-full hover:bg-black transition">
                        <Link href="https://www.facebook.com/momagicbd" target="_blank">
                              <FaFacebookF />
                        </Link>
                  </span>
                  <span className="ml-2 text-white text-[20px] cursor-pointer p-1 rounded-full hover:bg-black transition">
                        <Link href="https://www.twitter.com/momagicbd" target="_blank">
                              <AiOutlineTwitter />
                        </Link>
                  </span>
                  <span className="ml-2 text-white text-[20px] cursor-pointer p-1 rounded-full hover:bg-black transition">
                        <Link href="https://www.linkedin.com/company/mmbd/" target="_blank">
                              <FaLinkedinIn />
                        </Link>
                  </span>
                  <span className="ml-2 text-white text-[20px] cursor-pointer p-1 rounded-full hover:bg-black transition">
                        <Link href="https://www.instagram.com/momagicbd" target="_blank">
                              <FaInstagram />
                        </Link>
                  </span>
            </div>
      );
};

export default SocialIcons;