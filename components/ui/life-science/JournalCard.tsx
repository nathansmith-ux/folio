"use client"

import Link from "next/link";
import { useState } from "react";
import SuccessAlert from "../alerts/SuccessAlert";
import UnSuccessfulAlert from "../alerts/UnSuccessfulAlert";

interface JournalCardProps {
  header: string,
  description: string,
  link: string,
  publicationName: string,
  openAccess: string
}

export default function JournalCard({ header, description, link, publicationName, openAccess }: JournalCardProps) {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="max-w-sm p-6 pb-16 bg-white border border-gray-200 rounded-lg shadow relative">
      <span className="block mb-2 text-md italic">{publicationName}</span>
      <span className="block mb-2">
        {openAccess === "false" ? <UnSuccessfulAlert /> : <SuccessAlert />}
      </span>
      <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{header}</h2>
      <p className={`${isExpanded ? '' : 'max-h-20 overflow-hidden'} font-normal text-gray-700 text-sm mb-4`}>
        {description ? description : "This paper has no abstract available"}
      </p>

      <button onClick={handleExpanded} className="text-blue-600 hover:text-blue-800 text-sm mb-4">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      
      <Link 
        href={link} 
        className="absolute bottom-0 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white border border-black rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 left-6 right-6 mb-6"
        rel="noopener noreferrer" 
        target="_blank"
      >
          View The Paper
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
      </Link>
    </div>
  );
}
