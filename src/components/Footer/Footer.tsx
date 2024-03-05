import { GithubIcon } from '../Icons/GithubIcon.tsx'
import { LinkedIcon } from '../Icons/LinkedInIcon.tsx'

export const Footer: React.FC = () => (
  <footer>
    <div className='pb-14 flex flex-col gap-2 items-center w-full mx-auto lg:max-w-4xl md:max-w-2xl text-sm font-light font-roboto'>
      <div className="flex flex-row gap-2">
        <a href="https://www.linkedin.com/in/felipe-andres-lopez" target="_blank" rel="noopener noreferrer">
          <GithubIcon className='size-10' />
        </a>
        <a href="https://github.com/FelipeAndresLopez" target="_blank" rel="noopener noreferrer">
          <LinkedIcon />
        </a>
      </div>
      <p className='text-primary-lm dark:text-primary-dm font-medium'>© 2024</p>
    </div>
  </footer>
)
