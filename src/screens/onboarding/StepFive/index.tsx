import Image from '@assets/geometry/StepFiveImg.png'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Img,
  Title,
  Button,
  Contents,
  ContainerButton,
} from './styles'

export function StepFive() {
  const navigation = useNavigation()
  return (
    <Container>
      <Img source={Image} />
      <Contents>
        <Title>Agora vamos concluir {'\n'} seu cadastro!</Title>
        <ContainerButton>
          <Button onPress={() => navigation.navigate('registration')} />
        </ContainerButton>
      </Contents>
    </Container>
  )
}
