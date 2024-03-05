// external
import { FormattedMessage } from 'react-intl'

// components
import { Section } from '@/components/Section/Section.tsx'
import { CircleAvatar } from '@/components/CircleAvatar/CircleAvatar.tsx'

// assets
import fotoPerfil from '@/assets/images/foto-perfil-felipe.jpeg'

const Home = (): JSX.Element => (
  <>
    <Section id='inicio'>
      <div className='max-w-2xl'>
        <div className='flex flex-row gap-4 items-center'>
          <CircleAvatar imageUrl={fotoPerfil} />
          <h1 className='m-0 text-2xl text-primary-lm dark:text-primary-dm font-raleway sm:text-5xl font-bold'>
            <FormattedMessage
              id='home.title'
              defaultMessage='home.title'
            />
          </h1>
        </div>
        <br />

        <p className='text-primary-lm dark:text-primary-dm text-xl font-light [&>span]:text-secondary-lm dark:[&>span]:text-secondary-dm [&>span]:font-medium'>
          <FormattedMessage
            id='home.paragraph'
            defaultMessage='home.paragraph'
            values={{
              span: chunks => <span>{chunks}</span>,
              br: <br />
            }}
          />
        </p>
      </div>
      <br />

    </Section>
  </>
)

export default Home
