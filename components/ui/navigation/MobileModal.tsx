"use client"

import BackIcon from "../icons/BackIcon";
import Link from "next/link";
import DownIcon from "../icons/DownIcon";
import ContactButton from "../button/ContactButton";

import { useState } from "react";


interface MobileModalProps {
  onClose: () => void
}

export default function MobileModal({ onClose }: MobileModalProps) {

  const [isServicesOpen, setServicesOpen] = useState(false)
  const [isProjectOpen, setProjectOpen] = useState(false)
  // const [isGenUiOpen, setGenUiOpen] = useState(false)

  const handleServicesOpen = () => {
    setServicesOpen(!isServicesOpen)
  }

  const handleProjectOpen = () => {
    setProjectOpen(!isProjectOpen)
  }

  // const handleGenUi = () => {
  //   setGenUiOpen(!isGenUiOpen)
  // }


  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-screen h-screen">
      <button
        onClick={onClose}
      >
        <BackIcon />
      </button>
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href="/" onClick={onClose} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
            <button onClick={handleServicesOpen} className="block w-full text-left py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <div className="flex justify-between items-center">
                Services
                <DownIcon />
              </div>
            </button>
            {isServicesOpen && (
              <ul className="pl-4">
                <li>
                  <Link href="/web-dev" onClick={onClose} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Web Development</Link>
                </li>
                <li>
                  <Link href="/seo" onClick={onClose} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">SEO</Link>
                </li>
              </ul>
            )}
          </li>
          {/* <li>
            <button onClick={handleGenUi} className="block w-full text-left py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <div className="flex justify-between items-center">
                Generative UI
                <DownIcon />
              </div>
            </button> */}
            {/* {isGenUiOpen && (
              <ul className="pl-4">
                <li>
                  <Link href="/generative-ui/cyber-security" onClick={onClose} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Cyber Security</Link>
                </li>
                <li>
                  <Link href="/generative-ui/life-sciences" onClick={onClose} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Life Sciences</Link>
                </li>
              </ul>
            )} */}
          {/* </li> */}
          <li>
            <button onClick={handleProjectOpen} className="block w-full text-left py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <div className="flex justify-between items-center">
                Projects & Portfolio
                <DownIcon />
              </div>
            </button>
            {isProjectOpen && (
              <ul className="pl-4">
                <li>
                  <Link href="/projects/tail" onClick={onClose} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">TaiL</Link>
                </li>
                <li>
                  <Link href="/projects/schema-forge" onClick={onClose} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Schema Forge</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
          <Link href="/about-me" onClick={onClose} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</Link>
        </li>
      </ul>
      <div className="flex justify-center mt-12">
        <ContactButton 
            link="https://calendly.com/nathanrmsmith/30min"
          />
      </div>
      </div>
    </div>
  );
}
