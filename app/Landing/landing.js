import React from "react";
import "../globals.css";

function Landing() {
  return (
    <>
      <main className="w-[100vw] h-[100vh] bg-[#845EC2]  pt-24 overflow-x-hidden relative">
        <nav className="fixed top-5 left-[54vh]  rounded-full w-[40vw] h-14 bg-slate-500/20 text-white text-base text-center flex flex-row  z-50">
          <div className="basis-1/5  rounded-tl-full rounded-bl-full rounded-r-full bg-[#00C9A7] p-2 pt-4">
            Sanjan.
          </div>
          <div className={`basis-1/5  rounded-full p-2 pt-4`}>Home</div>
          <div className={`basis-1/5  rounded-full p-2 pt-4`}>About</div>
          <div className={`basis-1/5  rounded-full p-2 pt-4`}>Photos</div>
          <div className={`basis-1/5  rounded-full p-2 pt-4`}>Contact</div>
        </nav>
        <div className='absolute w-60 h-60 bg-[#D5CABD]
         z-[0] blur-xl top-[40vh] rounded-full translate-x-[20vh] translate-y-5'></div>
            <div className='absolute w-40 h-40 bg-[#BEA6A0]  z-[0]
             translate-y-[20vh]  translate-x-[35vh] blur-xl
             rounded-full'></div>
        
        <div
          className="w-[100vw] h-[80vh] z-50  mx-14 bg-[#FBEAFF]/20 shadow-xl  backdrop-blur-sm rounded-tl-full rounded-bl-full  
            flex flex-row
            "
        >
          <div className="basis-1/2 z-50 rounded-tl-full rounded-bl-full">
            <p className="font-sans text-white/50 mt-44 ml-48 px-1">Hello</p>
            <p className="m-48 mb-0 mt-0 font-1 text-8xl text-white ">
              Sanjan <br />
              Athyady
            </p>
            <p className="font-sans text-white/50 mt-5 font-semibold text-nowrap ml-48 px-0">
              Im <span className="text-white">Engineering Stud</span> And This is my Portfolio.
            </p>
          </div>

          <div className="w-[40vw] mr-14 -ml-16 my-10  rounded-full p-8 -10 pt-5">
            <img src="/profile.JPG" alt="" className="rounded-full w-[44vw] ml-" />
          </div>
        </div>
        <div className="w-[30vw] h-[15vh]  -mt-2 text-white relative  ml-[40vw] text-white/20 text-center animate-pulse text-7xl">
          <span className="absolute  -ml-14 top-2 font-1 text-white/50 text-2xl"> Scroll Down</span>
            ⌵
        </div>
      </main>
    </>
  );
}

export default Landing;
