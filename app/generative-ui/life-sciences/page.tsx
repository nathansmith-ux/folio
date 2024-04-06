"use client"

import { useState } from "react"
import { useUIState, useActions } from "ai/rsc"
import type { AI } from "@/app/api/weather/action"
import SubmitIcon from "@/components/ui/icons/SubmitIcon";
import LifeScienceIcon from "@/components/ui/icons/LifeScienceIcon";

export default function Page() {

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();

  return (
    <main className="flex flex-col justify-end items-center h-screen">
      <section className="overflow-y-auto ">
      {
        // View messages in UI state
        messages.map((message: any) => (
          <div 
            className="mb-5 p-4 text-lg"
            key={message.id}
          >
            {message.display}
          </div>
        ))
      }
      </section>
 
      <form 
        className="flex items-center w-3/4 mx-auto mb-6"
        onSubmit={async (e) => {
          e.preventDefault();
          // Add user message to UI state
          setMessages((currentMessages) => [
            ...currentMessages,
            {
              id: Date.now(),
              display: <div>{inputValue}</div>,
            },
          ]);
          // Submit and get response message
          const responseMessage = await submitUserMessage(inputValue);
          setMessages((currentMessages) => [
            ...currentMessages,
            responseMessage,
          ]);
          setInputValue('');
        }}
      >
        <label htmlFor="simple-weather-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <LifeScienceIcon />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-slate-500 border border-gray-300 text-white placeholder-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Ask about different types of diseases and find research papers"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <SubmitIcon />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </main>
  )
}