const menuItems = [
  {
    id: '1',
    name: 'Inicio',
    url: './#inicio'
  },
  {
    id: '2',
    name: 'Experiencia',
    url: '/#experiencia'
  },
  {
    id: '3',
    name: 'Educación',
    url: '/#educacion'
  },
  {
    id: '4',
    name: 'Sobre Mi',
    url: '/#sobre-mi'
  }
]

export const Header: React.FC = () => (
  <header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto"'>
    <nav className='backdrop-blur-sm mt-4 flex px-3 text-sm justify-center items-center text-white font-bold bg-teal-300/20 rounded-xl'>
      {menuItems.map(({ id, name, url }) => (
        <a
          key={id}
          className='py-2 px-2 sm:px-4 hover:border-b-2 border-teal-300'
          href={url}
        >
          {name}
        </a>
      ))}
    </nav>
  </header>
)
