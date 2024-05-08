import Image from "next/image";
import Landing from "./Landing/landing";
import About from "./about/about";
import Photos from "./photos/photos";

export default function Home() {
  return (
   <>
   <Landing/>
   <About/>
   <Photos/>
   </>
  );
}
