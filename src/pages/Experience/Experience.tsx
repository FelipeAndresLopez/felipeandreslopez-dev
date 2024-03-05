// external
import { FormattedMessage } from 'react-intl'

// components
import { Timeline } from '@/components/Timeline/Timeline.tsx'
import { Section } from '@/components/Section/Section.tsx'
import { BriefcaseIcon } from '@/components/Icons/BriefcaseIcon.tsx'

// types
import { type TimelineEvent } from '@/types'

interface Props {
  workExperiences: TimelineEvent[]
}

const Experience: React.FC<Props> = ({ workExperiences }) => (
  <>
    <Section id='experiencia'>
      <div className='flex items-center'>
        <BriefcaseIcon />
        <h1 className='m-0 ml-2 text-2xl text-primary-lm dark:text-primary-dm font-raleway sm:text-3xl font-bold'>
          <FormattedMessage
            id='experience.title'
            defaultMessage='experience.title'
          />
        </h1>
      </div>
      <Timeline timelineEvents={workExperiences} />
    </Section>
  </>
)

export default Experience
