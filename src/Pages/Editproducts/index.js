import { Link } from 'react-router-dom';
import { Container } from './styles';

import Centralizer from '../../components/Centralizer';
import ProductForm from '../../components/ProductForm';

import back from '../../assets/images/back.svg';

export default function EditProducts() {
  return (
    <Centralizer>
      <Container>
        <header>
          <button type="button" className="back-button">
            <img src={back} alt="voltar" />
            <Link to="/">Voltar</Link>
          </button>

          <h3>Editar produto</h3>
        </header>

        <ProductForm
          buttonLabel="Salvar alterações"
        />
      </Container>
    </Centralizer>
  );
}
