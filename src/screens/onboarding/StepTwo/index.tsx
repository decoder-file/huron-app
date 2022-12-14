import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import Image from '@assets/geometry/StepTwoImg.png'

import {
  Container,
  Img,
  Title,
  Description,
  Button,
  Contents,
  ContainerButton,
} from './styles'

export function StepTwo() {
  const navigation = useNavigation()
  return (
    <Container>
      <Img source={Image} />
      <Contents>
        <View>
          <Title>Acompanhe sua{'\n'}agenda</Title>
          <Description>
            Não se preocupe se você tiver problemas para determinar seus
            objetivos, podemos ajudá-lo a determinar seus objetivos e acompanhar
            seus objetivos
          </Description>
        </View>
        <ContainerButton>
          <Button onPress={() => navigation.navigate('stepThree')} />
        </ContainerButton>
      </Contents>
    </Container>
  )
}
