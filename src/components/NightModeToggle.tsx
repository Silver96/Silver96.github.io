import React, { useState, createContext } from 'react';

export const GlobalStateContext = createContext({
    nightMode: false,
    setNightMode: (newValue: boolean) => {
    },
});

export default function NightModeToggle({ value, setter }: { value: boolean, setter: (newVal: boolean) => void }) {
    const toggleNightMode = () => {
        setter(!value);
        localStorage.setItem('night-mode-enabled', (!value).toString());
    };

    return (<label htmlFor="night-mode-check" className="night-mode-toggle">
        Night mode
        <input id="night-mode-check" type="checkbox"
               checked={value}
               onChange={() => toggleNightMode()}
               onKeyPress={(e) => {
                   if (e.key === 'Enter') {
                       toggleNightMode();
                   }
               }}
        />
        <label htmlFor="night-mode-check" className="ml-2"/>
    </label>);
}
