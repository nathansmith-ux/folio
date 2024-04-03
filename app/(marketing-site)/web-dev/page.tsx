import CardGrid from "@/components/ui/card/CardGrid";
import TextCentered from "@/components/ui/hero/TextCentered";
import CardIcon from "@/components/ui/card/CardIcon";
import NavBar from "@/components/ui/navigation/NavBar";
import Footer from "@/components/ui/footer/Footer";

export default function WebDevPage() {  
  return (
    <main>
      <NavBar />
      <TextCentered />
      <CardGrid />
      <div>
        <h2>Our Process</h2>
      <section className="mx-4 gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        <CardIcon />
        <CardIcon />
        <CardIcon />
      </section>
      </div>
      <Footer />
    </main>
  )
}