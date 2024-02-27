export interface TimelineEvent {
  id: string
  date: string
  company: string
  title: string
  description: string
  list?: List[]
}

export interface ListItem {
  id: string
  name: string
}
