interface Props {
  imageUrl: string
  className?: string
}

export const SquareAvatar: React.FC<Props> = ({ imageUrl, className }) => (
  <img
    className={`aspect-square shadow-xl size-36 mx-auto sm:size-64 border-8 border-teal-300/40 gap-3 rotate-3 rounded-2xl ${className}`}
    src={imageUrl}
    alt='Felipe picture'
  />
)
