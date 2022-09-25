import logoImg from "@assets/logos/huron-preto.png";
import { View } from "react-native";

import { Container, Img, Title, ButtonStart, ContainerImg } from "./styles";

export function StepOne() {
  return (
    <Container>
      <View />
      <ContainerImg>
        <Img source={logoImg} />
        <Title>
          Sua empresa precisa de {"\n"}
          uma dose de Huron.
        </Title>
      </ContainerImg>
      <ButtonStart title="Iniciar" />
    </Container>
  );
}
