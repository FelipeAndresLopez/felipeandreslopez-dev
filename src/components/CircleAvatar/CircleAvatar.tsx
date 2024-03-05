interface Props {
  imageUrl: string
}

export const CircleAvatar: React.FC<Props> = ({ imageUrl }) => (
  <img
    className="aspect-square rounded-full shadow-lg size-24 border-4 border-secondary-lm dark:border-secondary-dm gap-3"
    src={imageUrl}
    alt="Felipe picture"
  />
)
