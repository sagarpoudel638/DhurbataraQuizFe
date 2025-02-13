import React from 'react'

export const PointsDisplay = ({points}) => {
  return (
    <div className="bg-white p-3 rounded shadow text-center border-2 border-solid border-[#66E7EC]">
      <span className="text-gray-500 text-sm block">Points</span>
      <span className="font-bold text-base">{points} pts</span>
    </div>
  )
}
