import { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Lock, EnvelopeSimple, User } from 'phosphor-react-native'

import Google from '@assets/socialNetwork/google.png'
import Facebook from '@assets/socialNetwork/facebook.png'

import {
  Container,
  Title,
  Caption,
  ButtonLogin,
  ContainerLoginWithSocialNetwork,
  SocialNetworkButton,
  ImgSocialNetworkButton,
  EnterButton,
  EnterButtonTitle,
  CheckboxContainer,
  CheckboxText,
  CheckboxComponent,
  ContainerSeparator,
  SeparatorLine,
  SeparatorText,
  SeparatorInput,
} from './styles'

import { Input } from '@components/Input'

export function Registration() {
  const [isChecked, setChecked] = useState(false)

  const navigation = useNavigation()
  return (
    <Container>
      <View>
        <Title>Olá,</Title>
        <Caption>Crie sua conta</Caption>
        <Input icon={<User size={18} />} placeholder="Primeiro nome" />
        <SeparatorInput />
        <Input icon={<User size={18} />} placeholder="Ultimo nome" />
        <SeparatorInput />
        <Input icon={<EnvelopeSimple size={18} />} placeholder="Email" />
        <SeparatorInput />
        <Input icon={<Lock size={18} />} placeholder="Senha" />

        <CheckboxContainer activeOpacity={0.8}>
          <CheckboxComponent value={isChecked} onValueChange={setChecked} />
          <CheckboxText>
            Ao continuar você aceita nossa Política de Privacidade e Termos de
            Uso
          </CheckboxText>
        </CheckboxContainer>
      </View>

      <View>
        <ButtonLogin title="Register" />

        <ContainerSeparator>
          <SeparatorLine />
          <SeparatorText>Ou</SeparatorText>
          <SeparatorLine />
        </ContainerSeparator>

        <ContainerLoginWithSocialNetwork>
          <SocialNetworkButton style={{ marginRight: 30 }} activeOpacity={0.8}>
            <ImgSocialNetworkButton source={Google} />
          </SocialNetworkButton>
          <SocialNetworkButton activeOpacity={0.8}>
            <ImgSocialNetworkButton source={Facebook} />
          </SocialNetworkButton>
        </ContainerLoginWithSocialNetwork>

        <EnterButton
          activeOpacity={0.8}
          onPress={() => navigation.navigate('login')}
        >
          <EnterButtonTitle>já tem uma conta? Conecte-se</EnterButtonTitle>
        </EnterButton>
      </View>
    </Container>
  )
}
