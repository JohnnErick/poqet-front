import { useNavigate } from 'react-router-dom';

import { pokebola } from 'Utils/constants';

import { Container, Pokelogo, Title, Breadcrumb } from './styles';

export default function Topbar({ title }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Breadcrumb>
        {title !== 'Home' && (
          <span onClick={() => navigate('/')}>&#60;</span>
        )}
        <Title>{title}</Title>
      </Breadcrumb>
      <Pokelogo src={pokebola} />
    </Container>
  )
}
