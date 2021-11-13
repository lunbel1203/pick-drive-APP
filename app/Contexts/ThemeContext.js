import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const COLORS = {
    colorMamey: "#D96F32",
    colorNaranja: "#D98032",
    colorNegro: "#0D0D0D",
    colorGris: "#403D39",
};

export const ThemeProvider = ({ children }) => {

    const [Colors, setColors] = useState(COLORS);

    return (
        <ThemeContext.Provider value={{ Colors }}>
            { children }
        </ThemeContext.Provider>
    )
}
