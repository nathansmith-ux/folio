import Link from "next/link";

export default function ConsultationButton() {
  return (
    <Link 
      href="https://calendly.com/nathanrmsmith/30min" 
      passHref
    >
      <button
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-400" 
        role="alert"
      >
        <span className="text-xs bg-primary-600 rounded-full border border-white text-white px-4 py-1.5 mr-3">
          Contact Me
        </span>
        <span className="text-sm font-medium">
          Schedule A 30 Min Consultation
        </span>
        <svg 
          className="ml-2 w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
            clipRule="evenodd"
          />
        </svg>
      </button>      
    </Link>
  );
}
