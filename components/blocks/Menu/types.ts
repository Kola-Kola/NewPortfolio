export interface IMenu {
  path: string
  label: string
}

interface OwnProps {
  configs: IMenu[]
  styleContainer?: {
    padding: number
  }
  styleLink?: {
    fontSize: string
  }
  openInNewWindow?: boolean
}

export type Props = OwnProps
