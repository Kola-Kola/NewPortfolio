import { Props } from './types'
import {
  TitleLarge,
  TitleSmall,
  TitleMedium,
  HeadingContainer
} from './styles'

const titleSize = [
  { value: 'small', component: TitleSmall },
  { value: 'medium', component: TitleMedium },
  { value: 'large', component: TitleLarge },
]

interface IStyles {
  fontSize: string
}

const Title = (value: string, size: string, styles?: IStyles) => {
  const title = titleSize.find(item => item.value === size)

  if (title && !styles) {
    return <title.component>{value}</title.component>
  }

  if (title && styles) {
    return <title.component style={styles}>{value}</title.component>
  }

  return null
}

const Heading = ({ title, icon, size, styles }: Props) => {
  return (
    <HeadingContainer>
      { icon && (
        <span>{icon}</span>
      )}

      {Title(title, size, styles)}
    </HeadingContainer>
  )
}

export default Heading
