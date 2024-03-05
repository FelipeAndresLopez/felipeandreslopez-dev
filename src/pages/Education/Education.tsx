// external
import { FormattedMessage } from 'react-intl'

// components
import { BookIcon } from '../../components/Icons/BookIcon.tsx'
import { Section } from '../../components/Section/Section.tsx'
import { Timeline } from '../../components/Timeline/Timeline.tsx'

// types
import { type TimelineEvent } from '../../types'

interface Props {
  educationTitles: TimelineEvent[]
}

const Education: React.FC<Props> = ({ educationTitles }) => (
  <>
    <Section id='educacion'>
      <div className='flex items-center'>
        <BookIcon />
        <h1 className='m-0 ml-2 text-2xl text-primary-lm dark:text-primary-dm font-raleway sm:text-3xl font-bold'>
          <FormattedMessage
            id='education.title'
            defaultMessage='education.title'
          />
        </h1>
      </div>
      <Timeline timelineEvents={educationTitles} />
    </Section>
  </>
)

export default Education
