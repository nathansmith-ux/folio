import HomepageChat from "@/components/ui/chat/HomepageChat";
import MobileNavBar from "@/components/ui/navigation/MobileNavBar";
import NavBar from "@/components/ui/navigation/NavBar";
export const maxDuration = 300

export default function Home() {
  return (
    <main className="h-screen">
      <div className="block md:hidden lg:hidden">
        <MobileNavBar />
      </div>
      <div className="hidden md:block">
        <NavBar/>
      </div>
        <HomepageChat />
    </main>
  );
}
