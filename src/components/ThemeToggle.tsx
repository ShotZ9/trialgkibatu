"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");

        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 left-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 transition-all z-[9998]"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
        </button>
    );
};

export default ThemeToggle;
