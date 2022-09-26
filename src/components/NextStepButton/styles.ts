import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  padding: 7px;
  border-radius: 99px;
`;

export const Contents = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_200};
  border-radius: 99px;
`;
