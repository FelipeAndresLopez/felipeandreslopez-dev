// components
import { Tags } from '../Tags/Tags'

// types
import { type TimelineEvent } from '../../types'

interface Props {
  timelineEvent: TimelineEvent
}

export const TimeEvent: React.FC<Props> = ({ timelineEvent }) => (
  <div className="relative w-full my-8 pl-11 after:content-[''] after:w-3 after:h-3 after:bg-teal-300 after:rounded-full after:absolute after:border-2 after:border-teal-300 after:top-2 after:left-0 after:z-10">
    <div className='flex row'>
      <div className='basis-2/4'>
        <h1 className='text-teal-300 font-bold text-xl font-raleway'>{timelineEvent.title}</h1>
        <h4 className='text-white text-lg font-medium font-roboto'>{timelineEvent.company}</h4>
        <h4 className='text-white text-lg font-light font-roboto'>{timelineEvent.date}</h4>
      </div>
      <div className='basis-1/2 text-justify'>
        <p className='text-white text-lg font-light font-roboto'>{timelineEvent.description}</p>
        {(timelineEvent.list != null) && <Tags list={timelineEvent.list} />}
      </div>
    </div>
  </div>
)