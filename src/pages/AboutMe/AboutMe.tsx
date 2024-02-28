// components
import { Section } from '../../components/Section/Section.tsx'
import { SquareAvatar } from '../../components/SquareAvatar/SquareAvatar.tsx'
import { ProfileIcon } from '../../components/Icons/ProfileIcon.tsx'

// assets
import fotoPerfil from '../../assets/images/foto-familia-felipe.jpeg'

const AboutMe = (): JSX.Element => (
  <>
    <Section id="sobre-mi">
      <div className='flex items-center mb-8'>
        <ProfileIcon />
        <h1 className="m-0 ml-2 text-2xl text-white font-raleway sm:text-3xl font-bold">
          Sobre Mi
        </h1>
      </div>
      <div className='flex flex-row gap-8 items-flex-start flex-wrap sm:flex-nowrap'>
        <p className='text-white text-lg font-light font-roboto text-justify order-1'>
          👋🏻 Hola viajero, gracias por tomar unos minutos de tu valioso tiempo para darle un vistazo a este sitio web.
          <br /><br />
          🙎🏻‍♂️ Me llamo Felipe Andrés López y he creado este sitio web como una hoja de vida digital para presentarme y mostrar mis habilidades y experiencia.

          <br /> <br />
          🤓 Como ya te habrás podido dar cuenta me encanta el desarrollo web, en especial el que esta enfocado en construir las interfaces de usuario. Sin embargo también he estado explorando otras tecnologías como NodeJS, Express, AWS y REST.

        </p>

        <SquareAvatar imageUrl={fotoPerfil} />

      </div>
      <p className='text-white text-lg font-light font-roboto text-justify'>
        <br />
        🎸 Además del desarrollo web, disfruto de otras actividades como cantar, tocar guitarra, el ciclomontañismo y aprender.
        Hay nuevos hábitos que estoy incorporando a mi rutina, como la lectura de libros de finanzas y la meditación.

        <br /> <br />
        ✉️ Si hay algo en lo que te pueda ayudar, relacionado a la programación, no dudes en contactarme.<br />
        Acá te dejo mi email, por si quieres dejarme un mensaje.👇🏻
        <br />
        <strong className='text-teal-300 font-medium '>felipeandreslopez91@gmail.com</strong>
        <br /> <br />
        ✌🏻Te mando un abrazo y espero la estés pasando bien.
      </p>
    </Section>
  </>
)

export default AboutMe
