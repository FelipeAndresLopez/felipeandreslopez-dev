import { FormattedMessage } from 'react-intl'

const menuItems = [
  {
    id: '1',
    name: 'Inicio',
    url: './#inicio',
    translationId: 'menu.item.home'
  },
  {
    id: '2',
    name: 'Experiencia',
    url: './#experiencia',
    translationId: 'menu.item.experience'
  },
  {
    id: '3',
    name: 'Educación',
    url: './#educacion',
    translationId: 'menu.item.education'
  },
  {
    id: '4',
    name: 'Sobre Mi',
    url: './#sobre-mi',
    translationId: 'menu.item.about.me'
  }
]

export const Header: React.FC = () => (
  <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto"'>
    <nav className='backdrop-blur-sm mt-4 flex px-3 text-sm justify-center items-center text-primary-dm dark:text-primary-dm font-bold bg-secondary-lm/90  dark:bg-secondary-dm/20 rounded-xl border-1 border-secondary-lm dark:border-0'>
      {menuItems.map(({ id, name, translationId, url }) => (
        <a
          key={id}
          className='py-2 px-2 sm:px-4 hover:border-b-2 border-primary-dm dark:border-secondary-dm'
          href={url}
        >
          <FormattedMessage
            id={translationId}
            defaultMessage={name}
          />
        </a>
      ))}
    </nav>
  </header>
)
