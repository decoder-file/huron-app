import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SignIn, Lock, EnvelopeSimple } from 'phosphor-react-native'

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
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  ContainerSeparator,
  SeparatorLine,
  SeparatorText,
  SeparatorInput,
} from './styles'

import { Input } from '@components/Input'

export function Login() {
  const navigation = useNavigation()
  return (
    <Container>
      <View>
        <Title>Olá,</Title>
        <Caption>Bem-vindo!</Caption>
        <Input icon={<EnvelopeSimple size={18} />} placeholder="Email" />
        <SeparatorInput />
        <Input icon={<Lock size={18} />} placeholder="Senha" />

        <ForgotPasswordButton activeOpacity={0.8}>
          <ForgotPasswordButtonText>
            Esqueceu sua senha?
          </ForgotPasswordButtonText>
        </ForgotPasswordButton>
      </View>

      <View>
        <ButtonLogin
          title="Entrar"
          icon={<SignIn size={28} color="#FFFFFF" />}
        />

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
          onPress={() => navigation.navigate('registration')}
        >
          <EnterButtonTitle>
            Não tem uma conta ainda? Registre-se
          </EnterButtonTitle>
        </EnterButton>
      </View>
    </Container>
  )
}
