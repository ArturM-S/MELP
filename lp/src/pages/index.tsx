import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Container } from '../../shared/pages/home.styles';
import { Carrousel } from '../components/Sobre/Carrousel';
import { MobileCarrousel } from '../components/Sobre/MobileCarrousel';
import { Presentation } from '../components/Sobre/Presentation';
import { Summary } from '../components/Sobre/Summary';
import { DarkKitchens } from '../components/Sobre/Market';

export default function Sobre() {
  const [screenWidth, setScreenWidth] = useState(0);

  const width = useWindowWidth();

  useEffect(() => { 
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
  }, [width]);

  return (
    <Container>
      <Presentation />
      <Summary/>
      <DarkKitchens />

      {screenWidth < 800 ? <MobileCarrousel /> : <Carrousel />}
    </Container>
  );
}
