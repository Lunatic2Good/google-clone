import { Inter } from "next/font/google";
import "../globals.css";
import SearchHeader from "../components/SearchHeader";
import PaginationButtons from "../components/PaginationButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone Next App 13",
  description: "An open source Google clone built with Next.js 13 and Tailwind CSS.",
};

export default function SearchLayout({ children }) {
  return (
    <div className={inter.className}>
        <SearchHeader/>
        {children}
        {/* <div className="">

        <PaginationButtons/>
        </div> */}
    </div>
  );
}