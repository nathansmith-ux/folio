"use client"

import { useState } from 'react';

interface DiseaseCardProps {
  summary: string,
  pathogenesis: string,
  symptoms: string,
  risk_factors: string,
  treatment: string
}

export default function DiseaseCard({ summary, pathogenesis, symptoms, risk_factors, treatment }: DiseaseCardProps) {
    const [activeTab, setActiveTab] = useState('Summary');

    const tabs = [
        { name: 'Summary', content: <p className='text-white'>{summary}</p> },
        { name: 'Pathogenesis', content: <p className='text-white'>{pathogenesis}</p> },
        { name: 'Symptoms', content: <p className='text-white'>{symptoms}</p> },
        { name: 'Risk Factors', content: <p className='text-white'>{risk_factors}</p> },
        { name: 'Treatment', content: <p className='text-white'>{treatment}</p> }
    ];

    return (
        <section>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50" role="tablist">
                    {tabs.map(tab => (
                        <li className="mr-2" key={tab.name}>
                            <button 
                                onClick={() => setActiveTab(tab.name)} 
                                className={`inline-block p-4 rounded-t-lg ${activeTab === tab.name ? 'text-blue-600' : 'hover:bg-gray-400 hover:text-white'}`}
                                aria-selected={activeTab === tab.name}
                            >
                                {tab.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <div id="defaultTabContent">
                    {tabs.map(tab => (
                        <div key={tab.name} className={`p-4 rounded-b-lg md:p-8 bg-gray-800 ${activeTab === tab.name ? 'block' : 'hidden'}`} role="tabpanel">
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
