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
}

export type Props = OwnProps
