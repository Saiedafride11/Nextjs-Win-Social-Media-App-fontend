"use client";

import { googleSignInUser, signInUser } from "@/redux/features/Auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublicRoute from "../components/privateRoute/publicRoute";

const Login = () => {
  // get user
  const { isLoading, email:authEmail} = useSelector((state) => state.user);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // submit form data
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (authEmail) {
      router.push("/");
    }
  }, [router, authEmail]);

  return (
    <>
      <PublicRoute>
        {" "}
        <main
          className={`w-full flex flex-col justify-center items-center login_page`}
        >
          <div className="container text-gray-600 px-5 py-24 md:py-40">
            <form
              onSubmit={handleLoginSubmit}
              className="w-full lg:w-2/6 md:w-1/2 bg-gray-100 drop-shadow-md shadow-gray-300/50 bg-opacity-20 rounded-lg p-8 mx-auto flex flex-col mt-10 md:mt-0"
            >
              <h2 className="text-gray-100 text-lg font-medium title-font mb-5">
                Sign In
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-200"
                >
                  User Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent text-white rounded border border-gray-300 focus:border-[#1b74e4] focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-200"
                >
                  User Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full bg-transparent text-white rounded border border-gray-300 focus:border-[#1b74e4] focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="text-white bg-[#1b74e4] border-0 py-2 px-8 focus:outline-none hover:bg-[#2788ff] rounded text-lg"
              >
                Sign In
              </button>

              <p className="text-lg text-center text-white">------------- or -------------</p>
              
              <button
                onClick={() => dispatch(googleSignInUser())}
                className="text-white bg-[#1b74e4] border-0 py-2 px-8 focus:outline-none hover:bg-[#2788ff] rounded text-lg"
              >
                Google Sign in
              </button>
              <div className="mt-6 flex justify-between items-center px-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 cursor-pointer"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-200"
                  >
                    You agree to our term and policy
                  </label>
                </div>
                <Link href="/register">
                  <span className="text-sm text-gray-200 ">
                    Create new Account!
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </PublicRoute>
    </>
  );
};

export default Login;
