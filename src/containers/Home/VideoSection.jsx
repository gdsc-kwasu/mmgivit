import { VidContainer } from './style/Video.styled'

const VideoSection = () => {
  return (
    <VidContainer>
      <div className="video">video here</div>
      <div className="texts">
        <h2>
          We have funded over <span>2000+</span> food, projects{' '}
          <span>400k </span> for people across kwara state{' '}
        </h2>
        <p>
          Lorem minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </VidContainer>
  )
}

export default VideoSection
