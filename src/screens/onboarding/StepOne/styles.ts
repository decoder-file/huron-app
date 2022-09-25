import styled from "styled-components/native";

import { Button } from "@components/Button";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_200};
  padding: 24px;
`;

export const ContainerImg = styled.View`
  align-items: center;
`;

export const Img = styled.Image`
  margin-bottom: 50px;
`;

export const ButtonStart = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center;
  line-height: 27px;
`;
