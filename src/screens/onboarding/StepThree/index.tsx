import { View } from "react-native";

import Image from "@assets/geometry/StepThreeImg.png";

import {
  Container,
  Img,
  Title,
  Description,
  Button,
  Contents,
  ContainerButton,
} from "./styles";

export function StepThree() {
  return (
    <Container>
      <Img source={Image} />
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
