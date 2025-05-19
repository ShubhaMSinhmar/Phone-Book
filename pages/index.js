import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (phone) => {
    setContacts(contacts.filter((c) => c.phone !== phone));
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6">
      <Header />
      <InputForm addContact={addContact} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </main>
  );
}
