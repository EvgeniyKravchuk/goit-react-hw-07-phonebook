import axios from "axios";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function postContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function deleteContact(id) {
  const response = await axios.delete("/contacts/" + id);
  return response;
}
