import { useDispatch, useSelector } from "react-redux";
import { Input, Label } from "../contactForm/ContactForm.styled";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

export default function Filter() {
  const state = useSelector((state) => state);
  const filter = getFilter(state);
  const dispatch = useDispatch();

  return (
    <Label filter="true">
      Введите имя для поиска в списке контактов
      <Input
        name="filter"
        onChange={(evt) => {
          dispatch(changeFilter(evt.target.value));
        }}
        value={filter}
      />
    </Label>
  );
}
