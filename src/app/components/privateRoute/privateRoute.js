"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { email } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!email) {
       router.push(`/login`);// Redirect to login page if not authenticated
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
