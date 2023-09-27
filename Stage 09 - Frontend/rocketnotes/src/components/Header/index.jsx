import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/coutzera.png" alt="Foto do Usuario" />
        <div>
          <span>Bem-vindo</span>
          <strong>Hudson Coutinho</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
