import {Link as LinkStyle, List, UnorderedList} from './styles'
import Link from 'next/link'
import {Props} from './types'

const Menu = ({
  styleContainer,
  styleLink,
  configs,
}: Props) => {
  return (
    <UnorderedList style={styleContainer || {}}>
      { configs.map((item, i: number) => (
        <List key={`${item.label}__${i}`}>
          <Link
              href={item.path}
              shallow={false}
          >
              <LinkStyle
                  style={styleLink}
              >
                  {item.label}
              </LinkStyle>
          </Link>
        </List>
      )) }
    </UnorderedList>
  )
};

export default Menu
