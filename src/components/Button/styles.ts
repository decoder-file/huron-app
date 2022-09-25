import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: 18px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GREEN_200};
`;
