/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}
