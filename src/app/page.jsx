import Image from "next/image";
import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader/>

      {/* body */}
      <div className="flex flex-col items-center mt-24">
        <Image width={300} height={100} src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="Google Logo" priority style={{width: "auto"}}y/>
        <HomeSearch/>
      </div>
    </>
  )
}