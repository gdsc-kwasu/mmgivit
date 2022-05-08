import React from 'react'
import Campaign from './Campaign'
import MissionSection from './MissionSection'
import VideoSection from './VideoSection'
import Work from './Work'

const Home = () => {
  return (
    <React.Fragment>
      <MissionSection />
      <Campaign />
      <VideoSection />
      <Work />
    </React.Fragment>
  )
}

export default Home
