import ChatInterface from "@/components/ui/chat/ChatInterface";
import NavBar from "@/components/ui/navigation/NavBar";

export default function CyberSecurityPage() {
  return (
    <>
      <main className="flex flex-col justify-end items-center h-screen">
        <ChatInterface 
          security={true}
          placeholderText="Scan URLs, Domains, IP Addresses or ask about different types of cybersecurity attacks"
          promptOne="Scan This URL [url]"
          promptTwo="Scan This Domain [domain]"
          disclaimer="This should not be considered and/or replace cybersecurity advice"
        />
      </main>
    </>
  )
}