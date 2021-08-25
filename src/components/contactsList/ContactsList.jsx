import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import { List, Item, Button } from "./ContaxList.styled";

export default function ContactsList() {
  const contacts = useSelector((state) =>
    filterElements(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();

  function filterElements(contacts, filterValue) {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }

  return (
    <List>
      {contacts.map((contact) => {
        return (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              id={contact.id}
              onClick={(evt) => dispatch(deleteContact(evt.currentTarget.id))}
            >
              <FaRegTrashAlt />
            </Button>
          </Item>
        );
      })}
    </List>
  );
}
