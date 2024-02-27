interface Props {
  imageUrl: string
}

export const SquareAvatar: React.FC<Props> = ({ imageUrl }) => (
  <img
    className='aspect-square shadow-xl size-64 border-8 border-teal-300/40 gap-3 rotate-3 rounded-2xl'
    src={imageUrl}
    alt='Felipe picture'
  />
)
