import { useDispatch, useSelector } from "react-redux";
import { Input, Label } from "../contactForm/ContactForm.styled";
import { changeFilter } from "../../redux/contacts/contacts-actions";

export default function Filter() {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <Label filter="true">
      Введите имя для поиска в списке контактов
      <Input
        name="filter"
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        value={filter}
      />
    </Label>
  );
}
