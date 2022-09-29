import styled from 'styled-components/native'
import { TextInput } from 'react-native'

export const Container = styled.View`
  background-color: #f7f8f8;
  width: 100%;
  height: 58px;
  border-radius: 14px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`

export const InputContainer = styled(TextInput)`
  width: 90%;
  height: 100%;
  border-radius: 14px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-left: 10px;
`
