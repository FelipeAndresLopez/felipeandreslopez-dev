// external
import { FormattedMessage } from 'react-intl'

// components
import { Section } from '../../components/Section/Section.tsx'
import { SquareAvatar } from '../../components/SquareAvatar/SquareAvatar.tsx'
import { ProfileIcon } from '../../components/Icons/ProfileIcon.tsx'

// assets
import photoFamily from '../../assets/images/foto-familia-felipe.jpeg'

const AboutMe = (): JSX.Element => (
  <>
    <Section id="sobre-mi">
      <div className='flex items-center mb-8'>
        <ProfileIcon />
        <h1 className="m-0 ml-2 text-2xl text-white font-raleway sm:text-3xl font-bold">
          <FormattedMessage
            id='about.title'
            defaultMessage='about.title'
          />
        </h1>
      </div>
      <div className='flex flex-row flex-wrap gap-8 items-flex-start sm:flex-nowrap'>
        <p className='text-white text-lg font-light font-roboto text-justify order-1'>
          <FormattedMessage
            id='about.description'
            defaultMessage='about.description'
            values={{
              br: <br />
            }}
          />
        </p>

        <SquareAvatar imageUrl={photoFamily} />

      </div>
      <p className='text-white text-lg font-light font-roboto text-justify'>
        <FormattedMessage
          id='about.description-2'
          defaultMessage='about.description-2'
          values={{
            br: <br />
          }}
        />
        <strong className='text-teal-300 font-medium '><a href="mailto:felipeandreslopez91@gmail.com" >felipeandreslopez91@gmail.com</a></strong>
        <br /> <br />
        <FormattedMessage
          id='about.farewell'
          defaultMessage='about.farewell'
        />
      </p>
    </Section>
  </>
)

export default AboutMe
