import "./App.module.css";
import { Wrapper, Title } from "./components/General.styled";
import ContactForm from "./components/contactForm/ContactForm";
import ContactsList from "./components/contactsList/ContactsList";
import Filter from "./components/filter/Filter";

export default function App() {
  return (
    <Wrapper>
      <Title>Телефонная книга:</Title>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Wrapper>
  );
}
