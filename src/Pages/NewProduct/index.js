import { Link } from 'react-router-dom';
import { Container } from './styles';

import Centralizer from '../../components/Centralizer';

import back from '../../assets/images/back.svg';
import ProductForm from '../../components/ProductForm';

export default function PageDefault() {
  return (
    <Centralizer>
      <Container>
        <header>
          <button type="button" className="back-button">
            <img src={back} alt="voltar" />
            <Link to="/">Voltar</Link>
          </button>

          <h3>Novo produto</h3>
        </header>

        <ProductForm
          buttonLabel="Cadastrar"
        />

      </Container>
    </Centralizer>
  );
}
