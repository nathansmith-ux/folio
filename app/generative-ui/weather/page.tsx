"use client"

import { useState } from "react"
import { useUIState, useActions } from "ai/rsc"
import type { AI } from "@/app/api/weather/action"
import TemperatureIcon from "@/components/ui/icons/TemperatureIcon";
import SubmitIcon from "@/components/ui/icons/SubmitIcon";

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
            <TemperatureIcon />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ask about the current weather, the weather forecast"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <SubmitIcon />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </main>
  )
}