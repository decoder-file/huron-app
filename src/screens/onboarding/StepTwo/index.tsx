import { View } from "react-native";

import {
  Container,
  Title,
  Description,
  Button,
  Contents,
  ContainerButton,
} from "./styles";

export function StepTwo() {
  return (
    <Container>
      <View />
      <Contents>
        <View>
          <Title>Acompanhe sua{"\n"}agenda</Title>
          <Description>
            Não se preocupe se você tiver problemas para determinar seus
            objetivos, podemos ajudá-lo a determinar seus objetivos e acompanhar
            seus objetivos
          </Description>
        </View>
        <ContainerButton>
          <Button />
        </ContainerButton>
      </Contents>
    </Container>
  );
}
