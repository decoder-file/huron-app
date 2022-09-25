import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

import { Container, Title } from "./styles";

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
