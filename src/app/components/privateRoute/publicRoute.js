"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { email } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {

    if (email) {
      router.push(`/`); // Redirect to login page if not authenticated
    }
  }, [router]);

  return <>{children}</>;
};

export default PublicRoute;
