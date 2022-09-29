import styled from 'styled-components/native'

import { NextStepButton } from '@components/NextStepButton'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Img = styled.Image`
  width: 100%;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: left;
  line-height: 36px;
  margin-bottom: 16px;
`

export const Button = styled(NextStepButton)`
  border: 2px solid #a5a6f6;
`

export const Contents = styled.View`
  justify-content: space-between;
  height: 50%;
  padding: 24px;
`

export const ContainerButton = styled.View`
  align-items: flex-end;
`
