// components
import { Timeline } from '../../components/Timeline/Timeline.tsx'
import { Section } from '../../components/Section/Section.tsx'
import { BriefcaseIcon } from '../../components/Icons/BriefcaseIcon.tsx'

// types
import { type TimelineEvent } from '../../types'

interface Props {
  workExperiences: TimelineEvent[]
}

const Experience: React.FC<Props> = ({ workExperiences }) => (
  <>
    <Section id="experience">
      <div className='flex items-center'>
        <BriefcaseIcon />
        <h1 className="m-0 ml-2 text-2xl text-white font-raleway sm:text-3xl font-bold">
          Experiencia Laboral
        </h1>
      </div>
      <Timeline timelineEvents={workExperiences} />
    </Section>
  </>
)

export default Experience
