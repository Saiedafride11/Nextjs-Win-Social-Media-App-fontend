import Image from "next/image";

const Preloader = () => {
  return (
    <>
      <main className="w-screen h-screen bg-slate-50 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-72 h-52 md:w-80 md:h-56 lg:w-96 lg:h-80 relative">
          <Image
            src="https://i.ibb.co/4tJgMQM/loding.gif"
            alt="preloader_Image"
            fill={true}
          />
        </div>
      </main>
    </>
  );
};

export default Preloader;
