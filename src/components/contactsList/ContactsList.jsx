import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchFetchContacts } from "../../redux/contacts/contacts-operations";
import { deleteContact } from "../../API/api-operations";
import { List, Item, Button } from "./ContaxList.styled";

export default function ContactsList() {
  const contacts = useSelector((state) =>
    filterElements(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchFetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function filterElements(contacts, filterValue) {
    if (contacts.length === 0) {
      return [];
    }
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
              onClick={(evt) => {
                deleteContact(evt.currentTarget.id);
                dispatch(dispatchFetchContacts());
              }}
            >
              <FaRegTrashAlt />
            </Button>
          </Item>
        );
      })}
    </List>
  );
}
