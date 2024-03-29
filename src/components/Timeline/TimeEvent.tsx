// external
import { FormattedMessage } from 'react-intl'

// components
import { Tags } from '../Tags/Tags'

// types
import { type TimelineEvent } from '@/types'

interface Props {
  timelineEvent: TimelineEvent
}

export const TimeEvent: React.FC<Props> = ({ timelineEvent }) => (
  <div className="relative w-full my-8 pl-11 after:content-[''] after:w-3 after:h-3 after:bg-secondary-lm dark:after:bg-secondary-dm after:rounded-full after:absolute after:border-2 after:border-secondary-lm dark:after:border-secondary-dm after:top-2 after:left-0 after:z-10">
    <div className='flex row flex-wrap gap-4 sm:gap-0'>
      <div className='sm:basis-2/4 basis-full'>
        <h1 className='text-secondary-lm dark:text-secondary-dm font-bold text-xl font-raleway'>
          <FormattedMessage
            id={timelineEvent.title}
            defaultMessage={timelineEvent.title}
          />
        </h1>
        <h4 className='text-primary-lm dark:text-primary-dm text-lg font-medium font-roboto'>{timelineEvent.company}</h4>
        <h4 className='text-primary-lm dark:text-primary-dm text-lg font-light font-roboto'>
          <FormattedMessage
            id={timelineEvent.date}
            defaultMessage={timelineEvent.date}
          />
        </h4>
      </div>
      <div className='basis-full sm:basis-1/2 text-justify'>
        <p className='text-primary-lm dark:text-primary-dm text-lg font-light font-roboto'>
          <FormattedMessage
            id={timelineEvent.description}
            defaultMessage={timelineEvent.description}
          />
        </p>
        {(timelineEvent.list != null) && <Tags list={timelineEvent.list} />}
      </div>
    </div>
  </div>
)
