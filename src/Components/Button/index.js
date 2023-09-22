import { Container } from './styles';

export default function Button({ children, type = 'primary', onClick, disabled }) {
  const types = {
    primary: {
      color: '#fff',
      backgroundColor: 'green'
    },
    secondary: {
      color: "#000",
      backgroundColor: 'grey'
    }
  };

  return (
    <Container
      style={types[type]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Container>
  )
}
