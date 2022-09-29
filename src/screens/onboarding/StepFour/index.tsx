import { View } from 'react-native'

import { Syringe, FirstAidKit, Pill, Bandaids } from 'phosphor-react-native'

import { FunctionSelectButton } from '@components/FunctionSelectButton'
import Image from '@assets/geometry/stepFourImg.png'

import {
  Container,
  Img,
  Title,
  Description,
  Button,
  Contents,
  ContainerButton,
  ContainerFunctionSelect,
} from './styles'
import { useState } from 'react'

export function StepFour() {
  const [selectFunction, setSelectFunction] = useState('')

  function Select(text: string) {
    setSelectFunction(text)
  }

  return (
    <Container>
      <Img source={Image} />
      <Contents>
        <View>
          <Title>Qual sua função?</Title>
          <Description>
            Conte um pouco mais de qual a sua principal atividade (Exemplo:
            Medico, nutricionista, etc...)
          </Description>
          <ContainerFunctionSelect>
            <FunctionSelectButton
              title="Denstista"
              img={<FirstAidKit size={20} />}
              onPress={() => Select('Denstista')}
              select={selectFunction === 'Denstista' && true}
            />
            <FunctionSelectButton
              title="Cirurgião"
              img={<Syringe size={20} />}
              onPress={() => Select('Cirurgião')}
              select={selectFunction === 'cirurgiao' && true}
            />
            <FunctionSelectButton
              title="Nutri"
              img={<Pill size={20} />}
              onPress={() => Select('nutri')}
              select={selectFunction === 'nutri' && true}
            />
            <FunctionSelectButton
              title="Estetica"
              img={<Bandaids size={20} />}
              onPress={() => Select('estetica')}
              select={selectFunction === 'estetica' && true}
            />
          </ContainerFunctionSelect>
        </View>
        <ContainerButton>
          <Button />
        </ContainerButton>
      </Contents>
    </Container>
  )
}
