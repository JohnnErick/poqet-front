import { Container, ErrorLabel, Input, Label } from './styles';

export default function InputText({
  error,
  errorMsg,
  onChange,
  placeholder,
  minLength = false,
  style,
  label
}) {
  return (
    <Container style={style}>
      {label && <Label>{label}</Label>}
      <Input
        minLength={minLength}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
      />
      {error && <ErrorLabel>{errorMsg}</ErrorLabel>}
    </Container>
  )
}
