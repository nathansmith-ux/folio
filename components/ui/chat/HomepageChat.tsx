"use client"

import { useState } from "react"
import { useUIState, useActions } from "ai/rsc"
import type { AI } from "@/app/api/weather/action"
import SubmitIcon from "@/components/ui/icons/SubmitIcon";
import { HeroHighlight } from "../hero/HeroHighlight";
import Image from "next/image";

export default function HomepageChat() {

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();

  const handleInput = (prompt: string) => {
    setInputValue(prompt)
  }

  return (
    <>
      <div className="flex flex-col items-center pt-16 lg:pt-44">
        <HeroHighlight 
          normalText="Welcome To White Walls Media Where We Bring "
          highlightedText="Your Vision To Life"
        />
        <p className="text-md lg:text-lg italic mt-8 mx-8 text-center">Unlike regular websites I built a site that renders as you ask questions so that your experience is tailored to you</p>
      </div>
      <section className="flex flex-col pt-40 overflow-y-auto w-full mx-auto h-max-40 pb-28">
      {
        messages.map((message: any) => (
         message.role === 'user' ? (
            <div 
              className="mb-8 mt-8 text-3xl font-medium flex justify-center items-center bg-blue-400 p-8 w-1/2 mx-auto rounded-lg text-white" 
              key={message.id}
            >
              <Image 
                src="/user-icon.webp"
                height="50"
                width="50"
                className="rounded-lg mr-4"
                alt="User icon"
              />
              <p>{message.display}</p>
            </div>
          ) : (
            <div key={message.id}>
              {message.display}
            </div>
          )
        ))
      }
      </section>
 
      <form 
        className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full p-4 bg-white border-t mx-auto z-40"
        onSubmit={async (e) => {
          e.preventDefault();
          // Add user message to UI state
          setMessages((currentMessages) => [
            ...currentMessages,
            {
              id: Date.now(),
              display: <div>{inputValue}</div>,
              role: 'user'
            },
          ]);
          // Submit and get response message
          const responseMessage = await submitUserMessage(inputValue);
          setMessages((currentMessages) => [
            ...currentMessages,
            { ...responseMessage, role: 'system' },
          ]);
          setInputValue('');
        }}
      >
        <label htmlFor="simple-weather-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-orange-100 border border-gray-300 text-black placeholder-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Find Anything On My Website By Just Asking"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <SubmitIcon />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </>
  )
}