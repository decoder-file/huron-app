import { Button } from '@components/Button'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Checkbox from 'expo-checkbox'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: ${getStatusBarHeight() + 40}px 24px ${getStatusBarHeight() + 20}px
    24px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-style: normal;
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: center;
`

export const Caption = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-style: normal;
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 46px;
  text-align: center;
`

export const ButtonLogin = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_200};
`

export const ContainerLoginWithSocialNetwork = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 29px;
`

export const SocialNetworkButton = styled.TouchableOpacity`
  width: 50px;
  padding: 15px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddada;
`

export const ImgSocialNetworkButton = styled.Image``

export const EnterButton = styled.TouchableOpacity`
  margin-top: 20px;
`

export const EnterButtonTitle = styled.Text`
  font-style: normal;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK};

  text-align: center;
`
export const CheckboxContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CheckboxText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: 12px;
  font-style: normal;
  color: #ada4a5;
  text-align: left;
  margin-left: 10px;
`

export const CheckboxComponent = styled(Checkbox)`
  border-radius: 4px;
  border: 1px solid #ada4a5;
`

export const ContainerSeparator = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 29px;
  align-items: center;
  justify-content: space-between;
`

export const SeparatorLine = styled.View`
  width: 44%;
  height: 2px;
  background-color: #dddada;
  border-radius: 8px;
`

export const SeparatorText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-style: normal;
`
export const SeparatorInput = styled.View`
  margin-top: 15px;
`
