import { View } from "react-native";

import {
  Container,
  Title,
  Description,
  Button,
  Contents,
  ContainerButton,
} from "./styles";

export function StepThree() {
  return (
    <Container>
      <View />
      <Contents>
        <View>
          <Title>Defina suas tarefas</Title>
          <Description>Vamos te ajudar a alcançar seus objetivos!</Description>
        </View>
        <ContainerButton>
          <Button />
        </ContainerButton>
      </Contents>
    </Container>
  );
}
