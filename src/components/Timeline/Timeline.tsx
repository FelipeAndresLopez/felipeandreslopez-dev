import { type TimelineEvent } from '@/types'
import { TimeEvent } from './TimeEvent'

interface Props {
  timelineEvents: TimelineEvent[]
}

export const Timeline: React.FC<Props> = ({ timelineEvents }) => (
  <div className="relative after:content-[''] after:absolute after:w-px after:top-0 after:bottom-0 after:left-1.5 after:bg-secondary-lm dark:after:bg-secondary-dm/30">
    {timelineEvents.map((timelineEvent) => (
      <TimeEvent timelineEvent={timelineEvent} key={timelineEvent.id} />
    ))}
  </div>
)
