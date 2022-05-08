import Mission from '@/components/Mission'
import { MissionContainer } from './style/Mission.styled'

const MissionSection = () => {
  return (
    <MissionContainer>
      <h2 className="heading">Mission and Vision</h2>
      <p className="description-para">
        lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
        amet
      </p>
      <Mission />
    </MissionContainer>
  )
}

export default MissionSection
