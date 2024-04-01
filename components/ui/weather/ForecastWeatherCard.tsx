"use client"

import { useState } from 'react';

enum TabName {
  About = 'about',
  Services = 'services',
  Statistics = 'statistics',
}

type TabData = {
  name: TabName;
  content: JSX.Element;
};

const tabs: TabData[] = [
  { name: TabName.About, content: <p>Hello There about</p> },
  { name: TabName.Services, content: <p>Hello There services</p> },
  { name: TabName.Statistics, content: <p>Hello There statistics</p> },
];

export default function ForecastWeatherCard({ tabs }: { tabs:TabData[] }) {
  const [activeTab, setActiveTab] = useState<TabName>(TabName.About);

  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" role="tablist">
          {tabs.map(tab => (
            <li className="me-2" key={tab.name}>
              <button 
                onClick={() => handleTabChange(tab.name)} 
                className={`inline-block p-4 rounded-ss-lg ${activeTab === tab.name ? 'text-blue-600 dark:text-blue-500' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                aria-selected={activeTab === tab.name}
              >
                {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div id="defaultTabContent">
          {tabs.map(tab => (
            <div key={tab.name} className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === tab.name ? 'block' : 'hidden'}`} id={tab.name} role="tabpanel">
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
