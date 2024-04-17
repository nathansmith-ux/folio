import Link from "next/link";
import Image from "next/image";
import ElevatorPitchButton from "../button/ElevatorPitchButton";

interface InitialPromptsProps {
  onPromptClick: (prompt: string) => void;
  promptOne: string
  promptTwo: string
}

export default function InitialPrompts({ onPromptClick, promptOne, promptTwo }: InitialPromptsProps) {

  const promptStyles = "text-lg text-start text-white group-hover:text-white transition-colors duration-150";
  
  const promptBgStyles = "group bg-slate-500 w-full p-4 rounded-lg hover:bg-blue-500 transition-colors duration-150 border-black shadow-lg";

  return (
    <section className="w-11/12 md:w-3/4">
      <div className="fixed z-50 flex justify-between items-center w-11/12 md:w-3/4 p-4 -translate-x-1/2 bg-slate-500 border border-gray-100 rounded-lg shadow-sm left-1/2 top-6">
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
        <h1 className="text-3xl text-white">Welcome To White Walls Media Generative UI</h1>
        <ElevatorPitchButton />
      </div>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <button 
              onClick={() => onPromptClick(promptOne)}
              className={promptBgStyles}  
            >
              <p className={promptStyles}>{promptOne}</p>
            </button>
          </div>
          <div>
            <button 
              onClick={() => onPromptClick(promptTwo)}
              className={promptBgStyles}
            >
              <p className={promptStyles}>{promptTwo}</p>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
