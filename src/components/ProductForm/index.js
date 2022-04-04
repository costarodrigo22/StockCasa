import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';
import { Form, ButtonContainer } from './styles';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ProductForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Descrição" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="" id="initial-value">Categoria</option>
          <option value="limpeza">Limpeza</option>
          <option value="mantimento">Mantimento</option>
          <option value="escritorio">Escritório</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Input type="number" placeholder="Valor" />
      </FormGroup>

      <FormGroup>
        <Input type="number" placeholder="Saldo" />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ProductForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
