import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  type?: 'primary' | 'secondary'
  // eslint-disable-next-line no-undef
  icon?: React.ReactNode
}

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      {icon && icon}
      <Title>{title}</Title>
    </Container>
  )
}
