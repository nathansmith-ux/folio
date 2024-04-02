"use client"

import { useState } from 'react';

type ForecastDay = {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        maxtemp_f: number;
        mintemp_f: number;
        condition: {
            text: string;
            icon: string;
        };
    };
};

type TabData = {
    name: string;
    content: JSX.Element;
};

export default function ForecastWeatherCard({ forecastday }: { forecastday: ForecastDay[] }) {
    const [activeTab, setActiveTab] = useState(forecastday[0].date);
    const [isCelsius, setIsCelsius] = useState(true); 

    const formatTabName = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    };

    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius);
    };

    const tabs: TabData[] = forecastday.map(day => ({
        name: day.date,
        content: (
            <div>
                <p>Max Temp: {isCelsius ? day.day.maxtemp_c + '°C' : day.day.maxtemp_f + '°F'}</p>
                <p>Min Temp: {isCelsius ? day.day.mintemp_c + '°C' : day.day.mintemp_f + '°F'}</p>
                <p>Condition: {day.day.condition.text}</p>
                <img src={day.day.condition.icon} alt="Weather condition" />
            </div>
        ),
    }));

    return (
        <section>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" role="tablist">
                    {tabs.map(tab => (
                        <li className="me-2 m-2" key={tab.name}>
                            <button 
                                onClick={() => setActiveTab(tab.name)} 
                                className={`inline-block p-4 rounded-ss-lg ${activeTab === tab.name ? 'text-blue-600 dark:text-blue-500' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                aria-selected={activeTab === tab.name}
                            >
                                {formatTabName(tab.name)}
                            </button>
                        </li>
                    ))}
                    <button 
                      onClick={toggleTemperatureUnit} className="toggle-temp-button rounded-xl bg-amber-500 m-2 p-2 text-white">
                      Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
                    </button>
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

