"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 10;
  // console.log(searchParams.get('start'));
  // console.log(pathname);
  // console.log(startIndex);

  return (
    <div className='text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0'>
      {startIndex > 10 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 1}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <FaChevronLeft className='h-5'/>
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex < 100 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 1}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <FaChevronRight className='h-5'/>
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}
