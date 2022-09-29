import { TextInputProps } from 'react-native'

import { Container, InputContainer } from './styles'

interface InputProps extends TextInputProps {
  // eslint-disable-next-line no-undef
  icon: React.ReactNode
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <Container>
      {icon}
      <InputContainer {...rest} />
    </Container>
  )
}
