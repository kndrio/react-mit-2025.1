import React from "react";
import { useTheme } from "../hooks/ThemeContext";

const Tema = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
        <div style={{
            backgroundColor: theme === 'light' ? "#fff" : "#333",
            color: theme === 'light' ? "#000" : "#fff",
            heigth: "100vh",
            width: "100vw"
        }}>
            <h2>My Theme</h2>
            <button onClick={toggleTheme}>Alterar Tema</button>
        </div>
        </>
    )

}

export default Tema;