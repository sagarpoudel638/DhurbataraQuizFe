import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar,faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="grid grid-cols-5 items-center max-w-lg mx-auto h-16">
        {/* Home Button */}
        <button
          onTouchStart={() => setTooltip("Home")}
          onMouseEnter={() => setTooltip("Home")}
          onMouseLeave={() => setTooltip(null)}
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg
            className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-[#66E7EC]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
        </button>

        {/* Quiz Button */}
        <button
          onTouchStart={() => setTooltip("Quiz")}
          onMouseEnter={() => setTooltip("Quiz")}
          onMouseLeave={() => setTooltip(null)}
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <FontAwesomeIcon icon={faCircleQuestion} className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-[#66E7EC]"/>
        </button>

        {/* Center Button - New Item */}
        <div className="flex items-center justify-center">
        <button
            onTouchStart={() => setTooltip("Start Quiz")}
            onMouseEnter={() => setTooltip("Start Quiz")}
            onMouseLeave={() => setTooltip(null)}
            className="flex items-center justify-center bg-[#66E7EC] text-white font-medium px-4 py-2 rounded-full hover:bg-[#4DBCC8] focus:ring-4 focus:ring-[#66E7EC] focus:outline-none"
          >
            <span className="text-lg">Start Quiz</span>
          </button>
        </div>
        {/* Leaderboard Button */}
        <button
          onTouchStart={() => setTooltip("Leaderboard")}
          onMouseEnter={() => setTooltip("Leaderboard")}
          onMouseLeave={() => setTooltip(null)}
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
  <FontAwesomeIcon icon={faRankingStar} className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-[#66E7EC]" />
  </button>
        {/* Settings Button */}
        <button
          onTouchStart={() => setTooltip("Settings")}
          onMouseEnter={() => setTooltip("Settings")}
          onMouseLeave={() => setTooltip(null)}
          className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg
            className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-[#66E7EC]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
            />
          </svg>
        </button>
      </div>

      {/* Tooltip for Mobile */}
      {tooltip && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 text-sm rounded-lg">
          {tooltip}
        </div>
      )}
    </div>
  );
};
export default Footer;
