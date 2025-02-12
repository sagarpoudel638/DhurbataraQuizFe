import React from 'react'
import RankDisplay from './RankDisplay'
import { PointsDisplay } from './PointsDisplay'


const AchievementDisplay = () => {
  return (
    <div className="rank-and-points-container"> {/* Or user-stats-container */}
      <RankDisplay rank={rank} />
      <PointsDisplay points={points} />
    </div>
  )
}

export default AchievementDisplay