import { TouchableOpacityProps } from "react-native";

interface FunctionSelectButtonProps extends TouchableOpacityProps {
  title: string;
  img: React.ReactNode;
  select: boolean;
}

import { Container, Title, ContainerImg } from "./styles";

export function FunctionSelectButton({
  title,
  img,
  select,
  ...rest
}: FunctionSelectButtonProps) {
  return (
    <Container
      activeOpacity={0.8}
      {...rest}
      style={{ borderColor: select ? "#48e1bd" : "#becada" }}
    >
      <ContainerImg style={{ backgroundColor: select && "#48e1bd" }}>
        {img}
      </ContainerImg>
      <Title>{title}</Title>
    </Container>
  );
}
