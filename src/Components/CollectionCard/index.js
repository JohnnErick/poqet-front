import { useNavigate } from 'react-router-dom';

import { Container, Cover, Card, PriceRef, Price, Button } from './styles';

export default function CollectionCard({ name, cover }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Cover src={cover} />
      <Card>
        <h2>{name}</h2>
        <p>Descricao da colecao</p>
        <PriceRef>
          <Price type='minor'>menor preco</Price>
          <Price>Maior preco</Price>
        </PriceRef>
        <Button type="button" onClick={() => navigate('/collection')}>Acessar</Button>
      </Card>
    </Container>
  )
}
