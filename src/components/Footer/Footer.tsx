import linkedInIcon from '../../assets/icons/linkedin-icon.svg'
import githubIcon from '../../assets/icons/github-icon.svg'

export const Footer: React.FC = () => (
  <footer>
    <div className='pb-14 flex flex-col gap-2 items-center w-full mx-auto lg:max-w-4xl md:max-w-2xl text-white text-sm font-light font-roboto'>
      <div className="flex flex-row gap-2">
        <a href="https://www.linkedin.com/in/felipe-andres-lopez" target="_blank" rel="noopener noreferrer">
          <img className='size-10' src={linkedInIcon} alt="linkedin-icon" />
        </a>
        <a href="https://github.com/FelipeAndresLopez" target="_blank" rel="noopener noreferrer">
          <img className='size-10' src={githubIcon} alt="github-icon" />
        </a>
      </div>
      <p className='font-medium'>© 2024</p>
    </div>
  </footer>
)
