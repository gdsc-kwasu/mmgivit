import Link from 'next/link'
import { MissionContent, MissionContentItem } from './style/Mission.styled'
import { MISSION_SECTION_ITEMS } from '@/utils/constants'

const MissionSection = () => {
  return (
    <MissionContent>
      {MISSION_SECTION_ITEMS.map((items, index) => (
        <Link key={index} href="#" passHref>
          <MissionContentItem backgroundImage={items.image}>
            <span>{items.text}</span>
          </MissionContentItem>
        </Link>
      ))}
    </MissionContent>
  )
}

export default MissionSection
