"use client";
import { useUpdateAboutApiMutation } from "@/redux/service/api/aboutApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastError, ToastSuccess } from "../components/utils/toast";

const AboutContent = ({about}) => {
      const router = useRouter();
      const { _id } = about[0];
      const [updateAboutApi, { isLoading, isSuccess, isError }] = useUpdateAboutApiMutation();
      const [editOpen, setEditOpen] = useState(true);
      const [formData, setFormData] = useState({
            name: about[0]?.name,
            email: about[0]?.email,
            university: about[0]?.university,
            address: about[0]?.address
      });

      const handleLoginSubmit = (e) => {
            e.preventDefault();
            updateAboutApi({_id, formData});
            setEditOpen(!editOpen);
      }

      useEffect(() => {
            if (!isLoading && isSuccess) {
              router.push("/");
              setEditOpen(!editOpen);
              ToastSuccess("About Update Successful!");
            }
            if (!isLoading && !isSuccess && isError) {
              ToastError("Sorry! something was wrong.");
            }
      }, [isLoading, isSuccess, isError]);

      return (
            <div>
                  {
                        editOpen ? 
                        <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80 mb-3">
                              <div className="flex justify-between mb-10">
                                    <h4 className="text-xl text-gray-700">About Section</h4>
                                    <h4 className="text-lg text-gray-700 cursor-pointer" onClick={() => setEditOpen(!editOpen)}>Edit</h4>
                              </div>
                              <div className="flex items-center">
                                    <h4 className="text-lg font-bold text-gray-500 w-[100px]">Name :</h4>
                                    <h4 className="text-lg text-gray-500">{formData?.name}</h4>
                              </div>
                              <div className="flex items-center">
                                    <h4 className="text-lg font-bold text-gray-500 w-[100px]">Email :</h4>
                                    <h4 className="text-lg text-gray-500">{formData?.email}</h4>
                              </div>
                              <div className="flex items-center">
                                    <h4 className="text-lg font-bold text-gray-500 w-[100px]">University :</h4>
                                    <h4 className="text-lg text-gray-500">{formData?.university}</h4>
                              </div>
                              <div className="flex items-center">
                                    <h4 className="text-lg font-bold text-gray-500 w-[100px]">Address :</h4>
                                    <h4 className="text-lg text-gray-500">{formData?.address}</h4>
                              </div>
                        </div>
                        :
                        <div className="py-5 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80 mb-3">
                              <div className="flex justify-between mb-2">
                                    <h4 className="text-lg text-gray-700">Edit About</h4>
                                    <h4 onClick={() => setEditOpen(!editOpen)} className="text-lg text-gray-700 cursor-pointer">✖</h4>
                              </div>
                              <form onSubmit={handleLoginSubmit}>
                                    <h4 className="text-sm text-gray-700 mb-2">Your Name</h4>
                                    <input
                                          type="text"
                                          required
                                          name="name"
                                          value={formData?.name}
                                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                          placeholder="Enter your name here"
                                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] focus:border-black border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                    />
                                    <h4 className="text-sm text-gray-700 mb-2">Your Email</h4>
                                    <input
                                          type="email"
                                          required
                                          name="email"
                                          value={formData?.email}
                                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                          placeholder="Enter your email here"
                                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] focus:border-black border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                    />
                                    <h4 className="text-sm text-gray-700 mb-2">Your University</h4>
                                    <input
                                          type="text"
                                          required
                                          name="university"
                                          value={formData?.university}
                                          onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                                          placeholder="Enter your university here"
                                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] focus:border-black border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                    />
                                    <h4 className="text-sm text-gray-700 mb-2">Your Address</h4>
                                    <input
                                          type="text"
                                          required
                                          name="address"
                                          value={formData?.address}
                                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                          placeholder="Enter your address here"
                                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] focus:border-black border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                    />
                  
                  
                                    <button
                                          type="submit"
                                          className="w-full bg-[#1b74e4] shadow-lg shadow-lime-200/10 text-white font-bold py-2 px-6 rounded"
                                    >
                                    Save
                                    </button>
                              </form>
                        </div>
                  }
            </div>
      );
};

export default AboutContent;