import React from 'react'

export const PointsDisplay = ({points}) => {
  return (
    <div className="points-display">
      <span className="points-label">Points:</span>
      <span className="points-number">{points} pts</span>
    </div>
  )
}
