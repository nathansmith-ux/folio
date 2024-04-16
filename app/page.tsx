import HomepageChat from "@/components/ui/chat/HomepageChat";
import NavBar from "@/components/ui/navigation/NavBar";

export default function Home() {
  return (
    <main className="h-screen">
      <NavBar/>
        <HomepageChat />
    </main>
  );
}
