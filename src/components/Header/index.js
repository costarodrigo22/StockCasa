import { Link } from 'react-router-dom';
import { Container, Logo, ContainerMenu } from './styles';

import Exit from '../Exit';

export default function Header() {
  return (
    <Container>
      <ContainerMenu>
        <Logo>
          Olá, Bárbara
        </Logo>

        <div className="list-items">
          <li><Link to="/">Início</Link></li>
          <li><a href="#">Tema</a></li>
          <Exit>BL</Exit>
        </div>
      </ContainerMenu>
    </Container>
  );
}
