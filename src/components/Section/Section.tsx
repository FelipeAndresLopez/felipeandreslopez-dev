interface Props {
  children: React.ReactNode
  id: string
}

export const Section: React.FC<Props> = ({ children, id }) => (
  <section
    id={id}
    className={`
    `}
  >
    {children}
  </section>
)
