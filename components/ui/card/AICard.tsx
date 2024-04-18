import Image from 'next/image'
import { ReactNode } from 'react'

interface AICardProps {
  children: ReactNode
  cyberSecurity: boolean
}

export default function AICard({ children, cyberSecurity } : AICardProps) {

  const bgStyles = cyberSecurity ? "bg-slate-700" : "bg-emerald-500"

  return (
    <div className={`flex ${bgStyles} p-8 rounded-lg`}>
      {cyberSecurity ? (
        <Image 
          src="/cyber-security/cyber-ai.webp"
          height="60"
          width="60"
          alt="Cyber security bot profile pic"
          className='mr-8 max-h-[60px] max-w-[60px] rounded-xl'
        />
      ) : (
        <Image 
          src="/life-science/life-science-ai.webp"
          height="60"
          width="60"
          alt="Life Science profile pic"
          className='mr-8 max-h-[60px] max-w-[60px] rounded-xl'
        />
      )}
      <div>
        {children}
      </div>
    </div>
  )
}