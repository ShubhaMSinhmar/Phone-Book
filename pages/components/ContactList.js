import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onDelete }) {
  if (!contacts || contacts.length === 0) {
    return <p className="text-gray-500">No contacts found.</p>;
  }
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.phone}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
