import { UnorderedList, List, Link } from './styles'
import { Props } from './types'

const Menu = ({ styleContainer, styleLink, configs }: Props) => {
  return (
    <UnorderedList style={styleContainer || {}}>
      { configs.map((item, i: number) => (
        <List key={`${item.label}__${i}`}>
          <Link
            style={styleLink}
            href={item.path}
            target="_blank"
          >
            {item.label}
          </Link>
        </List>
      )) }
    </UnorderedList>
  )
}

export default Menu
