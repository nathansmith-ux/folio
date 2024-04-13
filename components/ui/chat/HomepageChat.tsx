"use client"

import { useState } from "react"
import { useUIState, useActions } from "ai/rsc"
import type { AI } from "@/app/api/weather/action"
import SubmitIcon from "@/components/ui/icons/SubmitIcon";

export default function HomepageChat() {

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();

  const handleInput = (prompt: string) => {
    setInputValue(prompt)
  }

  return (
    <>
      {messages.length === 0 && (
        <div className="flex flex-col items-center pt-44">
          <h1 className="text-5xl">Welcome To White Walls Media</h1>
          <p className="mt-4 text-lg">Instead of a traditional website you can find everything you need on the homepage then watch as we build the website to fit your personal needs</p>
        </div>
      )}
      <section className="flex flex-col items-center pt-40 overflow-y-auto w-3/4 mx-auto h-max-40 pb-28">
      {
        // View messages in UI state
        messages.map((message: any) => (
          <div 
            className="p-4 mb-3"
            key={message.id}
          >
            {message.display}
          </div>
        ))
      }
      </section>
 
      <form 
        className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-3/4 p-4 bg-white border-t mx-auto"
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
          <input
            type="text"
            id="simple-search"
            className="bg-slate-500 border border-gray-300 text-white placeholder-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
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