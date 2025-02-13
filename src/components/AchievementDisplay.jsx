import React from 'react'
import RankDisplay from './RankDisplay'
import { PointsDisplay } from './PointsDisplay'


const AchievementDisplay = ({ rank, points }) => {
  return (
    <div className="rank-and-points-container"> 
      <div className="p-6 rounded-lg font-sans flex flex-col items-center">
      <div className="flex items-center gap-6 mb-6"> 
        <RankDisplay rank={rank} />
        <PointsDisplay points={points} />
      </div>
    </div>
    </div>
  )
}

export default AchievementDisplay