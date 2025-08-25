import React, { useState } from "react";
import "./Ex6_ss16.css";

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(v => !v);

  return (
    <div
      className={`ts-card ${isDarkMode ? "dark" : "light"}`}
      role="region"
      aria-live="polite"
    >
      <h2 className="ts-title">
        {isDarkMode ? "🌙 Chế độ Tối đang bật" : "🌞 Chế độ Sáng đang bật"}
      </h2>

      <button
        className="ts-btn"
        onClick={toggleTheme}
        aria-pressed={isDarkMode}
        type="button"
      >
        Chuyển theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
