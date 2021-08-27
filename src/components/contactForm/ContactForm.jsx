import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Input, Label, Button, Form } from "./ContactForm.styled";
import { dispatchFetchContacts } from "../../redux/contacts/contacts-operations";
import { postContact } from "../../API/api-operations";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const id = uuidv4();
    const contact = { id, name, number };
    const notUniqueName = contacts.some((item) => item.name === name);
    const notUniqueNumber = contacts.some((item) => item.number === number);

    if (notUniqueName) {
      return alert(name + " уже добавлен(а) в список контактов");
    } else if (notUniqueNumber) {
      return alert("Уже добавлен контакт с номером: " + number);
    } else if (name === "" || number === "") {
      return alert("Пожалуйста, введите Имя и номер.");
    } else {
      postContact(contact);
      dispatch(dispatchFetchContacts());

      clear();
    }
  };

  const clear = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Имя:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Введите имя"
          onChange={(evt) => {
            setName(evt.target.value);
          }}
          value={name}
        />
      </Label>
      <Label>
        Номер:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="Введите номер телефона"
          onChange={(evt) => {
            setNumber(evt.target.value);
          }}
          value={number}
        />
      </Label>
      <Button type="submit">Подтвердить</Button>
    </Form>
  );
}

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };
