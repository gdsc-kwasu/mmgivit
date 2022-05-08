import Link from 'next/link'
import { MissionContent } from './style/Mission.styled'
import { MISSION_SECTION_ITEMS } from '@/utils/constants'

const MissionSection = () => {
  return (
    <MissionContent>
      {MISSION_SECTION_ITEMS.map((items, index) => (
        <Link key={index} href="#" passHref>
          <div
            style={{
              backgroundImage: ` url(${items.image}) `,
            }}
            className="missions"
          >
            {items.text}
          </div>
        </Link>
      ))}
    </MissionContent>
  )
}

export default MissionSection
