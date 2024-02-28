import { type ListItem } from '../../types'

interface Props {
  list: ListItem[]
}

export const Tags: React.FC<Props> = ({ list }) => (
  <ul className='flex flex-wrap gap-2'>
    {list.map(({ name, id }) => (
      <li
        key={id}
        className='text-white text-sm font-light font-roboto border border-teal-300/30  py-0 px-2 mt-2'
      >
        {name}
      </li>
    ))}
  </ul>
)
