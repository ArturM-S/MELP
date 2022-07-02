import { Button } from '../../Global/Button';
import { Section } from '../../Global/Section';

import {
  Banner,
  TextContainer,
  Title,
  Subtitle,
  Pattern, 
  BannerContainer,
  Container,
} from './styles';

export function Brands() {
  return (
    <Container>
      <Section variant="yellow">
        <TextContainer>
          <Title>Restaurantes digitais</Title>

          <Subtitle>
            Trabalhamos com a criação de restaurantes digitais para que operem
            de forma otimizada em uma mesma cozinha, estes restaurantes
            trabalham com cardápios digitais e dentro de marketplaces para que
            os pedidos sejam feitos e os pedidos sejam entregues com o 100% no
            delivery.
          </Subtitle>
          <Button
              variant="filled"
            >
              Faça parte
            </Button>
        </TextContainer>

        <BannerContainer>
          <Banner src="/banners/brands.webp" />
          <Pattern src="/assets/grayPattern.svg" />
        </BannerContainer>
      </Section>
    </Container>
  );
}
