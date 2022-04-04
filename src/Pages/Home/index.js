import { Link } from 'react-router-dom';
import { Container, InputSearchContainer, Card } from './styles';

import Centralizer from '../../components/Centralizer';

import next from '../../assets/images/next.svg';
import productsQuantity from '../../assets/images/productsQuantity.svg';
import money from '../../assets/images/money.svg';
import request from '../../assets/images/request.svg';

export default function Home() {
  return (
    <Centralizer>
      <Container>
        <div className="title-header">
          <p>Itens em estoque</p>
        </div>
        <div className="contaier-content">
          <div className="infos">
            <InputSearchContainer>
              <input type="text" placeholder="Digite o nome do produto" />
            </InputSearchContainer>

            <div className="products">
              <Card>
                <div className="product-name">
                  <strong>Calculadora</strong>
                  <small>Escritório</small>
                </div>
                <span>3 Unidades</span>
                <span>R$ 12,00</span>
              </Card>

              <Card>
                <div className="product-name">
                  <strong>Calculadora</strong>
                  <small>Escritório</small>
                </div>
                <span>3 Unidades</span>
                <span>R$ 12,00</span>
              </Card>

              <Card>
                <div className="product-name">
                  <strong>Calculadora</strong>
                  <small>Escritório</small>
                </div>
                <span>3 Unidades</span>
                <span>R$ 12,00</span>
              </Card>

              <Card>
                <div className="product-name">
                  <strong>Calculadora</strong>
                  <small>Escritório</small>
                </div>
                <span>3 Unidades</span>
                <span>R$ 12,00</span>
              </Card>
            </div>

            <div className="next-items">
              <button type="button">
                <img src={next} alt="página anterior" />
              </button>
              <p>1</p>
              <button type="button">
                <img src={next} alt="página anterior" />
              </button>
            </div>
          </div>
          <div className="actions">
            <div className="content-actions">
              <div className="cards-actions">
                <div className="quantity">
                  <div>
                    <img src={productsQuantity} alt="quantidade de produtos" />
                  </div>
                  <span>450 UN</span>
                </div>

                <div className="quantity">
                  <div>
                    <img src={money} alt="valor do estoque" />
                  </div>
                  <span>R$ 1.258,00</span>
                </div>

                <div className="quantity">
                  <div>
                    <img src={request} alt="requisições" />
                  </div>
                  <span>03</span>
                </div>
              </div>

              <div className="search-products">
                <div className="description">
                  <span>Busque produtos específicos para consulta</span>
                  <span>Ou edite algum produtojá existente</span>
                </div>
                <div className="config-products">
                  <Link to="/request">Requisite produtos</Link>
                  <img src={next} alt="configurar produtos" />
                </div>
              </div>

              <div className="add-products">
                <div className="description">
                  <span>Adicione aqui um novo item ao seu estoque</span>
                  <span className="warning">Não esqueça de preencher todos os campos</span>
                </div>
                <div className="add">
                  <Link to="/newProduct">Adicionar produto</Link>
                  <img src={next} alt="adicionar produtos" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </Centralizer>
  );
}
