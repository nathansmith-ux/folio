import Link from "next/link";

interface ContactButtonProps {
  text: string;
  link: string;
}

export default function ContactButton({ text, link }: ContactButtonProps) {
  return (
    <Link href={link} passHref>
      <button className="bg-gradient-to-b from-blue-300 to-pink-300 no-underline group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 text-zinc-900 inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1 ring-white/10">
          <span className="text-base p-2">{text}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </Link>
  );
}
