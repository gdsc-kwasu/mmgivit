import Image from 'next/image'
import Link from 'next/link'
import { CampaignContainer } from './style/Campaign.styled'
import { CAMPAIGN_CONTENTS_ITEMS } from '@/utils/constants'

const Campaign = () => {
  return (
    <CampaignContainer>
      <h2 className="heading">Why We Do This Campaign</h2>
      <p className="description-para">
        lorem ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
        amet sint. Velit officia consequa.
      </p>
      <div className="content">
        {CAMPAIGN_CONTENTS_ITEMS.map((items, index) => (
          <div key={index}>
            <Image
              className="icons"
              src={items.icon}
              alt={items.alternative}
              width={100}
              height={100}
            />
            <h3>{items.title}</h3>
            <p className="description-para">{items.text}</p>
            <Link href={items.linkPath} passHref>
              <a>{items.link}</a>
            </Link>
          </div>
        ))}
      </div>
    </CampaignContainer>
  )
}

export default Campaign
