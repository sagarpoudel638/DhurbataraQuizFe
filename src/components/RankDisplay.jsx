import React from 'react'

const RankDisplay = ({ rank }) => {
    return (
        <div className="bg-white p-3 rounded shadow text-center border-2 border-solid border-[#66E7EC]">
      <span className="text-gray-500 text-sm block">Rank</span>
      <span className="font-bold text-base">{rank}</span>
    </div>
      );
}

export default RankDisplay;