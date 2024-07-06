"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()
console.log("MODE24");
export const ThemeProvider = ({children}) => 
{
    const [mode, setMode] = useState("light")
    //console.log("MODE3", mode)
    const toggle = () => {
        setMode ((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return( <ThemeContext.Provider value={{toggle, mode}}>
    <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
    )
};
