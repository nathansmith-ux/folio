import ChatInterface from "@/components/ui/chat/ChatInterface";

export default function CyberSecurityPage() {
  return (
    <>
      <main className="flex flex-col justify-end items-center h-screen">
        <ChatInterface 
          security={true}
          placeholderText="Scan URLs  or ask about different types of cybersecurity attacks"
          promptOne="Scan This URL [url]"
          promptTwo="Tell me how [attack] is perpetrated"
          disclaimer="This should not be considered and/or replace cybersecurity advice"
        />
      </main>
    </>
  )
}