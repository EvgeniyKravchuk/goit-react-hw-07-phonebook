import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchFetchContacts } from "../../redux/contacts/contacts-operations";
import { deleteContact } from "../../API/api-operations";
import { List, Item, Button } from "./ContaxList.styled";
import {
  getFilter,
  getIsLoading,
  getFilteredContacts,
} from "../../redux/contacts/contacts-selectors";

export default function ContactsList() {
  const state = useSelector((state) => state);
  const filter = getFilter(state);
  const isLoading = getIsLoading(state);
  const filteredContacts = getFilteredContacts(state, filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchFetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isLoading ? (
        <List>
          {filteredContacts.map((contact) => {
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
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
}
