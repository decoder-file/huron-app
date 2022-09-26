import Image from "@assets/geometry/StepFiveImg.png";

import {
  Container,
  Img,
  Title,
  Button,
  Contents,
  ContainerButton,
} from "./styles";

export function StepFive() {
  return (
    <Container>
      <Img source={Image} />
      <Contents>
        <Title>Agora vamos concluir {"\n"} seu cadastro!</Title>
        <ContainerButton>
          <Button />
        </ContainerButton>
      </Contents>
    </Container>
  );
}
