import Link from "next/link";
import Image from "next/image";
import ElevatorPitchButton from "../button/ElevatorPitchButton";

interface InitialPromptsProps {
  onPromptClick: (prompt: string) => void;
  promptOne: string
  promptTwo: string
}

export default function InitialPrompts({ onPromptClick, promptOne, promptTwo }: InitialPromptsProps) {
  return (
    <section>
      <div id="marketing-banner" tabIndex={-1} className="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-slate-500 border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6">
        <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
          <Link 
            href="/"         
            className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600"
          >
            <Image
              src="/whitewalls.webp"
              height="45"
              width="45"
              className="rounded-full"
              alt="A logo of a maze against white"
            />
          </Link>
          <div className="flex flex-col">
            <p className="flex items-center text-md font-bold text-white mb-4">Need Help? Here are some prompts to get you started</p>
            <div className="mb-4">
              <button 
                onClick={() => onPromptClick(promptOne)}
                className="group bg-white p-4 rounded-lg hover:bg-blue-500 transition-colors duration-150"  
              >
                <p className="text-lg text-black group-hover:text-white transition-colors duration-150">{promptOne}</p>
              </button>
            </div>
            <div>
              <button 
                onClick={() => onPromptClick(promptTwo)}
                className="group bg-white p-4 rounded-lg hover:bg-blue-500 transition-colors duration-150" 
              >
                <p className="text-lg text-black group-hover:text-white transition-colors duration-150">{promptTwo}</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-shrink-0">
          <ElevatorPitchButton />
        </div>
      </div>
    </section>
  );
}
