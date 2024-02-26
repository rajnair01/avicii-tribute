import { useEffect } from "react";

function ThemeButton({ theme, handleThemeSwitch }) {
  return (
    <div>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 md:right-2 right-2 top-3.5 bg-gray-600 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
export default ThemeButton;
