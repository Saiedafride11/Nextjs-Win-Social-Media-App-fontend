"use client";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { currentUserProvider } from "../features/Auth/authSlice";
import { store } from "./store";

const Providers = ({ children }) => {
  
  useEffect( () => {
    currentUserProvider()
  }, [])

  return (
    <main>
      <Provider store={store}> 
        <Toaster position="top-center" reverseOrder={false} />
        <section className="sticky top-0 z-50">
          <Header />
        </section>
        <section>{children}</section>
        <section>
          <Footer />
        </section>
      </Provider>
    </main>
  );
};

export default Providers;
