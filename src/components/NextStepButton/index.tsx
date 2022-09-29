import { TouchableOpacityProps } from 'react-native'

import { CaretRight } from 'phosphor-react-native'

import { Container, Contents } from './styles'

export function NextStepButton({ ...rest }: TouchableOpacityProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Contents>
        <CaretRight size={25} color="#FFFFFF" weight="bold" />
      </Contents>
    </Container>
  )
}
