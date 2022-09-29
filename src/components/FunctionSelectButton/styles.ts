import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  max-width: 90px;
  justify-content: center;
  align-items: center;
  padding: 6px;
  /* border: 2px solid #48e1bd; */
  /* border: 2px solid #becada; */
  border: 1px;

  border-radius: 15px;
`

export const ContainerImg = styled.View`
  border: 2px solid #becada;
  padding: 20px;
  border-radius: 15px;
`

export const Title = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  margin-top: 10px;
`
