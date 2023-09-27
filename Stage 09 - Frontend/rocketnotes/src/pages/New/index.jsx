import { Header } from "../../components/Header";
import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button"

import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

import { Link } from 'react-router-dom';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links Úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem value="" isNew placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem value="" isNew placeholder="Nova Tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
