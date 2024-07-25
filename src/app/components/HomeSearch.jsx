"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function HomeSearch() {
    const [input, setInput] = useState("");
    const router = useRouter();
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }

    async function randomSearch(e) {
        setRandomSearchLoading(true);
        const response = await fetch("https://random-word-api.vercel.app/api?words=1");
        if(!response) return;
        const data = await response.json();
        router.push(`/search/web?searchTerm=${data}`);
        setRandomSearchLoading(false);
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
            <AiOutlineSearch className="text-xl text-gray-500 mr-3"/>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} className="flex-grow focus:outline-none" />
            <Image width={32} height={44} src="/mic.svg"/>
            <Image width={32} height={44} src="/lens.svg" className="ml-1"/>
        </form>

        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
            <button onClick={handleSubmit} className="btn">Google Search</button>
            <button disabled={randomSearchLoading} onClick={randomSearch} className="btn flex items-center justify-center disabled:opacity-80">
                {randomSearchLoading ? (
                    <img src="/spinner.svg" alt="loading..." className="h-6 text-center"/>
                ) : (
                    "I'm Feeling Lucky"
                )}
            </button>
        </div>
    </>
  )
}