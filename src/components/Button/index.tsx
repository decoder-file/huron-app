import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: "primary" | "secondary";
  icon?: React.ReactNode;
}

import { Container, Title } from "./styles";

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      {icon && icon}
      <Title>{title}</Title>
    </Container>
  );
}
