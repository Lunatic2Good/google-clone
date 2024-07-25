import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone Next App 13",
  description: "An open source Google clone built with Next.js 13 and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* footer */}
        <Footer/>
        </body>
    </html>
  );
}