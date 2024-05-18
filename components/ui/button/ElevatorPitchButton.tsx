import Link from "next/link";

interface ElevatorPitchButtonProps {
  text?: string
}

export default function ElevatorPitchButton({ text="Ready To Chat About Your Business?" }: ElevatorPitchButtonProps) {
  return (
    <Link href="https://calendly.com/nathanrmsmith/30min" passHref>
      <button
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 bg-green-400 rounded-lg border border-gray-300 hover:bg-green-500 focus:ring-4 focus:ring-gray-100"
      >
        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H160zM576 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM448 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm128 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM272 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM576 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
        <span>
          {text}
        </span>
      </button>
    </Link>
  );
}