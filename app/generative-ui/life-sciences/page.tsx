import ChatInterface from "@/components/ui/chat/ChatInterface";

export default function LifeSciencePage() {
  return (
    <main className="flex flex-col justify-end items-center h-screen">
      <ChatInterface 
        weather={false}
      />
    </main>
  )
}