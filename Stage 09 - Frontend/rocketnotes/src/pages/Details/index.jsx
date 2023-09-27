import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao ReactJS</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolore laborum adipisci? Magnam quos amet laborum quod, mollitia
            accusamus inventore minima dignissimos commodi sed, neque corporis
            unde vel modi culpa. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae dolore laborum adipisci? Magnam quos
            amet laborum quod, mollitia accusamus inventore minima dignissimos
            commodi sed, neque corporis unde vel modi culpa.
          </p>
          <Section title="Links Uteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
