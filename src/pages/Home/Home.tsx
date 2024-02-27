// components
import { Section } from '../../components/Section/Section.tsx'
import { CircleAvatar } from '../../components/CircleAvatar/CircleAvatar.tsx'

// assets
import fotoPerfil from '../../assets/images/foto-perfil-felipe.jpeg'

const Home = (): JSX.Element => (
  <>
    <Section id="home">
      <div className='max-w-2xl'>
        <div className='flex flex-row gap-4 items-center'>
          <CircleAvatar imageUrl={fotoPerfil} />
          <h1 className="m-0 text-2xl text-white font-raleway sm:text-5xl font-bold">
            Hola mundo 🌎, soy Felipe.
          </h1>
        </div>
        <br />

        <p className='text-white text-xl font-light [&>span]:light-green [&>span]:font-medium'>
          <span>Ingeniero de Sistemas</span> especializado en desarrollo de interfaces de usuario con
          <span> React JS</span>.
          Más de 5 años de experiencia en
          <span> desarrollo de aplicaciones web</span>.
          Orgullosamente Colombiano 🇨🇴.
        </p>
      </div>
      <br />

    </Section>
  </>
)

export default Home
