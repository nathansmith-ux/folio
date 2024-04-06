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

interface ForecastDayProps {
    forecastday: ForecastDay[]
}

export default function ForecastWeatherCard({ forecastday }: ForecastDayProps) {
    const [activeTab, setActiveTab] = useState(forecastday[0].date);
    const [isCelsius, setIsCelsius] = useState(true); 

    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius);
    };

    const tabs: TabData[] = forecastday.map(day => ({
        name: day.date,
        content: (
            <div>
                <p className="text-white">Max Temp: {isCelsius ? day.day.maxtemp_c + '°C' : day.day.maxtemp_f + '°F'}</p>
                <p className="text-white">Min Temp: {isCelsius ? day.day.mintemp_c + '°C' : day.day.mintemp_f + '°F'}</p>
                <p className="text-white">Condition: {day.day.condition.text}</p>
                <img src={day.day.condition.icon} alt="Weather condition" />
            </div>
        ),
    }));

    return (
        <section>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50" id="defaultTab" role="tablist">
                    {tabs.map(tab => (
                        <li className="me-2 m-2" key={tab.name}>
                            <button 
                                onClick={() => setActiveTab(tab.name)} 
                                className={`inline-block p-4 rounded-t-lg ${activeTab === tab.name ? 'text-blue-600' : 'hover:bg-gray-400 hover:text-white'}`}
                                aria-selected={activeTab === tab.name}
                            >
                                {tab.name}
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
                        <div key={tab.name} className={`p-4 rounded-lg md:p-8 bg-gray-800 ${activeTab === tab.name ? 'block' : 'hidden'}`} id={tab.name} role="tabpanel">
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

