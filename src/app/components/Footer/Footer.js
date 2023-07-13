import Image from "next/image";
import Link from "next/link";
import cart1 from "../../../assets/cart/01.jpg";
import cart2 from "../../../assets/cart/02.jpg";
import cart3 from "../../../assets/cart/03.jpg";
import cart4 from "../../../assets/cart/04.jpg";
import logo from "../../../assets/logo.png";
import SocialIcons from "../utils/SocialIcons";
import PageRoute from "./PageRoute";

const Footer = () => {
      const trendingLinks = [
            { id: 1, title: "Installments", href: "installments" },
            { id: 2, title: "Electronics", href: "electronics" },
            { id: 3, title: "Grocery", href: "grocery" },
            { id: 4, title: "Health & Beauty", href: "health_beauty" },
            { id: 5, title: "Home Appliances", href: "home_appliances" },
            { id: 6, title: "Mobile Accessories", href: "mobile_appliances" }
      ];
      const informationLinks = [
            { id: 1, title: "About Us", href: "about" },
            { id: 2, title: "Contact Us", href: "contact" },
            { id: 3, title: "FAQs", href: "faqs" },
            { id: 4, title: "Shipping & Return", href: "shipping" },
            { id: 5, title: "Privacy policy", href: "privacy" },
            { id: 6, title: "Terms & Conditions", href: "terms" }
      ];
      const customerCareLinks = [
            { id: 1, title: "My Account", href: "my_account" },
            { id: 2, title: "Track Your Order", href: "track_order" },
            { id: 3, title: "Recently Viewed", href: "recent_view" },
            { id: 4, title: "Wishlist", href: "wishlist" },
            { id: 5, title: "Compare", href: "compare" },
            { id: 6, title: "Become a Vendor", href: "vendor" }
      ];

      const cartImages = [cart1, cart2, cart3, cart4]
      return (
            <>
                  <section className="bg-[#393939]">
                        <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
                              <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-center sm:text-left">
                                    <div>
                                          <Link href="/"> 
                                                <div className="cursor-pointer mb-5 flex justify-center sm:block">
                                                      <Image src={logo} width={140} height={100} alt="logo-image" />
                                                </div>
                                          </Link>
                                          <span className="text-[#1b74e4] text-base block mb-3">
                                                Got questions? Call us 24/7!
                                          </span>
                                          <span className="text-white text-sm block mb-3">
                                                <Link href="tel:+03 111 666 144" target="_blank">
                                                      03 111 666 144
                                                </Link>
                                                <br />
                                                <Link href="tel:+0317 1777015" target="_blank">
                                                      0317 1777015
                                                </Link>
                                          </span>
                                          <span className="text-[#1b74e4] text-base block">
                                                Contact info
                                          </span>
                                          <span className="text-white text-sm block mb-3">
                                                <Link href="mailto:info@winstore.pk" target="_blank">
                                                      info@winstore.pk
                                                </Link>
                                          </span>
                                          {/* social Media Icons */}
                                          <div className="flex justify-center sm:block">
                                                <SocialIcons/>
                                          </div>
                                    </div>
                                    <PageRoute pageLinks={trendingLinks} title="Trending"/>
                                    <PageRoute pageLinks={informationLinks} title="Information"/>
                                    <PageRoute pageLinks={customerCareLinks} title="Customer Care"/>
                              </div>
                              <div className="flex flex-wrap justify-center lg:justify-end items-center mt-5">
                                    {
                                          cartImages?.map((img, i) => <Image key={i} src={img} width={140} height={100} alt="logo-image" className="mb-6 mx-3 lg:ml-3 lg:mr-0"/>)
                                    }
                              </div>
                        </div>
                  </section>

                  <section className="bg-[#161616]">
                        <div className="px-2 md:px-10 lg:px-20 container py-6 mx-auto">
                              <h1 className="text-[17px] text-white tracking-[0.8px] text-center sm:text-left">
                                    © 2021 Win. All Rights Reserved.
                              </h1>
                        </div>
                  </section>
            </>
      );
};

export default Footer;