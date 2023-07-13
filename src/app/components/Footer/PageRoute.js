import Link from "next/link";

const PageRoute = ({title, pageLinks}) => {
      return (
            <div>
                  <h1 className="text-[#1b74e4] text-[20px]">{title}</h1>
                  <ul className="mt-6">
                        {pageLinks?.map((item) => (
                              <li key={item.id} className="mb-2 text-white text-sm">
                                    <Link href={item.href} target="_blank">
                                          <span className="text-md hover:text-[#1b74e4] transition">
                                                {item?.title}
                                          </span>
                                    </Link>
                              </li>
                        ))}
                  </ul> 
            </div>
      );
};

export default PageRoute;