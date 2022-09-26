import styled from "styled-components/native";

import { NextStepButton } from "@components/NextStepButton";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Img = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: left;
  line-height: 36px;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GREY_700};
  text-align: left;
  line-height: 21px;
  padding-right: 15px;
`;

export const Button = styled(NextStepButton)`
  border-right-color: #a5a6f6;
  border-right-width: 2px;
  border-top-color: #a5a6f6;
  border-top-width: 2px;
`;

export const Contents = styled.View`
  justify-content: space-between;
  height: 50%;
  padding: 24px;
`;

export const ContainerButton = styled.View`
  align-items: flex-end;
`;
