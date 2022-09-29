import { TouchableOpacityProps } from 'react-native'

import { Container, Title, ContainerImg } from './styles'

interface FunctionSelectButtonProps extends TouchableOpacityProps {
  title: string
  // eslint-disable-next-line no-undef
  img: React.ReactNode
  select: boolean
}

export function FunctionSelectButton({
  title,
  img,
  select,
  ...rest
}: FunctionSelectButtonProps) {
  return (
    <Container
      activeOpacity={0.8}
      {...rest}
      style={{ borderColor: select ? '#48e1bd' : '#becada' }}
    >
      <ContainerImg style={{ backgroundColor: select && '#48e1bd' }}>
        {img}
      </ContainerImg>
      <Title>{title}</Title>
    </Container>
  )
}
