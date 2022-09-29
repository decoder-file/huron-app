import styled from 'styled-components/native'

import { ButtonProps } from './index'

export const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: 18px;
  flex-direction: row;
`

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ type }) => (type === 'primary' ? '#48E1B' : '#FFFFFF')};
  margin-left: 10px;
`
