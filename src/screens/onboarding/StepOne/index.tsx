import logoImg from '@assets/logos/huron-preto.png'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { Container, Img, Title, ButtonStart, ContainerImg } from './styles'

export function StepOne() {
  const navigation = useNavigation()
  return (
    <Container>
      <View />
      <ContainerImg>
        <Img source={logoImg} />
        <Title>
          Sua empresa precisa de {'\n'}
          uma dose de Huron.
        </Title>
      </ContainerImg>
      <ButtonStart
        title="Iniciar"
        type="secondary"
        onPress={() => navigation.navigate('stepTwo')}
      />
    </Container>
  )
}
