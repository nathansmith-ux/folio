"use client"

import { useState } from "react"
import { useUIState, useActions } from "ai/rsc"
import type { AI } from "@/app/api/physics/action"
import SubmitIcon from "@/components/ui/icons/SubmitIcon";
import PhysicsIcon from "@/components/ui/icons/PhysicsIcon";

export default function PhysicsPage() {

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();

  return (
    <main className="flex flex-col justify-end items-center h-screen bg-white">
      <section className="overflow-y-auto ">
      {
        // View messages in UI state
        messages.map((message: any) => (
          <div 
            className="mb-5 p-4 text-lg text-black"
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
            <PhysicsIcon />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-white text-lg rounded-lg focus:bg-purple-600	block w-full ps-10 p-2.5 dark:bg-purple-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-purple-600 dark:focus:bg-purple-700	"
            placeholder="Ask about physics, specify the level of complexity"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <SubmitIcon />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </main>
  )
}