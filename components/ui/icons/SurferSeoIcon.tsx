import Image from "next/image";

export default function SurferSeoIcon() {
  return (
    <div>
      <Image
        className="w-12 h-12 rounded-full"
        src="/seo-page/surfer-seo.png"
        width="50"
        height="50"
        alt="Surfer seo logo"
      />
    </div>
  );
}