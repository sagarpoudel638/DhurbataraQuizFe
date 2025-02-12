import React from 'react'

const RankDisplay = ({ rank }) => {
    return (
        <div className="rank-display">
          <span className="rank-label">Rank:</span>
          <span className="rank-number">{rank}</span>
        </div>
      );
}

export default RankDisplay;